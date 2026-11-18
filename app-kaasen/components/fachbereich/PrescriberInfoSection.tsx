import Image from "next/image";
import Link from "next/link";
import type { PrescriberInfo } from "@/lib/types";
import { ProSectionHeading } from "./ProSectionHeading";

const termClass = "text-[11px] font-bold uppercase tracking-label text-kaasen-blue/70";

/** Block 2: aid numbers + example diagnoses for prescribers. */
export function PrescriberInfoSection({ infos }: { infos: PrescriberInfo[] }) {
  return (
    <section id="fVerordnung" aria-labelledby="f-verordnung-title" className="scroll-mt-20 px-gutter py-[clamp(56px,7vw,96px)] max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <ProSectionHeading id="f-verordnung-title" eyebrow="Schnellinfos für Verordnende" titleStart="Verordnung" titleHighlight="auf einen Blick" />
          <span className="text-[12.5px] text-ink/70">Positionsnummern laut REHADAT · Diagnosen beispielhaft</span>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4 p-0">
          {infos.map((info) => (
            <li key={info.productId}>
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
                <div className="flex items-center gap-4 px-5 pt-5">
                  <div className="relative size-[84px] flex-none overflow-hidden rounded-[16px] bg-cream">
                    <Image src={info.image} alt={info.name} fill sizes="84px" className="object-contain p-2" />
                  </div>
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="m-0 text-xl">{info.name}</h3>
                    <span className="text-[12.5px] text-ink/70">{info.typeLabel}</span>
                  </div>
                </div>
                <dl className="m-0 flex flex-col gap-3.5 px-5 py-[18px]">
                  <div className="flex flex-col gap-1">
                    <dt className={termClass}>Hilfsmittelnummer</dt>
                    <dd className="m-0 text-[19px] font-extrabold tabular-nums tracking-[.02em] text-kaasen-blue">{info.aidNumber}</dd>
                  </div>
                  <div className="flex flex-col gap-2">
                    <dt className={termClass}>Häufige Diagnosen</dt>
                    <dd className="m-0 flex flex-wrap gap-1.5">
                      {info.diagnoses.map((diagnosis) => (
                        <span key={diagnosis} className="rounded-full bg-tag-bg px-[11px] py-[5px] text-micro font-semibold text-accent">
                          {diagnosis}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <Link href={info.href} className="mt-auto flex items-center justify-between border-t border-line px-5 py-4 text-sm font-bold text-kaasen-blue hover:bg-kaasen-yellow hover:text-kaasen-blue">
                  Zur Fachproduktseite <span aria-hidden="true">→</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
