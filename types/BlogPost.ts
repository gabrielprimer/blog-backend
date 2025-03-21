export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string; // Pode ser Date se quiser manipular como objeto de data
  author: string;
  tags: string[];
  summary: string;
  content: string;
  images?: string[]; // Array de URLs de imagens
  videos?: string[]; // Array de URLs de vídeos (YouTube embed)
}
