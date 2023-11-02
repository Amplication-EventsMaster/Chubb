import { SortOrder } from "../../util/SortOrder";

export type PolicyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  effectedDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
