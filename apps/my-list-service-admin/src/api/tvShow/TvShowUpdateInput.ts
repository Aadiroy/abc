import { InputJsonValue } from "../../types";

export type TvShowUpdateInput = {
  description?: string | null;
  episodes?: InputJsonValue;
  genres?: InputJsonValue;
  title?: string | null;
};
