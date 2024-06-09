import { SortOrder } from "../../util/SortOrder";

export type MyListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
