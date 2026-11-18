"use client";

import Link from "next/link";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { buttonClass } from "@/components/ui/buttonStyles";
import { WithdrawalForm } from "@/components/forms/WithdrawalForm";

type WithdrawalDialogProps = { open: boolean; onClose: () => void };

export function WithdrawalDialog({ open, onClose }: WithdrawalDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} labelledBy="withdrawal-title" className="max-w-[540px]">
      <div className="flex flex-col gap-4 bg-cream p-[clamp(22px,3vw,32px)] text-left">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <Eyebrow className="text-[11px] tracking-[.18em]">Widerruf</Eyebrow>
            <h2 id="withdrawal-title" className="m-0 text-h3">
              Vertrag widerrufen
            </h2>
          </div>
          <CloseButton onClick={onClose} />
        </div>
        <WithdrawalForm
          successAction={
            <button type="button" onClick={onClose} className={buttonClass("primary", "md")}>
              Schließen
            </button>
          }
        />
        <span className="text-center text-micro leading-[1.55] text-ink/60">
          Details zu Fristen und Rücksendung:{" "}
          <Link href="/widerrufsbelehrung" onClick={onClose} className="text-kaasen-blue underline">
            Widerrufsbelehrung
          </Link>
        </span>
      </div>
    </Dialog>
  );
}
