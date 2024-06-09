import { MyList } from "../myList/MyList";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  myLists?: Array<MyList>;
  preferences: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  watchHistory: JsonValue;
};
