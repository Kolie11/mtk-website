"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExternalIcon } from "@/components/ui/Icons";
import { externalLinks, prescription } from "@/lib/data/site";

const REDIRECT_SECONDS = 5;

type NextcloudRedirectDialogProps = { open: boolean; onClose: () => void };

/** Step 2 of 2: after the form is sent, the user is redirected to the Nextcloud upload page. */
export function NextcloudRedirectDialog({ open, onClose }: NextcloudRedirectDialogProps) {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (!open) {
      setSecondsLeft(REDIRECT_SECONDS);
      setCancelled(false);
      return;
    }
    if (cancelled) return;
    if (secondsLeft === 0) {
      window.location.assign(externalLinks.nextcloudUpload);
      return;
    }
    const timer = window.setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [open, cancelled, secondsLeft]);

  return (
    <Dialog open={open} onClose={onClose} labelledBy="nextcloud-title" className="max-w-[520px]">
      <div className="flex flex-col gap-4 bg-cream p-[clamp(22px,3vw,32px)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <Eyebrow className="text-[11px] tracking-label">{prescription.uploadEyebrow}</Eyebrow>
            <h2 id="nextcloud-title" className="m-0 text-h3">
              {prescription.uploadTitle}
            </h2>
          </div>
          <CloseButton onClick={onClose} />
        </div>
        <p className="m-0 text-[14.5px] leading-[1.65] text-ink/78">{prescription.uploadText}</p>
        <a href={externalLinks.nextcloudUpload} className={buttonClass("primary", "lg")}>
          {prescription.uploadCta}
          <ExternalIcon size={16} strokeWidth={2.4} />
        </a>
        <p role="status" aria-live="polite" className="m-0 text-[12.5px] leading-[1.55] text-ink/70">
          {cancelled ? (
            "Automatische Weiterleitung gestoppt."
          ) : (
            <>
              Automatische Weiterleitung in {secondsLeft} s.{" "}
              <button type="button" onClick={() => setCancelled(true)} className="border-0 bg-transparent p-0 font-semibold text-accent underline">
                Abbrechen
              </button>
            </>
          )}
        </p>
      </div>
    </Dialog>
  );
}
