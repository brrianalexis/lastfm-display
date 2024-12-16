export type WeeklyArtistsAttributes = {
  from: string;
  user: string;
  to: string;
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
