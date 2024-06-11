import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  platform?: "Option1";
  title?: StringNullableFilter;
  trendingScore?: FloatNullableFilter;
  url?: StringNullableFilter;
};
