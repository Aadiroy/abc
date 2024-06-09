import { TvShow as TTvShow } from "../api/tvShow/TvShow";

export const TVSHOW_TITLE_FIELD = "title";

export const TvShowTitle = (record: TTvShow): string => {
  return record.title?.toString() || String(record.id);
};
