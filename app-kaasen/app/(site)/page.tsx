import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { BreastPumpOrderSection } from "@/components/sections/home/BreastPumpOrderSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { FeaturedProductsSection } from "@/components/sections/home/FeaturedProductsSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { InsuranceSection } from "@/components/sections/home/InsuranceSection";
import { PrescriptionSection } from "@/components/sections/home/PrescriptionSection";
import { PrescriptionValiditySection } from "@/components/sections/home/PrescriptionValiditySection";
import { TickerSection } from "@/components/sections/home/TickerSection";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { getFaqs } from "@/lib/api/content";
import { getFeaturedProducts } from "@/lib/api/products";

export const metadata: Metadata = {
  title: { absolute: "Medizintechnik Kaasen — Hilfsmittel, die tragen" },
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [featured, faqs] = await Promise.all([getFeaturedProducts(), getFaqs()]);

  return (
    <>
      <HeroSection />
      <FeaturedProductsSection products={featured} />
      <BreastPumpOrderSection />
      <PrescriptionSection />
      <PrescriptionValiditySection />
      <InsuranceSection faqs={faqs} />
      <AboutSection />
      <TickerSection />
      <ContactSection />
      <FaqJsonLd items={faqs} />
    </>
  );
}
