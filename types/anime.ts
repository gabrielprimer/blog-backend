// src/types/anime.ts
export interface Anime {
  isRelease: boolean;
  isPopularSeason: boolean;
  newReleases: boolean;
  isPopular: boolean;
  isNextSeason: boolean;
  isThumbnail: boolean;
  isMovie: boolean;
  id: string;
  slug: string;
  name: string;
  releaseYear: string;
  image: string;
  synopsis: string;
  rating: number;
  score: number;
  genres: string[];
  airingDay: string;
  episodes: number;
  season: number;
  audioType: string;
  thumbnailImage: string;
}
