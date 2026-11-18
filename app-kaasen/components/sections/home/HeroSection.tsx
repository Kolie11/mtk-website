import Image from "next/image";
import { Highlight } from "@/components/ui/Highlight";
import { hero, intents } from "@/lib/data/site";
import { IntentCard } from "./IntentCard";
import { WaveDivider } from "./WaveDivider";

export function HeroSection() {
  return (
    <section id="kTop" aria-labelledby="hero-title" className="relative overflow-hidden px-gutter pb-section-sm pt-[clamp(44px,6vw,88px)] max-[800px]:px-4">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[120px] -top-[140px] size-[520px] animate-pulse-slow rounded-full bg-[radial-gradient(circle_at_40%_40%,rgb(251_243_137/.55),transparent_68%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[160px] -left-[140px] size-[460px] animate-pulse-slower rounded-full bg-[radial-gradient(circle_at_60%_40%,rgb(166_178_255/.5),transparent_68%)]" />

      <div className="relative mx-auto grid max-w-site grid-cols-12 items-center gap-8 max-lg:gap-6 max-[800px]:grid-cols-1">
        <div className="col-span-7 flex flex-col gap-[22px] max-[800px]:col-span-1">
          <span className="inline-flex w-max items-center gap-2.5 rounded-full bg-kaasen-yellow px-[18px] py-2 text-micro font-bold uppercase tracking-[.06em] text-kaasen-blue">
            <span aria-hidden="true" className="block size-1.5 rounded-full bg-kaasen-blue" />
            {hero.badge}
          </span>
          <h1 id="hero-title" className="text-display tracking-display max-[800px]:text-[clamp(28px,8vw,44px)]">
            {hero.titleStart} <Highlight>{hero.titleHighlight}</Highlight> {hero.titleEnd}
          </h1>
          <p className="m-0 max-w-[32em] text-lg leading-[1.65] text-muted">{hero.intro}</p>
        </div>
        <figure className="relative col-span-5 m-0 aspect-[5/4] overflow-hidden rounded-hero shadow-hero max-[800px]:order-first max-[800px]:col-span-1 max-[800px]:aspect-video max-[800px]:max-h-[280px]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 42vw"
            className="object-cover object-[center_60%]"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-kaasen-blue/85 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-kaasen-yellow backdrop-blur-[6px]">
            {hero.imageBadge}
          </figcaption>
        </figure>
      </div>

      <WaveDivider />

      <nav id="kIntent" aria-label="Ihr Anliegen" className="relative mx-auto mt-[clamp(24px,3vw,40px)] grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3.5 min-[801px]:max-lg:grid-cols-3 max-[800px]:grid-cols-1">
        {intents.map((intent) => (
          <IntentCard key={intent.title} intent={intent} />
        ))}
      </nav>
    </section>
  );
}
