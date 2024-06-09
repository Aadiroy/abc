import { MyListUpdateManyWithoutUsersInput } from "./MyListUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  myLists?: MyListUpdateManyWithoutUsersInput;
  password?: string;
  preferences?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
  watchHistory?: InputJsonValue;
};
