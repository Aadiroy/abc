import { InputJsonValue } from "../../types";

export type TvShowCreateInput = {
  description?: string | null;
  episodes?: InputJsonValue;
  genres?: InputJsonValue;
  title?: string | null;
};
