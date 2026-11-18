"use client";

import { useProArea } from "./ProAreaProvider";

type FlyerQuickActionProps = { number: string; title: string; text: string };

/** Quick action 03 — opens the flyer download drawer. */
export function FlyerQuickAction({ number, title, text }: FlyerQuickActionProps) {
  const { openFlyerDrawer } = useProArea();
  return (
    <button
      type="button"
      onClick={openFlyerDrawer}
      aria-haspopup="dialog"
      className="flex w-full flex-col gap-2.5 rounded-[20px] border border-kaasen-yellow bg-kaasen-yellow p-[22px] text-left text-kaasen-blue transition-transform hover:-translate-y-0.5"
    >
      <span className="text-[11px] font-bold tracking-label">{number}</span>
      <strong className="text-lg">{title}</strong>
      <span className="text-small leading-[1.55] text-kaasen-blue/80">{text}</span>
    </button>
  );
}
