export type WeeklyArtistsAttributes = {
  from: string;
  user: string;
  to: string;
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
  mbid: string;
  url: string;
  name: string;
  "@attr": ArtistAttributes;
  playcount: string;
};

export type ModifiedArtist = Artist & {
  image: string;
};
