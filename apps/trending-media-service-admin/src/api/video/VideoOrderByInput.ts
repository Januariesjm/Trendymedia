import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  platform?: SortOrder;
  title?: SortOrder;
  trendingScore?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
