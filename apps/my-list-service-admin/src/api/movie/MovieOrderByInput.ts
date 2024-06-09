import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  actors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  director?: SortOrder;
  genres?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
