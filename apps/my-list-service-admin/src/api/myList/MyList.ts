import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type MyList = {
  createdAt: Date;
  id: string;
  items: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
