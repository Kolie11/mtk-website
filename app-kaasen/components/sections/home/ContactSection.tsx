import { ContactForm } from "@/components/forms/ContactForm";
import { ContactDetailsCard } from "@/components/sections/shared/ContactDetailsCard";
import { MapEmbed } from "@/components/sections/shared/MapEmbed";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealSection } from "@/components/ui/RevealSection";
import { contactSection } from "@/lib/data/site";

/** Contact (#kKontakt): form + map + direct contact details. */
export function ContactSection() {
  return (
    <RevealSection id="kKontakt" aria-labelledby="kontakt-title" className="px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px]">
        <div className="flex min-w-0 flex-col gap-[22px] rounded-modal border border-line bg-white p-[clamp(20px,3.6vw,48px)] max-sm:rounded-tile max-sm:p-4">
          <Eyebrow>{contactSection.eyebrow}</Eyebrow>
          <h2 id="kontakt-title" className="m-0 text-h2-sm">
            {contactSection.title}
          </h2>
          <ContactForm topics={contactSection.topics} submitLabel="Absenden" />
        </div>
        <div className="flex flex-col gap-4">
          <MapEmbed />
          <ContactDetailsCard showCompany />
        </div>
      </div>
    </RevealSection>
  );
}
