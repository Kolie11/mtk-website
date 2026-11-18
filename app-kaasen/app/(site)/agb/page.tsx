import { LegalPageView } from "@/components/legal/LegalPageView";
import { legalMetadata, loadLegalPage } from "@/lib/legalRoute";

export const metadata = legalMetadata("agb", "AGB", "Allgemeine Geschäftsbedingungen für Bestellungen im Online-Shop von Medizintechnik Kaasen.");

export default async function TermsPage() {
  const page = await loadLegalPage("agb");
  return <LegalPageView page={page} />;
}
