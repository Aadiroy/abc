import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MyListUpdateInput = {
  items?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
