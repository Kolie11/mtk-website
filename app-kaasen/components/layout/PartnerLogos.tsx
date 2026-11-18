import Image from "next/image";
import type { Partner } from "@/lib/types";

/** Partner logos — deliberately NOT links (business rule). */
export function PartnerLogos({ partners }: { partners: Partner[] }) {
  if (partners.length === 0) return null;
  return (
    <div className="mt-9 flex flex-col gap-3.5 border-t border-cream/14 pt-7">
      <h2 className="m-0 text-[11px] font-normal uppercase tracking-[.2em] text-cream/55">Unsere Partner</h2>
      <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 max-sm:justify-center">
        {partners.map((partner) => (
          <li key={partner.id} className="grid h-14 min-w-[120px] place-items-center rounded-field bg-white px-[18px] py-2.5">
            {partner.logo ? (
              <Image src={partner.logo} alt={partner.name} width={140} height={36} className="max-h-9 w-auto object-contain" />
            ) : (
              <span className="text-sm font-bold text-kaasen-blue">{partner.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
