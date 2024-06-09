import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyListServiceBase } from "./base/myList.service.base";

@Injectable()
export class MyListService extends MyListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
