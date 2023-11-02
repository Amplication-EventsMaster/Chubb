import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CoverageWhereInput = {
  id?: StringFilter;
  limit?: StringNullableFilter;
  name?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
};
