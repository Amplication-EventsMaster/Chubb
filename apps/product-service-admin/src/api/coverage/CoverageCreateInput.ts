import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CoverageCreateInput = {
  limit?: string | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
};
