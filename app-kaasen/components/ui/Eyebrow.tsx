type EyebrowTone = "accent" | "yellow" | "blue" | "cream" | "lavender";

const tones: Record<EyebrowTone, string> = {
  accent: "text-accent",
  yellow: "text-kaasen-yellow",
  blue: "text-kaasen-blue",
  cream: "text-cream",
  lavender: "text-lavender",
};

type EyebrowProps = { children: React.ReactNode; tone?: EyebrowTone; className?: string };

export function Eyebrow({ children, tone = "accent", className = "" }: EyebrowProps) {
  return <span className={`eyebrow ${tones[tone]} ${className}`}>{children}</span>;
}
