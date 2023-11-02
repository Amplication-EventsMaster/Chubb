import { CoverageCreateNestedManyWithoutProductsInput } from "./CoverageCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  coverages?: CoverageCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
};
