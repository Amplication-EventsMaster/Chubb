import { Product } from "../product/Product";

export type Coverage = {
  createdAt: Date;
  id: string;
  limit: string | null;
  name: string | null;
  product?: Product | null;
  updatedAt: Date;
};
