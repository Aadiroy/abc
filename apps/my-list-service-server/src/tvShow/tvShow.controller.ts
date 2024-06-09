import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TvShowService } from "./tvShow.service";
import { TvShowControllerBase } from "./base/tvShow.controller.base";

@swagger.ApiTags("tvShows")
@common.Controller("tvShows")
export class TvShowController extends TvShowControllerBase {
  constructor(
    protected readonly service: TvShowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
