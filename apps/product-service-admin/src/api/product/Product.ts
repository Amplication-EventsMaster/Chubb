import { Coverage } from "../coverage/Coverage";

export type Product = {
  coverages?: Array<Coverage>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
