import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoverageServiceBase } from "./base/coverage.service.base";

@Injectable()
export class CoverageService extends CoverageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
