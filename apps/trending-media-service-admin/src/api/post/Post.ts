export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  platform?: "Option1" | null;
  title: string | null;
  trendingScore: number | null;
  updatedAt: Date;
  url: string | null;
};
