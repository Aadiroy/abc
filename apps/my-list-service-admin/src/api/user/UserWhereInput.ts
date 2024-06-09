import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MyListListRelationFilter } from "../myList/MyListListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  myLists?: MyListListRelationFilter;
  preferences?: JsonFilter;
  username?: StringFilter;
  watchHistory?: JsonFilter;
};
