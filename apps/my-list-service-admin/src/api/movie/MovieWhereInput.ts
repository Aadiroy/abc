import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MovieWhereInput = {
  actors?: JsonFilter;
  description?: StringNullableFilter;
  director?: StringNullableFilter;
  genres?: JsonFilter;
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
