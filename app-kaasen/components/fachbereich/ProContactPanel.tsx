"use client";

import type { Flyer } from "@/lib/types";
import { FlyerOrderForm } from "./FlyerOrderForm";
import { ProContactForm } from "./ProContactForm";
import { useProArea } from "./ProAreaProvider";

const tabClass = (active: boolean) =>
  `rounded-full border-0 px-[18px] py-2.5 text-small font-bold ${active ? "bg-kaasen-blue text-kaasen-yellow" : "bg-transparent text-kaasen-blue hover:bg-kaasen-blue/6"}`;

/** Switch between "Kontaktanfrage" and "Infomaterial bestellen". */
export function ProContactPanel({ flyers }: { flyers: Flyer[] }) {
  const { contactMode, setContactMode } = useProArea();

  return (
    <>
      <div role="tablist" aria-label="Art der Anfrage" className="inline-flex self-start rounded-full border border-kaasen-blue/10 bg-cream p-1">
        <button type="button" role="tab" id="tab-contact" aria-controls="panel-contact" aria-selected={contactMode === "contact"} onClick={() => setContactMode("contact")} className={tabClass(contactMode === "contact")}>
          Kontaktanfrage
        </button>
        <button type="button" role="tab" id="tab-flyer" aria-controls="panel-flyer" aria-selected={contactMode === "flyer"} onClick={() => setContactMode("flyer")} className={tabClass(contactMode === "flyer")}>
          Infomaterial bestellen
        </button>
      </div>
      {contactMode === "contact" ? (
        <div role="tabpanel" id="panel-contact" aria-labelledby="tab-contact">
          <ProContactForm />
        </div>
      ) : (
        <div role="tabpanel" id="panel-flyer" aria-labelledby="tab-flyer">
          <FlyerOrderForm flyers={flyers} />
        </div>
      )}
    </>
  );
}
