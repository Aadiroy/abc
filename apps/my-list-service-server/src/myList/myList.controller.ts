import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyListService } from "./myList.service";
import { MyListControllerBase } from "./base/myList.controller.base";

@swagger.ApiTags("myLists")
@common.Controller("myLists")
export class MyListController extends MyListControllerBase {
  constructor(
    protected readonly service: MyListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
