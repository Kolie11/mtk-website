import { company, openingHours } from "@/lib/data/site";

/** Blue "Direkter Draht" card. */
export function ContactDetailsCard({ showCompany = false }: { showCompany?: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-panel bg-kaasen-blue p-panel text-cream max-sm:p-4">
      <span className="text-[11px] uppercase tracking-eyebrow text-lavender">Direkter Draht</span>
      {showCompany && (
        <div className="flex flex-col gap-1">
          <strong className="text-xl font-bold text-cream">{company.name}</strong>
          <span className="text-[14.5px] text-cream/70">
            {company.street}, {company.zip} {company.city}
          </span>
        </div>
      )}
      <address className={`flex flex-col gap-2.5 text-body not-italic ${showCompany ? "border-t border-cream/14 pt-4" : ""}`}>
        <a href={company.phoneHref} className="text-kaasen-yellow hover:text-cream">
          {company.phoneInternational}
        </a>
        <a href={`mailto:${company.email}`} className="text-kaasen-yellow hover:text-cream">
          {company.email}
        </a>
        <span className="text-small text-cream/65">{openingHours.long}</span>
      </address>
    </div>
  );
}
