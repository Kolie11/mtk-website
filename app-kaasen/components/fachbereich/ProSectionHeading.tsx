import { Highlight } from "@/components/ui/Highlight";

type ProSectionHeadingProps = {
  id: string;
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  onDark?: boolean;
  children?: React.ReactNode;
};

/** Eyebrow + h2 with italic highlight (Fachbereich sections). */
export function ProSectionHeading({ id, eyebrow, titleStart, titleHighlight, onDark = false, children }: ProSectionHeadingProps) {
  return (
    <div className="flex max-w-[640px] flex-col gap-3">
      <span className={`text-[11px] font-bold uppercase tracking-[.2em] ${onDark ? "text-kaasen-yellow" : "text-accent"}`}>{eyebrow}</span>
      <h2 id={id} className={`m-0 text-h2-md ${onDark ? "text-cream" : ""}`}>
        {titleStart} <Highlight tone={onDark ? "yellow" : "accent"}>{titleHighlight}</Highlight>.
      </h2>
      {children}
    </div>
  );
}
