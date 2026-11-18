import { buttonClass } from "@/components/ui/buttonStyles";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { RevealSection } from "@/components/ui/RevealSection";
import { company, insuranceSection } from "@/lib/data/site";
import type { Faq } from "@/lib/types";
import { FaqBrowser } from "./FaqBrowser";

/** "Kostenübernahme & persönliche Beratung" with filterable FAQ (#kKasse). */
export function InsuranceSection({ faqs }: { faqs: Faq[] }) {
  return (
    <RevealSection id="kKasse" aria-labelledby="kasse-title" className="bg-lavender px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-start gap-[clamp(28px,4vw,60px)]">
        <div className="flex flex-col gap-5 self-start lg:sticky lg:top-[120px]">
          <Eyebrow tone="blue">{insuranceSection.eyebrow}</Eyebrow>
          <h2 id="kasse-title" className="text-h2">
            {insuranceSection.title}
          </h2>
          <p className="m-0 max-w-[28em] text-lead leading-[1.7] text-kaasen-blue/78">
            {insuranceSection.textStart} <strong>{insuranceSection.textStrong}</strong>.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a href={company.phoneHref} className={buttonClass("primary", "md")}>
              <PhoneIcon size={16} strokeWidth={2.4} />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className={buttonClass("light", "md")}>
              <MailIcon size={16} strokeWidth={2.4} />
              E-Mail schreiben
            </a>
          </div>
        </div>
        <FaqBrowser faqs={faqs} categories={insuranceSection.faqCategories} />
      </div>
    </RevealSection>
  );
}
