import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  platform?: "Option1";
  title?: StringNullableFilter;
  trendingScore?: FloatNullableFilter;
  url?: StringNullableFilter;
};
