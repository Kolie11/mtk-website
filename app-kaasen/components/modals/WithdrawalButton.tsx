"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { WithdrawalDialog } from "./WithdrawalDialog";

/** "Vertrag widerrufen" — legally required withdrawal button in the footer. */
export function WithdrawalButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonClass("ghost-light", "sm", "mt-1.5 self-start text-[13px] max-sm:self-center")}>
        Vertrag widerrufen
      </button>
      <WithdrawalDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
