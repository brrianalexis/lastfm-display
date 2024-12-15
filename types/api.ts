import { Track } from "./track";

export type TrackAttributes = {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
};

export type RecentTracksAPIResponse = {
  recenttracks: {
    track: Track[];
    "@attr": TrackAttributes;
  };
};
