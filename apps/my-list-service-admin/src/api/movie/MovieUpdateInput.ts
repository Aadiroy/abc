import { InputJsonValue } from "../../types";

export type MovieUpdateInput = {
  actors?: InputJsonValue;
  description?: string | null;
  director?: string | null;
  genres?: InputJsonValue;
  releaseDate?: Date | null;
  title?: string | null;
};
