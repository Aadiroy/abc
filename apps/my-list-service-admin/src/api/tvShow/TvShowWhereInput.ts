import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type TvShowWhereInput = {
  description?: StringNullableFilter;
  episodes?: JsonFilter;
  genres?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
