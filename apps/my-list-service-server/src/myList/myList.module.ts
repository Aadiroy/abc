import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MyListModuleBase } from "./base/myList.module.base";
import { MyListService } from "./myList.service";
import { MyListController } from "./myList.controller";
import { MyListResolver } from "./myList.resolver";

@Module({
  imports: [MyListModuleBase, forwardRef(() => AuthModule)],
  controllers: [MyListController],
  providers: [MyListService, MyListResolver],
  exports: [MyListService],
})
export class MyListModule {}
