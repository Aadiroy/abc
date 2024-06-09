import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MyListCreateInput = {
  items?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
