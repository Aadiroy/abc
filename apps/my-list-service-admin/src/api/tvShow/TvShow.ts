import { JsonValue } from "type-fest";

export type TvShow = {
  createdAt: Date;
  description: string | null;
  episodes: JsonValue;
  genres: JsonValue;
  id: string;
  title: string | null;
  updatedAt: Date;
};
