import { CoverageWhereInput } from "./CoverageWhereInput";
import { CoverageOrderByInput } from "./CoverageOrderByInput";

export type CoverageFindManyArgs = {
  where?: CoverageWhereInput;
  orderBy?: Array<CoverageOrderByInput>;
  skip?: number;
  take?: number;
};
