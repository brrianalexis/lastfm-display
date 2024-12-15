import type { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import axios from "axios";

import { escapeForbiddenCharacters } from "../utils";
import { TrackImage } from "../types";
import { RecentTracksAPIResponse } from "../types";

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
  const { data } = await axios.get<RecentTracksAPIResponse>(
    `${process.env.LASTFM_BASE_URL}/?method=user.getRecentTracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json`
  );

  const lastTrack = data.recenttracks.track[0];

  const xlImage = (
    lastTrack.image.find((image) => image.size === "extralarge") as TrackImage
  )["#text"];

  const image = await axios.get(xlImage, { responseType: "arraybuffer" });

  const raw = Buffer.from(image.data).toString("base64");
  const encodedImage = `data:${image.headers["content-type"]};base64,${raw}`;

  const albumTitle = escapeForbiddenCharacters(lastTrack.album["#text"]);
  const artistName = escapeForbiddenCharacters(lastTrack.artist["#text"]);
  const trackName = escapeForbiddenCharacters(lastTrack.name);

  res.setHeader("Content-Type", "image/svg+xml");
  res.write(`
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="480"
        height="173"
      >
        <foreignObject width="480" height="173">
          <div xmlns="http://www.w3.org/1999/xhtml" class="container">
            <style>
              div {
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
              }

              @media (prefers-color-scheme: dark) {
                .currentStatus {
                  color: #ffffff;
                }
              }

              .main {
                margin-top: 40px;
                display: flex;
              }
              
              .currentStatus {
                position: static;
                float: left;
                font-size: 24px;
                margin-top: -5px;
                margin-left: 10px;
              }
    
              .container {
                border-radius: 5px;
                padding: 10px 10px 10px 0px;
              }

              .art {
                float: left;
                width: 27%;
                margin-left: -5px;
              }

              .content {
                width: 71%;
              }

              .song {
                font-size: 24px;
                color: #666;
                text-align: center;
                margin-top: 3px;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
              }

              .artist {
                font-size: 20px;
                color: #b3b3b3;
                text-align: center;
                margin-bottom: 5px;
                margin-top: 4px;
              }

              .cover {
                border-radius: 5px;
                height: 100px;
                width: 100px;
              }

              #bars {
                height: 30px;
                bottom: 23px;
                margin: -20px 0 0 0px;
                position: absolute;
                width: 40px;
              }

              .bar {
                background: #1DB954cc;
                bottom: 1px;
                height: 3px;
                position: absolute;
                width: 3px;
                animation: sound 0ms -800ms linear infinite alternate;
              }

              @keyframes sound {
                0% {
                  opacity: .35;
                  height: 3px;
                }

                100% {
                  opacity: 1;
                  height: 15px;
                }
              }

              .bar:nth-child(1) {left: 1px; animation-duration: 1350ms; }.bar:nth-child(2)  { left: 5px; animation-duration: 1082ms; }.bar:nth-child(3)  { left: 9px; animation-duration: 1081ms; }.bar:nth-child(4)  { left: 13px; animation-duration: 1250ms; }.bar:nth-child(5)  { left: 17px; animation-duration: 1024ms; }.bar:nth-child(6)  { left: 21px; animation-duration: 1300ms; }.bar:nth-child(7)  { left: 25px; animation-duration: 1220ms; }.bar:nth-child(8)  { left: 29px; animation-duration: 1099ms; }.bar:nth-child(9)  { left: 33px; animation-duration: 1274ms; }.bar:nth-child(10)  { left: 37px; animation-duration: 1228ms; }.bar:nth-child(11)  { left: 41px; animation-duration: 1274ms; }.bar:nth-child(12)  { left: 45px; animation-duration: 1050ms; }.bar:nth-child(13)  { left: 49px; animation-duration: 1075ms; }.bar:nth-child(14)  { left: 53px; animation-duration: 1056ms; }.bar:nth-child(15)  { left: 57px; animation-duration: 1232ms; }.bar:nth-child(16)  { left: 61px; animation-duration: 1302ms; }.bar:nth-child(17)  { left: 65px; animation-duration: 1339ms; }.bar:nth-child(18)  { left: 69px; animation-duration: 1100ms; }.bar:nth-child(19)  { left: 73px; animation-duration: 1143ms; }.bar:nth-child(20)  { left: 77px; animation-duration: 1260ms; }.bar:nth-child(21)  { left: 81px; animation-duration: 1015ms; }.bar:nth-child(22)  { left: 85px; animation-duration: 1098ms; }.bar:nth-child(23)  { left: 89px; animation-duration: 1175ms; }.bar:nth-child(24)  { left: 93px; animation-duration: 1218ms; }.bar:nth-child(25)  { left: 97px; animation-duration: 1075ms; }.bar:nth-child(26)  { left: 101px; animation-duration: 1107ms; }.bar:nth-child(27)  { left: 105px; animation-duration: 1331ms; }.bar:nth-child(28)  { left: 109px; animation-duration: 1104ms; }.bar:nth-child(29)  { left: 113px; animation-duration: 1013ms; }.bar:nth-child(30)  { left: 117px; animation-duration: 1295ms; }.bar:nth-child(31)  { left: 121px; animation-duration: 1238ms; }.bar:nth-child(32)  { left: 125px; animation-duration: 1064ms; }.bar:nth-child(33)  { left: 129px; animation-duration: 1241ms; }.bar:nth-child(34)  { left: 133px; animation-duration: 1264ms; }.bar:nth-child(35)  { left: 137px; animation-duration: 1021ms; }.bar:nth-child(36)  { left: 141px; animation-duration: 1274ms; }.bar:nth-child(37)  { left: 145px; animation-duration: 1153ms; }.bar:nth-child(38)  { left: 149px; animation-duration: 1308ms; }.bar:nth-child(39)  { left: 153px; animation-duration: 1141ms; }.bar:nth-child(40)  { left: 157px; animation-duration: 1284ms; }.bar:nth-child(41)  { left: 161px; animation-duration: 1286ms; }.bar:nth-child(42)  { left: 165px; animation-duration: 1161ms; }.bar:nth-child(43)  { left: 169px; animation-duration: 1146ms; }.bar:nth-child(44)  { left: 173px; animation-duration: 1044ms; }.bar:nth-child(45)  { left: 177px; animation-duration: 1106ms; }.bar:nth-child(46)  { left: 181px; animation-duration: 1088ms; }.bar:nth-child(47)  { left: 185px; animation-duration: 1146ms; }.bar:nth-child(48)  { left: 189px; animation-duration: 1173ms; }.bar:nth-child(49)  { left: 193px; animation-duration: 1170ms; }.bar:nth-child(50)  { left: 197px; animation-duration: 1023ms; }.bar:nth-child(51)  { left: 201px; animation-duration: 1274ms; }.bar:nth-child(52)  { left: 205px; animation-duration: 1206ms; }.bar:nth-child(53)  { left: 209px; animation-duration: 1212ms; }.bar:nth-child(54)  { left: 213px; animation-duration: 1249ms; }.bar:nth-child(55)  { left: 217px; animation-duration: 1062ms; }.bar:nth-child(56)  { left: 221px; animation-duration: 1289ms; }.bar:nth-child(57)  { left: 225px; animation-duration: 1068ms; }.bar:nth-child(58)  { left: 229px; animation-duration: 1058ms; }.bar:nth-child(59)  { left: 233px; animation-duration: 1034ms; }.bar:nth-child(60)  { left: 237px; animation-duration: 1080ms; }.bar:nth-child(61)  { left: 241px; animation-duration: 1246ms; }.bar:nth-child(62)  { left: 245px; animation-duration: 1145ms; }.bar:nth-child(63)  { left: 249px; animation-duration: 1009ms; }.bar:nth-child(64)  { left: 253px; animation-duration: 1333ms; }.bar:nth-child(65)  { left: 257px; animation-duration: 1196ms; }.bar:nth-child(66)  { left: 261px; animation-duration: 1060ms; }.bar:nth-child(67)  { left: 265px; animation-duration: 1209ms; }.bar:nth-child(68)  { left: 269px; animation-duration: 1268ms; }.bar:nth-child(69)  { left: 273px; animation-duration: 1030ms; }.bar:nth-child(70)  { left: 277px; animation-duration: 1069ms; }.bar:nth-child(71)  { left: 281px; animation-duration: 1214ms; }.bar:nth-child(72)  { left: 285px; animation-duration: 1115ms; }.bar:nth-child(73)  { left: 289px; animation-duration: 1048ms; }.bar:nth-child(74)  { left: 293px; animation-duration: 1227ms; }.bar:nth-child(75)  { left: 297px; animation-duration: 1309ms; }.bar:nth-child(76)  { left: 301px; animation-duration: 1083ms; }.bar:nth-child(77)  { left: 305px; animation-duration: 1074ms; }.bar:nth-child(78)  { left: 309px; animation-duration: 1271ms; }.bar:nth-child(79)  { left: 313px; animation-duration: 1105ms; }.bar:nth-child(80)  { left: 317px; animation-duration: 1262ms; }.bar:nth-child(81)  { left: 321px; animation-duration: 1198ms; }.bar:nth-child(82)  { left: 325px; animation-duration: 1055ms; }.bar:nth-child(83)  { left: 329px; animation-duration: 1309ms; }.bar:nth-child(84)  { left: 333px; animation-duration: 1302ms; }
            </style>
            <div class="currentStatus">🎧 Last seen vibing to:</div>
            <div class="main">
              <a class="art" href="" target="_blank">
                <center>
                  <img
                    src="${encodedImage}"
                    class="cover"
                    alt="${albumTitle} by ${artistName} album cover"
                  />
                </center>
              </a>
              <div class="content">
                <div class="song">
                  ${trackName}
                </div>
                <div class="artist">
                  ${artistName}
                </div>
                <div id="bars">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                </div>
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
