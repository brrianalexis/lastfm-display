import {
  Artist,
  ArtistInfoLink,
  ArtistInfoStats,
  TopArtistsAttributes,
} from "./artist";
import { Track, TrackAttributes } from "./track";
import { Image } from "./image";
import { Tag } from "./tag";

export type RecentTracksAPIResponse = {
  recenttracks: {
    track: Track[];
    "@attr": TrackAttributes;
  };
};

export type TopArtistsAPIResponse = {
  topartists: {
    artist: Artist[];
    "@attr": TopArtistsAttributes;
  };
};

export type ArtistInfoAPIResponse = {
  artist: {
    name: string;
    mbid: string;
    url: string;
    image: Image[];
    streamable: string;
    ontour: string;
    stats: ArtistInfoStats;
    similar: {
      artist: Artist[];
    };
    tags: {
      tag: Tag[];
    };
    bio: {
      links: {
        link: ArtistInfoLink[];
      };
      published: string;
      summary: string;
      content: string;
    };
  };
};
