import { Coverage as TCoverage } from "../api/coverage/Coverage";

export const COVERAGE_TITLE_FIELD = "name";

export const CoverageTitle = (record: TCoverage): string => {
  return record.name?.toString() || String(record.id);
};
