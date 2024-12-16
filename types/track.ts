import { Image } from "./image";

export type TrackAttributes = {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
};

export type TrackAlbum = {
  mbid: string;
  "#text": string;
};

export type Track = {
  artist: {
    mbid: string;
    "#text": string;
  };
  streamable: string;
  image: Image[];
  mbid: string;
  album: TrackAlbum;
  name: string;
  url: string;
  date: {
    uts: string;
    "#text": string;
  };
};
