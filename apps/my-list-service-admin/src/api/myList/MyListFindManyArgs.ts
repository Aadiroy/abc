import { MyListWhereInput } from "./MyListWhereInput";
import { MyListOrderByInput } from "./MyListOrderByInput";

export type MyListFindManyArgs = {
  where?: MyListWhereInput;
  orderBy?: Array<MyListOrderByInput>;
  skip?: number;
  take?: number;
};
