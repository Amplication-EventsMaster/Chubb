import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CoverageService } from "./coverage.service";
import { CoverageControllerBase } from "./base/coverage.controller.base";

@swagger.ApiTags("coverages")
@common.Controller("coverages")
export class CoverageController extends CoverageControllerBase {
  constructor(
    protected readonly service: CoverageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
