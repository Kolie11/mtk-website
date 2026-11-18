import { LegalPageView } from "@/components/legal/LegalPageView";
import { legalMetadata, loadLegalPage } from "@/lib/legalRoute";

export const metadata = legalMetadata("datenschutz", "Datenschutzerklärung", "Informationen zur Verarbeitung personenbezogener Daten bei Medizintechnik Kaasen.");

export default async function PrivacyPage() {
  const page = await loadLegalPage("datenschutz");
  return <LegalPageView page={page} />;
}
