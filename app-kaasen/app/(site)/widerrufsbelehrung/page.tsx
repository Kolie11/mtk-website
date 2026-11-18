import { LegalPageView } from "@/components/legal/LegalPageView";
import { legalMetadata, loadLegalPage } from "@/lib/legalRoute";

export const metadata = legalMetadata("widerrufsbelehrung", "Widerrufsbelehrung", "Widerrufsrecht, Fristen und Muster-Widerrufsformular.");

export default async function WithdrawalPolicyPage() {
  const page = await loadLegalPage("widerrufsbelehrung");
  return <LegalPageView page={page} />;
}
