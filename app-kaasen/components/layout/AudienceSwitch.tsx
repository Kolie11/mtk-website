import Link from "next/link";
import { PhoneIcon } from "@/components/ui/Icons";
import { company, openingHours } from "@/lib/data/site";

const pillBase = "rounded-full px-4 py-[7px] text-micro font-semibold tracking-[.02em] transition-colors duration-200";

/** Top bar: phone + opening hours, and the "Privatpersonen / Fachpersonen" switch. */
export function AudienceSwitch() {
  return (
    <div className="bg-kaasen-blue text-cream">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-3.5 px-gutter py-[9px] text-[12.5px]">
        <span className="flex items-center gap-2.5 text-cream/70 max-[380px]:hidden">
          <PhoneIcon size={14} strokeWidth={2.4} className="text-kaasen-yellow" />
          {company.phoneInternational} · {openingHours.short}
        </span>
        <nav aria-label="Zielgruppe" className="flex gap-1 rounded-full bg-cream/8 p-[3px] max-[380px]:w-full">
          <Link href="/" aria-current="page" className={`${pillBase} bg-kaasen-yellow text-kaasen-blue max-[380px]:flex-1 max-[380px]:text-center`}>
            Für Privatpersonen
          </Link>
          <Link href="/fachbereich" className={`${pillBase} text-cream/70 hover:text-kaasen-yellow max-[380px]:flex-1 max-[380px]:text-center`}>
            Für Fachpersonen
          </Link>
        </nav>
      </div>
    </div>
  );
}
