type HighlightProps = { children: React.ReactNode; tone?: "accent" | "yellow" };

/** Italic highlighted word inside headlines (brand style). */
export function Highlight({ children, tone = "accent" }: HighlightProps) {
  return <em className={`italic ${tone === "yellow" ? "text-kaasen-yellow" : "text-accent"}`}>{children}</em>;
}
