import { InputJsonValue } from "../../types";

export type MovieCreateInput = {
  actors?: InputJsonValue;
  description?: string | null;
  director?: string | null;
  genres?: InputJsonValue;
  releaseDate?: Date | null;
  title?: string | null;
};
