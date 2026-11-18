import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { careSteps } from "@/lib/data/site";
import type { Product, ProductPage } from "@/lib/types";

const metaLabel = "text-[11px] font-semibold uppercase tracking-label text-ink/60";

/** Block "So funktioniert die Versorgung" + aid number (#p-versorgung). */
export function ProductCareSection({ product, page }: { product: Product; page: ProductPage }) {
  return (
    <section id="p-versorgung" aria-labelledby="p-versorgung-title" className="scroll-mt-[90px] bg-lavender px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-stack">
        <div className="flex flex-col gap-3.5">
          <Eyebrow tone="blue">So funktioniert die Versorgung</Eyebrow>
          <h2 id="p-versorgung-title" className="text-h2-md">
            So erhalten Sie {product.name} als Kassenleistung.
          </h2>
        </div>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-3 p-0">
          {careSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 rounded-card bg-cream p-6 max-sm:p-[18px]">
              <span className="flex items-center justify-between gap-2.5">
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-kaasen-blue text-body font-extrabold text-kaasen-yellow">
                  {index + 1}
                </span>
                {index < careSteps.length - 1 && <ArrowRightIcon size={20} className="text-kaasen-blue opacity-40" />}
              </span>
              <strong className="text-[17px] font-bold leading-[1.3] text-kaasen-blue">{step.title}</strong>
              <span className="text-sm leading-[1.6] text-ink/72">{step.text}</span>
              {step.uploadLink && (
                <Link href="/#kRezept" className="mt-auto self-start text-small font-bold text-kaasen-blue underline">
                  Jetzt hochladen
                </Link>
              )}
            </li>
          ))}
        </ol>
        <dl className="m-0 grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1.6fr)] items-center gap-[clamp(16px,2.4vw,32px)] rounded-card bg-white p-[clamp(20px,2.4vw,28px)] max-sm:grid-cols-[auto_minmax(0,1fr)]">
          <span title="Piktogramm-Platzhalter" aria-hidden="true" className="grid size-16 place-items-center rounded-[16px] border-2 border-kaasen-blue text-xl font-extrabold text-kaasen-blue">
            RZ
          </span>
          <div className="flex flex-col gap-1">
            <dt className={metaLabel}>Hilfsmittelnummer</dt>
            <dd className="m-0 text-[17px] font-bold text-kaasen-blue">{page.aidNumber}</dd>
          </div>
          <div className="flex flex-col gap-1 max-sm:col-span-full">
            <dt className={metaLabel}>Beispieldiagnosen</dt>
            <dd className="m-0 text-body leading-[1.5] text-ink">{page.diagnoses}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
