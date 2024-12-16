import { Image } from "./image";

export type TopArtistsAttributes = {
  user: string;
  totalPages: string;
  page: string;
  total: string;
  perPage: string;
};

export type ArtistInfoStats = {
  listeners: string;
  playcount: string;
  userplaycount: string;
};

export type ArtistInfoLink = {
  "#text": string;
  rel: string;
  href: string;
};

export type ArtistAttributes = {
  rank: string;
};

export type Artist = {
  streamable: string;
  image: Image[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": ArtistAttributes;
  name: string;
};
