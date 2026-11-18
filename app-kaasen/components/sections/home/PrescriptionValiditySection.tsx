import { buttonClass } from "@/components/ui/buttonStyles";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExternalIcon } from "@/components/ui/Icons";
import { RevealSection } from "@/components/ui/RevealSection";
import { externalLinks, prescriptionValidity } from "@/lib/data/site";

export function PrescriptionValiditySection() {
  return (
    <RevealSection aria-labelledby="validity-title" className="bg-cream px-gutter py-section-sm max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6 rounded-panel border border-line bg-white p-panel shadow-[0_20px_40px_-30px_rgb(20_28_92/.3)] max-sm:p-4">
        <div className="flex flex-col gap-3">
          <Eyebrow>{prescriptionValidity.eyebrow}</Eyebrow>
          <h2 id="validity-title" className="text-[clamp(22px,2.4vw,30px)]">
            {prescriptionValidity.title}
          </h2>
          <p className="m-0 text-[14.5px] leading-[1.6] text-ink/70">
            {prescriptionValidity.text}{" "}
            <a href={externalLinks.prescriptionStatus} className="font-bold text-kaasen-blue underline">
              {externalLinks.prescriptionStatusLabel}
            </a>
            .
          </p>
        </div>
        <a href={externalLinks.prescriptionStatus} className={buttonClass("primary", "md", "self-center")}>
          {prescriptionValidity.cta}
          <ExternalIcon size={16} strokeWidth={2.4} />
        </a>
      </div>
    </RevealSection>
  );
}
