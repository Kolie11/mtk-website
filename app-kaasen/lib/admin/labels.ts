import type { InsuranceStatus } from "@/lib/types";

export const insuranceLabels: Record<InsuranceStatus, string> = {
  listed: "gelistet",
  unlisted: "nicht gelistet",
  sale: "Verkauf",
  professional: "Praxisgerät",
  pending: "offen",
};
