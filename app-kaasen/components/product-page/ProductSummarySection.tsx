import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ProductPage } from "@/lib/types";

/** Block "Kurz erklärt" (#p-kurz). */
export function ProductSummarySection({ page }: { page: ProductPage }) {
  return (
    <section id="p-kurz" aria-labelledby="p-kurz-title" className="scroll-mt-[90px] px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-[clamp(28px,4vw,60px)]">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Kurz erklärt</Eyebrow>
          <h2 id="p-kurz-title" className="text-h2-md">
            {page.headline}
          </h2>
          <p className="m-0 max-w-[34em] text-lead leading-[1.75] text-ink/72">{page.intro}</p>
        </div>
        <ol className="m-0 flex list-none flex-col gap-2.5 p-0">
          {page.features.map((feature, index) => (
            <li key={feature} className="flex items-center gap-4 rounded-tile border border-line bg-white px-[22px] py-5">
              <span aria-hidden="true" className="grid size-9 flex-none place-items-center rounded-full bg-kaasen-yellow text-sm font-extrabold text-kaasen-blue">
                {index + 1}
              </span>
              <strong className="text-lead font-bold leading-[1.4] text-kaasen-blue">{feature}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
