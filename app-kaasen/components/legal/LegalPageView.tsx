import { BackLink } from "@/components/layout/BackLink";
import type { LegalPage } from "@/lib/types";

function LegalLine({ line }: { line: string }) {
  if (line.startsWith("## ")) return <h3 className="mt-6 text-lg">{line.slice(3)}</h3>;
  if (line.startsWith("# ")) return <h2 className="mt-9 text-[clamp(20px,2.2vw,26px)]">{line.slice(2)}</h2>;
  return <p className="m-0 mt-3 whitespace-pre-line text-body leading-[1.7] text-ink/80 [overflow-wrap:anywhere]">{line}</p>;
}

/** Renders legal text lines ("# " heading, "## " sub-heading, otherwise paragraph). */
export function LegalPageView({ page }: { page: LegalPage }) {
  return (
    <article aria-labelledby="legal-title" className="px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto flex max-w-narrow flex-col">
        <BackLink href="/">Zur Startseite</BackLink>
        <h1 id="legal-title" className="mt-6 text-h2-md">
          {page.title}
        </h1>
        {page.draft && (
          <p className="m-0 mt-5 rounded-input bg-draft-bg px-3.5 py-3 text-[12.5px] leading-[1.55] text-draft-ink">
            Platzhalter — der rechtsgültige Text wird von Medizintechnik Kaasen GmbH bereitgestellt und rechtlich geprüft.
          </p>
        )}
        {page.lines.map((line, index) => (
          <LegalLine key={index} line={line} />
        ))}
      </div>
    </article>
  );
}
