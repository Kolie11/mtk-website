import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { externalLinks, prescription } from "@/lib/data/site";
import { CoverageOverview } from "./CoverageOverview";
import { PrescriptionForm } from "./PrescriptionForm";

/** Prescription upload (#kRezept). Submissions go to bb@kaasen.de, then Nextcloud upload. */
export function PrescriptionSection() {
  return (
    <section id="kRezept" aria-labelledby="rezept-title" className="relative overflow-hidden bg-kaasen-blue px-gutter py-[clamp(48px,6vw,84px)] text-cream max-[800px]:px-4">
      <svg viewBox="0 0 1400 80" preserveAspectRatio="none" aria-hidden="true" className="absolute left-0 top-0 h-20 w-full opacity-35">
        <path d="M0 40 C 175 0, 350 80, 525 40 S 875 0, 1050 40 S 1400 80, 1400 40" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-kaasen-yellow" />
      </svg>
      <div className="relative mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(28px,4vw,56px)] max-lg:grid-cols-1">
        <div className="flex flex-col gap-5">
          <Eyebrow tone="yellow">{prescription.eyebrow}</Eyebrow>
          <h2 id="rezept-title" className="text-h2 text-cream">
            {prescription.title}
          </h2>
          <p className="m-0 max-w-[34em] text-lead leading-[1.7] text-cream/78">{prescription.intro}</p>

          <div role="note" className="max-w-[34em] rounded-r-input border-l-[3px] border-kaasen-yellow bg-kaasen-yellow/8 px-[18px] py-4">
            <strong className="mb-1.5 block text-[13px] uppercase tracking-[.06em] text-kaasen-yellow">{prescription.breastPumpNoticeTitle}</strong>
            <span className="text-[14.5px] leading-[1.65] text-cream/86">
              Milchpumpen-Rezepte benötigen wir im Original — bitte nutzen Sie die{" "}
              <Link href="/#kMilchpumpe" className="text-kaasen-yellow underline hover:text-cream">
                Onlinebestellung Milchpumpe
              </Link>
              . Für Rezept-Status &amp; Verlängerung:{" "}
              <a href={externalLinks.prescriptionStatus} className="text-kaasen-yellow underline hover:text-cream">
                {externalLinks.prescriptionStatusLabel}
              </a>
              .
            </span>
          </div>

          <CoverageOverview />

          <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-body">
            {prescription.steps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span aria-hidden="true" className="grid size-[22px] flex-none place-items-center rounded-full bg-kaasen-yellow text-micro font-extrabold text-kaasen-blue">
                  ✓
                </span>
                <span className="text-cream/86">{step}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 max-w-[34em] text-[13px] leading-[1.6] text-cream/60">{prescription.originalNote}</p>
        </div>

        <div className="flex flex-col gap-3.5 rounded-[26px] bg-cream p-panel text-ink shadow-panel-dark max-sm:p-4">
          <PrescriptionForm />
        </div>
      </div>
    </section>
  );
}
