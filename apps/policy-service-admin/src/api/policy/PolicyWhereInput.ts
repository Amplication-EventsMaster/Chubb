import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PolicyWhereInput = {
  description?: StringNullableFilter;
  effectedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
