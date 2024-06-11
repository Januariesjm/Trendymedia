export type Video = {
  createdAt: Date;
  description: string | null;
  id: string;
  platform?: "Option1" | null;
  title: string | null;
  trendingScore: number | null;
  updatedAt: Date;
  url: string | null;
};
