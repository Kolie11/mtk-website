import type { Metadata } from "next";
import { FlyerDownloadDrawer } from "@/components/fachbereich/FlyerDownloadDrawer";
import { NewsletterSection } from "@/components/fachbereich/NewsletterSection";
import { PrescriberInfoSection } from "@/components/fachbereich/PrescriberInfoSection";
import { ProAreaProvider } from "@/components/fachbereich/ProAreaProvider";
import { ProBannerSection } from "@/components/fachbereich/ProBannerSection";
import { ProContactSection } from "@/components/fachbereich/ProContactSection";
import { ProDocumentsDrawer } from "@/components/fachbereich/ProDocumentsDrawer";
import { ProFooter } from "@/components/fachbereich/ProFooter";
import { ProGate } from "@/components/fachbereich/ProGate";
import { ProHeader } from "@/components/fachbereich/ProHeader";
import { ProLoginDialog } from "@/components/fachbereich/ProLoginDialog";
import { ProProductsSection } from "@/components/fachbereich/ProProductsSection";
import { TestimonialsSection } from "@/components/fachbereich/TestimonialsSection";
import { WebinarSection } from "@/components/fachbereich/WebinarSection";
import { SkipLink } from "@/components/layout/SkipLink";
import { getFlyers, getPrescriberInfos, getProDocuments, getTestimonials, getWebinars } from "@/lib/api/fachbereich";
import { getProProducts } from "@/lib/api/products";

export const metadata: Metadata = {
  title: "Für Fachpersonen",
  description:
    "Hilfsmittelnummern, Diagnosen, Produktinfos, Flyer und Webinare für Ärzt:innen, Hebammen und Physiotherapie — gebündelt an einem Ort.",
  alternates: { canonical: "/fachbereich" },
};

/** Fachbereich: open page behind a Yes/No gate; demo login unlocks pro prices + PDFs. */
export default async function ProfessionalsPage() {
  const [infos, products, testimonials, webinars, flyers, documents] = await Promise.all([
    getPrescriberInfos(),
    getProProducts(),
    getTestimonials(),
    getWebinars(),
    getFlyers(),
    getProDocuments(),
  ]);

  return (
    <ProAreaProvider>
      <div className="flex min-h-screen flex-col">
        <SkipLink />
        <ProHeader />
        <main id="main" className="flex-1">
          <ProBannerSection />
          <PrescriberInfoSection infos={infos} />
          <ProProductsSection products={products} />
          <TestimonialsSection testimonials={testimonials} />
          <WebinarSection webinars={webinars} />
          <NewsletterSection />
          <ProContactSection flyers={flyers} />
        </main>
        <ProFooter />
      </div>
      <FlyerDownloadDrawer flyers={flyers} />
      <ProDocumentsDrawer products={products} documents={documents} />
      <ProLoginDialog />
      <ProGate />
    </ProAreaProvider>
  );
}
