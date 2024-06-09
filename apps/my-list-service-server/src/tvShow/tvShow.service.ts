import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TvShowServiceBase } from "./base/tvShow.service.base";

@Injectable()
export class TvShowService extends TvShowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
