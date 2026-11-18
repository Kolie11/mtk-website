import { LegalPageView } from "@/components/legal/LegalPageView";
import { legalMetadata, loadLegalPage } from "@/lib/legalRoute";

export const metadata = legalMetadata("versand", "Versand & Zahlung", "Versandkosten, Lieferzeiten und Zahlungsarten bei Medizintechnik Kaasen.");

export default async function ShippingPage() {
  const page = await loadLegalPage("versand");
  return <LegalPageView page={page} />;
}
