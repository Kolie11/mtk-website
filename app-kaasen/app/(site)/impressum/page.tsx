import { LegalPageView } from "@/components/legal/LegalPageView";
import { legalMetadata, loadLegalPage } from "@/lib/legalRoute";

export const metadata = legalMetadata("impressum", "Impressum", "Impressum der Medizintechnik Kaasen GmbH, Zum Gewerbepark 4, 44532 Lünen.");

export default async function ImprintPage() {
  const page = await loadLegalPage("impressum");
  return <LegalPageView page={page} />;
}
