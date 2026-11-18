import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { breastPump, breastPumpNotes, company } from "@/lib/data/site";
import { BreastPumpExpander } from "./BreastPumpExpander";
import { BreastPumpNotes } from "./BreastPumpNotes";
import { BreastPumpOrderForm } from "./BreastPumpOrderForm";

/**
 * Rental breast pump — online order (#kMilchpumpe).
 * Collapsed by default; links elsewhere only scroll here, "Jetzt online bestellen" expands.
 * No prescription upload here: breast-pump prescriptions are needed in original.
 */
export function BreastPumpOrderSection() {
  const header = (
    <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-3.5">
      <Eyebrow className="text-[11px] tracking-[.2em]">{breastPump.eyebrow}</Eyebrow>
      <h2 id="milchpumpe-title" className="m-0 text-[clamp(32px,4vw,54px)]">
        {breastPump.titleStart} <Highlight>{breastPump.titleHighlight}</Highlight>.
      </h2>
      <ol className="m-0 flex list-none flex-wrap gap-2 p-0">
        {breastPump.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2 rounded-full border border-kaasen-blue/10 bg-white px-3.5 py-2 text-small font-semibold text-kaasen-blue">
            <span aria-hidden="true" className="grid size-[22px] place-items-center rounded-full bg-kaasen-blue text-[11px] font-extrabold text-kaasen-yellow">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section id="kMilchpumpe" aria-labelledby="milchpumpe-title" className="scroll-mt-20 bg-cream px-gutter py-[clamp(48px,6vw,84px)] max-[800px]:px-4">
      <BreastPumpExpander header={header} openLabel={breastPump.openLabel} closeLabel={breastPump.closeLabel}>
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(24px,4vw,56px)]">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-base leading-[1.7] text-ink/78 [text-wrap:pretty]">{breastPump.intro}</p>
            <div role="note" className="rounded-field bg-kaasen-blue px-[18px] py-3.5 text-sm leading-[1.6] text-cream">
              <strong className="text-kaasen-yellow">Wichtig:</strong> {breastPump.importantNote}
            </div>
            <div role="note" className="rounded-field border-l-[3px] border-kaasen-yellow bg-kaasen-yellow/25 px-[18px] py-3.5 text-sm font-semibold leading-[1.6] text-kaasen-blue">
              {breastPump.noPrescriptionUpload}
            </div>
            <div className="flex flex-col gap-2 text-[14.5px] leading-[1.6] text-ink/82">
              <span>{breastPump.confirmationIntro}</span>
              {breastPump.confirmationWindows.map((window) => (
                <span key={window.label}>
                  <strong className="text-kaasen-blue">{window.label}</strong> {window.text}
                </span>
              ))}
            </div>
            <BreastPumpNotes notes={breastPumpNotes} />
            <p className="m-0 text-small text-ink/75">
              {breastPump.questions}{" "}
              <a href={company.phoneHref} className="text-kaasen-blue underline">
                {company.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="rounded-panel border border-line bg-white p-[clamp(20px,3vw,32px)] shadow-card">
            <BreastPumpOrderForm />
          </div>
        </div>
      </BreastPumpExpander>
    </section>
  );
}
