import type { Testimonial } from "@/lib/types";
import { ProSectionHeading } from "./ProSectionHeading";

const bubbleTone = {
  patient: "bg-white text-ink",
  professional: "bg-kaasen-blue text-cream",
};

/** Block 4: speech bubbles — patients white, professionals blue, product visible. */
export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section aria-labelledby="f-stimmen-title" className="px-gutter py-[clamp(56px,7vw,96px)] max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <ProSectionHeading id="f-stimmen-title" eyebrow="Erfahrungen" titleStart="Stimmen aus" titleHighlight="Praxis und Alltag" />
          <span className="text-[12.5px] text-ink/70">Beispieltexte — echte Stimmen folgen</span>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5 p-0">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="m-0 flex flex-col gap-4">
                <blockquote className={`relative m-0 rounded-[22px_22px_22px_6px] px-[22px] pb-6 pt-[22px] text-body leading-[1.65] [text-wrap:pretty] ${bubbleTone[testimonial.audience]}`}>
                  „{testimonial.quote}“
                </blockquote>
                <figcaption className="flex items-center gap-3 pl-1.5">
                  <span aria-hidden="true" className="grid size-[46px] flex-none place-items-center rounded-full bg-sand text-sm font-extrabold text-kaasen-blue">
                    {testimonial.initials}
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <strong className="text-sm text-kaasen-blue">{testimonial.name}</strong>
                    <span className="text-[12.5px] text-ink/72">
                      {testimonial.role} · <b className="font-bold text-accent">{testimonial.product}</b>
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
