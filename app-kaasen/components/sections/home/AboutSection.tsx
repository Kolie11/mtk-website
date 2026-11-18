import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { RevealSection } from "@/components/ui/RevealSection";
import { about, company } from "@/lib/data/site";

const factLabel = "text-[11px] font-semibold uppercase tracking-label text-ink/60";

/** "Über uns" (#kHaus). */
export function AboutSection() {
  return (
    <RevealSection id="kHaus" aria-labelledby="haus-title" className="px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(28px,4vw,60px)]">
        <div className="flex flex-col gap-[22px]">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="haus-title" className="text-h2">
            {about.titleStart} <Highlight>{about.titleHighlight}</Highlight>.
          </h2>
          <p className="m-0 text-lead leading-[1.75] text-ink/72">{about.text}</p>
          <dl className="m-0 mt-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5 border-t border-kaasen-blue/14 pt-6">
            <div className="flex flex-col gap-2">
              <dt className={factLabel}>Standort</dt>
              <dd className="m-0 text-[17px] font-bold leading-[1.4] text-kaasen-blue">
                {company.street}
                <br />
                {company.zip} {company.city}
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className={factLabel}>Anrufen</dt>
              <dd className="m-0">
                <a href={company.phoneHref} className="text-[17px] font-bold leading-[1.4] text-kaasen-blue hover:text-accent">
                  {company.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex min-w-0 flex-col gap-2">
              <dt className={factLabel}>Schreiben</dt>
              <dd className="m-0">
                <a href={`mailto:${company.email}`} className="text-body font-bold leading-[1.4] text-kaasen-blue [overflow-wrap:anywhere] hover:text-accent">
                  medizintechnik<wbr />@kaasen.de
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <figure className="relative m-0 flex min-h-[460px] flex-col justify-between gap-5 overflow-hidden rounded-hero p-[clamp(28px,3vw,44px)] text-cream max-sm:min-h-[260px] max-sm:rounded-[16px]">
          <Image src={about.image} alt={about.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(20_28_92/.35)_0%,rgb(20_28_92/.85)_100%)]" />
          <Eyebrow tone="yellow" className="relative">
            {about.quoteLabel}
          </Eyebrow>
          <blockquote className="relative m-0 text-quote font-semibold text-cream">{about.quote}</blockquote>
          <figcaption className="relative text-small text-cream/80">{about.quoteCaption}</figcaption>
        </figure>
      </div>
    </RevealSection>
  );
}
