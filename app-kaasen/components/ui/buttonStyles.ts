// Shared button looks (README §6: dark buttons hover to ink, outline buttons fill blue with yellow text).

export type ButtonVariant = "primary" | "light" | "outline" | "yellow" | "ghost-light";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-kaasen-blue text-kaasen-yellow hover:bg-ink hover:text-kaasen-yellow",
  light: "bg-white text-kaasen-blue hover:bg-kaasen-yellow hover:text-kaasen-blue",
  outline:
    "border-[1.5px] border-kaasen-blue bg-transparent text-kaasen-blue hover:bg-kaasen-blue hover:text-kaasen-yellow",
  yellow: "bg-kaasen-yellow text-kaasen-blue hover:bg-kaasen-blue hover:text-kaasen-yellow",
  "ghost-light":
    "border-[1.5px] border-kaasen-yellow bg-transparent text-kaasen-yellow hover:bg-kaasen-yellow hover:text-kaasen-blue",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2.5 text-[12.5px]",
  md: "min-h-11 px-[22px] py-3.5 text-sm",
  lg: "min-h-12 px-7 py-4 text-[15px]",
};

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "md", extra = ""): string {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}
