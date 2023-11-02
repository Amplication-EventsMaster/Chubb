import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CoverageModuleBase } from "./base/coverage.module.base";
import { CoverageService } from "./coverage.service";
import { CoverageController } from "./coverage.controller";
import { CoverageResolver } from "./coverage.resolver";

@Module({
  imports: [CoverageModuleBase, forwardRef(() => AuthModule)],
  controllers: [CoverageController],
  providers: [CoverageService, CoverageResolver],
  exports: [CoverageService],
})
export class CoverageModule {}
