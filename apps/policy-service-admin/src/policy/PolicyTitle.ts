import { Policy as TPolicy } from "../api/policy/Policy";

export const POLICY_TITLE_FIELD = "name";

export const PolicyTitle = (record: TPolicy): string => {
  return record.name?.toString() || String(record.id);
};
