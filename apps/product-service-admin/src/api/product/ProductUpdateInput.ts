import { CoverageUpdateManyWithoutProductsInput } from "./CoverageUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  coverages?: CoverageUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
};
