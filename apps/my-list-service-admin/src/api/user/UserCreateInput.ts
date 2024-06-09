import { MyListCreateNestedManyWithoutUsersInput } from "./MyListCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  myLists?: MyListCreateNestedManyWithoutUsersInput;
  password: string;
  preferences?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
  watchHistory?: InputJsonValue;
};
