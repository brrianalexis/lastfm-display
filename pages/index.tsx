import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

import { API_COMMON_PARAMS, SOUNDBARS_MARKUP, STYLE_TAG } from "@/constants";
import {
  ArtistInfoAPIResponse,
  Image,
  ModifiedArtist,
  RecentTracksAPIResponse,
  WeeklyArtistsAPIResponse,
} from "@/types";
import { escapeForbiddenCharacters } from "@/utils";

const Home: NextPage = () => {
  return (
    <Head>
      <title>Last.fm Display</title>
      <meta name="description" content="Last.fm Display" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const [{ data: recentTracksData }, { data: weeklyArtistsData }] =
    await Promise.all([
      axios.get<RecentTracksAPIResponse>(
        `${process.env.LASTFM_BASE_URL}/?method=user.getRecentTracks&${API_COMMON_PARAMS}`
      ),
      axios.get<WeeklyArtistsAPIResponse>(
        `${process.env.LASTFM_BASE_URL}/?method=user.getWeeklyArtistChart&${API_COMMON_PARAMS}`
      ),
    ]);

  const topWeeklyArtists = weeklyArtistsData.weeklyartistchart.artist.slice(
    0,
    3
  ) as ModifiedArtist[];

  for (const artist of topWeeklyArtists) {
    const { data: artistInfo } = await axios.get<ArtistInfoAPIResponse>(
      `${process.env.LASTFM_BASE_URL}/?method=artist.getInfo&${API_COMMON_PARAMS}&mbid=${artist.mbid}`
    );

    const artistImageUrl = artistInfo.artist.image.find(
      (image) => image.size === "medium"
    ) as Image;
    const artistImage = await axios.get(artistImageUrl["#text"], {
      responseType: "arraybuffer",
    });

    const rawArtistImage = Buffer.from(artistImage.data).toString("base64");
    const encodedArtistImage = `data:${artistImage.headers["content-type"]};base64,${rawArtistImage}`;

    artist.image = encodedArtistImage;
  }

  const lastTrack = recentTracksData.recenttracks.track[0];

  const xlImage = (
    lastTrack.image.find((image) => image.size === "extralarge") as Image
  )["#text"];

  const image = await axios.get(xlImage, { responseType: "arraybuffer" });

  const raw = Buffer.from(image.data).toString("base64");
  const encodedImage = `data:${image.headers["content-type"]};base64,${raw}`;

  const albumTitle = escapeForbiddenCharacters(lastTrack.album["#text"]);
  const artistName = escapeForbiddenCharacters(lastTrack.artist["#text"]);
  const trackName = escapeForbiddenCharacters(lastTrack.name);

  res.setHeader("Content-Type", "image/svg+xml");

  res.write(/*html*/ `
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" height="400">
      <foreignObject width="480" height="400">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${STYLE_TAG}
          <div class="container">
            <div class="now-playing-section">
              <div class="currentStatus">🎧 Last seen vibing to:</div>
              <div class="main">
                <a class="art" href="" target="_blank">
                  <img src="${encodedImage}" class="cover" alt="${albumTitle} by ${artistName} album cover" />
                </a>
                <div class="content">
                  <div class="song">${trackName}</div>
                  <div class="artist">${artistName}</div>
                  ${SOUNDBARS_MARKUP}
                </div>
              </div>
            </div>
            <div class="weekly-artists">
              <div class="weekly-artists-title">🎵 Top artists this week:</div>
              ${topWeeklyArtists
                .map((artist, index) => {
                  const rank = ["🥇", "🥈", "🥉"][index];

                  return `
                    <div class="artist-row">
                      <div class="artist-rank">${rank}</div>
                      <img 
                        src="${artist.image}" 
                        class="artist-image" 
                        alt="${escapeForbiddenCharacters(artist.name)}"
                      />
                      <div class="artist-info">
                        <div class="artist-name-row">
                          <div class="artist-name">
                            ${escapeForbiddenCharacters(artist.name)}
                          </div>
                          <div class="artist-plays">
                            ${artist.playcount} plays
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  `);
  res.end();

  return {
    props: {},
  };
}

export default Home;
