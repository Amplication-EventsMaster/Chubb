import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CoverageUpdateInput = {
  limit?: string | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
};
