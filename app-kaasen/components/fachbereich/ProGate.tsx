"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { buttonClass } from "@/components/ui/buttonStyles";
import { Dialog } from "@/components/ui/Dialog";
import { proGate } from "@/lib/data/fachbereich";
import { ProLoadingScreen } from "./ProLoadingScreen";

type GateState = "asking" | "loading" | "open";

/**
 * Business rule: no login needed to enter. On EVERY visit ask "Sind Sie eine Fachperson?".
 * "Ja" → 5 s loading screen → page. "Nein" → back to "/". Nothing is remembered.
 */
export function ProGate() {
  const [state, setState] = useState<GateState>("asking");

  useEffect(() => {
    if (state !== "loading") return;
    const timer = window.setTimeout(() => setState("open"), proGate.loadingMs);
    return () => window.clearTimeout(timer);
  }, [state]);

  return (
    <>
      <Dialog
        open={state === "asking"}
        onClose={() => undefined}
        labelledBy="gate-title"
        closeOnBackdrop={false}
        closeOnEscape={false}
        className="max-w-[520px] backdrop:bg-kaasen-blue/72 backdrop:backdrop-blur-[6px]"
      >
        <div className="flex flex-col gap-[18px] rounded-modal bg-cream p-[clamp(24px,4vw,40px)]">
          <Logo className="h-9 w-auto self-start" />
          <h2 id="gate-title" className="m-0 text-[clamp(26px,3vw,34px)] leading-[1.12]">
            {proGate.question}
          </h2>
          <p className="m-0 text-body leading-[1.65] text-ink/80">{proGate.text}</p>
          <div className="grid grid-cols-2 gap-2.5 max-[380px]:grid-cols-1">
            <Link href="/" className={buttonClass("outline", "lg", "text-center hover:bg-white hover:text-kaasen-blue")}>
              {proGate.no}
            </Link>
            <button type="button" autoFocus onClick={() => setState("loading")} className={buttonClass("primary", "lg")}>
              {proGate.yes}
            </button>
          </div>
          <span className="text-[12.5px] leading-[1.55] text-ink/70">{proGate.hint}</span>
        </div>
      </Dialog>
      {state === "loading" && <ProLoadingScreen />}
    </>
  );
}
