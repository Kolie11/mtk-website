import { MapEmbed } from "@/components/sections/shared/MapEmbed";
import { company, openingHours } from "@/lib/data/site";
import type { Flyer } from "@/lib/types";
import { ProContactPanel } from "./ProContactPanel";
import { ProSectionHeading } from "./ProSectionHeading";

const factLabel = "text-[11px] font-bold uppercase tracking-label text-kaasen-blue/70";

/** Block 7: contact with 2 modes (Kontaktanfrage / Infomaterial bestellen). */
export function ProContactSection({ flyers }: { flyers: Flyer[] }) {
  return (
    <section id="fKontakt" aria-labelledby="f-kontakt-title" className="scroll-mt-20 bg-white px-gutter py-[clamp(56px,7vw,96px)] max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(24px,4vw,48px)]">
        <div className="flex min-w-0 flex-col gap-5">
          <ProSectionHeading id="f-kontakt-title" eyebrow="Kontakt" titleStart="Fragen oder" titleHighlight="Infomaterial" />
          <ProContactPanel flyers={flyers} />
        </div>
        <div className="flex min-w-0 flex-col gap-3.5">
          <MapEmbed className="aspect-[4/3]" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-2.5">
            <div className="flex flex-col gap-1 rounded-[16px] bg-cream px-[18px] py-4">
              <span className={factLabel}>Adresse</span>
              <span className="text-sm leading-[1.55] text-kaasen-blue">
                {company.street}
                <br />
                {company.zip} {company.city}
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-[16px] bg-cream px-[18px] py-4">
              <span className={factLabel}>Telefon &amp; Mail</span>
              <a href={company.phoneHref} className="text-sm font-bold text-kaasen-blue">
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="text-sm text-kaasen-blue [overflow-wrap:anywhere]">
                {company.email}
              </a>
            </div>
            <div className="flex flex-col gap-1 rounded-[16px] bg-cream px-[18px] py-4">
              <span className={factLabel}>Erreichbar</span>
              <span className="text-sm leading-[1.55] text-kaasen-blue">
                {openingHours.lines[0]}
                <br />
                {openingHours.lines[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
