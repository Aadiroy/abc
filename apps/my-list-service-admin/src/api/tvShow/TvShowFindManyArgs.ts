import { TvShowWhereInput } from "./TvShowWhereInput";
import { TvShowOrderByInput } from "./TvShowOrderByInput";

export type TvShowFindManyArgs = {
  where?: TvShowWhereInput;
  orderBy?: Array<TvShowOrderByInput>;
  skip?: number;
  take?: number;
};
