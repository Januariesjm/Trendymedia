import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  platform?: SortOrder;
  title?: SortOrder;
  trendingScore?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
