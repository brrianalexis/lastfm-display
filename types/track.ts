export type TrackImage = {
  size: string;
  "#text": string;
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
  image: TrackImage[];
  mbid: string;
  album: TrackAlbum;
  name: string;
  url: string;
  date: {
    uts: string;
    "#text": string;
  };
};
