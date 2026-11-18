import Link from "next/link";
import { ArrowRightIcon, CartIcon, PhoneIcon, PulseIcon, PumpIcon, UploadIcon } from "@/components/ui/Icons";
import type { Intent, IntentIcon, IntentIconTone, IntentTone } from "@/lib/data/site";

const icons: Record<IntentIcon, React.ComponentType<{ size?: number }>> = {
  upload: UploadIcon,
  pump: PumpIcon,
  cart: CartIcon,
  phone: PhoneIcon,
  pulse: PulseIcon,
};

const cardTones: Record<IntentTone, { card: string; sub: string }> = {
  blue: { card: "bg-kaasen-blue text-cream border-kaasen-blue hover:text-cream", sub: "text-cream/72" },
  white: { card: "bg-white text-kaasen-blue border-line hover:text-kaasen-blue", sub: "text-ink/68" },
  lavender: { card: "bg-lavender text-kaasen-blue border-lavender hover:text-kaasen-blue", sub: "text-kaasen-blue/70" },
  dark: { card: "bg-ink text-cream border-ink hover:text-cream", sub: "text-cream/65" },
};

const iconTones: Record<IntentIconTone, string> = {
  yellow: "bg-kaasen-yellow text-kaasen-blue",
  lavender: "bg-lavender text-kaasen-blue",
  blue: "bg-kaasen-blue text-kaasen-yellow",
};

export function IntentCard({ intent }: { intent: Intent }) {
  const Icon = icons[intent.icon];
  const tone = cardTones[intent.tone];

  return (
    <Link
      href={intent.href}
      className={`flex min-h-[220px] flex-col justify-between gap-[22px] rounded-card border p-[26px] shadow-intent transition-[transform,box-shadow] duration-350 ease-soft hover:-translate-y-1.5 hover:shadow-intent-hover max-[800px]:min-h-0 max-[800px]:p-5 ${tone.card}`}
    >
      <span className={`grid size-12 place-items-center rounded-field ${iconTones[intent.iconTone]}`}>
        <Icon size={22} />
      </span>
      <span className="flex flex-col gap-2">
        <strong className="text-[19px] font-bold leading-[1.2]">{intent.title}</strong>
        <span className={`text-small leading-[1.55] ${tone.sub}`}>{intent.description}</span>
      </span>
      <span className="flex items-center justify-between gap-2 text-[13px] font-bold">
        {intent.cta}
        <ArrowRightIcon size={18} />
      </span>
    </Link>
  );
}
