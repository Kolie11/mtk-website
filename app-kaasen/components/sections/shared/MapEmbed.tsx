"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { MapPinIcon } from "@/components/ui/Icons";
import { company, externalLinks } from "@/lib/data/site";

/**
 * Google Maps loads only after an explicit click (GDPR: no third-party request
 * before consent). Replace with the cookie-consent decision once the banner exists.
 */
export function MapEmbed({ className = "min-h-[230px] flex-1" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const address = `${company.street}, ${company.zip} ${company.city}`;

  return (
    <div className={`relative overflow-hidden rounded-panel bg-sky ${className}`}>
      {loaded ? (
        <iframe
          title={`Karte: ${address}`}
          src={externalLinks.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <>
          <svg viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full text-kaasen-blue opacity-35">
            <path d="M50 40 Q120 90 60 140 T140 180" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <path d="M180 20 Q220 60 300 30 Q380 40 380 100" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <path d="M20 100 Q80 120 160 90 Q260 60 360 130" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
          <div className="absolute inset-0 grid place-items-center p-4">
            <div className="flex flex-col items-center gap-3 text-center">
              <span aria-hidden="true" className="grid size-11 place-items-center rounded-full bg-kaasen-yellow text-kaasen-blue shadow-[0_0_0_12px_rgb(251_243_137/.35)]">
                <MapPinIcon size={20} />
              </span>
              <button type="button" onClick={() => setLoaded(true)} className={buttonClass("light", "sm", "mt-2")}>
                Karte laden (Google Maps)
              </button>
            </div>
          </div>
          <span className="absolute bottom-3.5 left-4 font-mono text-[11px] text-kaasen-blue/60">{address}</span>
        </>
      )}
    </div>
  );
}
