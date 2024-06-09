import { SortOrder } from "../../util/SortOrder";

export type TvShowOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  episodes?: SortOrder;
  genres?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
