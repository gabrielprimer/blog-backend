// src/types/episode.ts
export interface Episode {
  id: string;
  animeId: string;
  season: number;
  title: string;
  slug: string;
  image: string;
  videoUrl: string;
  releaseDate: string;
  isLancamento: boolean;
}
