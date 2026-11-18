import { company, openingHours } from "@/lib/data/site";
import { JsonLd } from "./JsonLd";

/** MedicalBusiness / LocalBusiness (README §7). */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": `${company.siteUrl}/#organization`,
        name: company.name,
        url: company.siteUrl,
        logo: `${company.siteUrl}/images/logo-kaasen.png`,
        telephone: company.phoneInternational,
        email: company.email,
        foundingDate: String(company.foundedYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: company.street,
          postalCode: company.zip,
          addressLocality: company.city,
          addressCountry: company.country,
        },
        openingHoursSpecification: openingHours.schema.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: slot.days,
          opens: slot.opens,
          closes: slot.closes,
        })),
      }}
    />
  );
}
