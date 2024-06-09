import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TvShowModuleBase } from "./base/tvShow.module.base";
import { TvShowService } from "./tvShow.service";
import { TvShowController } from "./tvShow.controller";
import { TvShowResolver } from "./tvShow.resolver";

@Module({
  imports: [TvShowModuleBase, forwardRef(() => AuthModule)],
  controllers: [TvShowController],
  providers: [TvShowService, TvShowResolver],
  exports: [TvShowService],
})
export class TvShowModule {}
