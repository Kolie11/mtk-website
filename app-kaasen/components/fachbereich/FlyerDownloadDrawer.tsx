"use client";

import { buttonClass } from "@/components/ui/buttonStyles";
import type { Flyer } from "@/lib/types";
import { DownloadRow } from "./DownloadRow";
import { DrawerShell } from "./DrawerShell";
import { useProArea } from "./ProAreaProvider";

/** Public flyer downloads (product, title, format, download). */
export function FlyerDownloadDrawer({ flyers }: { flyers: Flyer[] }) {
  const { flyerDrawerOpen, closeFlyerDrawer, setContactMode } = useProArea();

  function orderPrinted() {
    closeFlyerDrawer();
    setContactMode("flyer");
    window.setTimeout(() => document.getElementById("fKontakt")?.scrollIntoView({ behavior: "smooth" }), 60);
  }

  return (
    <DrawerShell open={flyerDrawerOpen} onClose={closeFlyerDrawer} titleId="flyer-drawer-title" eyebrow="Downloads" title="Produktinfos / Flyer" widthClass="sm:max-w-[520px]">
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {flyers.map((flyer) => (
          <DownloadRow key={flyer.id} kicker={flyer.description} title={flyer.title} format={flyer.format} url={flyer.pdfUrl} />
        ))}
      </ul>
      <span className="pt-1.5 text-micro text-ink/65">Platzhalter — PDFs werden ergänzt. Gedruckte Flyer: Formular „Infomaterial bestellen“.</span>
      <button type="button" onClick={orderPrinted} className={buttonClass("outline", "sm", "self-start text-[13.5px]")}>
        Gedruckt bestellen →
      </button>
    </DrawerShell>
  );
}
