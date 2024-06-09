import { JsonValue } from "type-fest";

export type Movie = {
  actors: JsonValue;
  createdAt: Date;
  description: string | null;
  director: string | null;
  genres: JsonValue;
  id: string;
  releaseDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
