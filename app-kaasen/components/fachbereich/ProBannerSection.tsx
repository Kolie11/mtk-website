import { Highlight } from "@/components/ui/Highlight";
import { proBanner } from "@/lib/data/fachbereich";
import { FlyerQuickAction } from "./FlyerQuickAction";

const tileClass =
  "flex flex-col gap-2.5 rounded-[20px] border border-cream/16 bg-cream/7 p-[22px] text-cream transition-colors hover:bg-cream/14 hover:text-cream";

/** Block 1: banner + 4 quick actions. */
export function ProBannerSection() {
  return (
    <section aria-labelledby="pro-title" className="bg-kaasen-blue px-gutter pb-[clamp(40px,5vw,64px)] pt-[clamp(48px,7vw,96px)] text-cream max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-[clamp(28px,4vw,48px)]">
        <div className="flex max-w-[780px] flex-col gap-[18px]">
          <span className="text-[11px] font-bold uppercase tracking-[.2em] text-kaasen-yellow">{proBanner.eyebrow}</span>
          <h1 id="pro-title" className="m-0 text-h1 font-extrabold tracking-[-.01em] text-cream">
            {proBanner.titleStart} <Highlight tone="yellow">{proBanner.titleHighlight}</Highlight>.
          </h1>
          <p className="m-0 text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-cream/82 [text-wrap:pretty]">{proBanner.intro}</p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-3 p-0 max-sm:grid-cols-2 max-[380px]:grid-cols-1">
          {proBanner.actions.map((action) => (
            <li key={action.number} className="flex">
              {action.target === "flyers" ? (
                <FlyerQuickAction number={action.number} title={action.title} text={action.text} />
              ) : (
                <a href={action.target} className={`${tileClass} w-full`}>
                  <span className="text-[11px] font-bold tracking-label text-kaasen-yellow">{action.number}</span>
                  <strong className="text-lg">{action.title}</strong>
                  <span className="text-small leading-[1.55] text-cream/75">{action.text}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
