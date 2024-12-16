import { Artist, WeeklyArtistsAttributes } from "./artist";
import { Track, TrackAttributes } from "./track";

export type RecentTracksAPIResponse = {
  recenttracks: {
    track: Track[];
    "@attr": TrackAttributes;
  };
};

export type WeeklyArtistsAPIResponse = {
  weeklyartistchart: {
    artist: Artist[];
    "@attr": WeeklyArtistsAttributes;
  };
};
