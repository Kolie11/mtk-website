import { company } from "@/lib/data/site";
import { JsonLd } from "./JsonLd";

type BreadcrumbJsonLdProps = { items: { name: string; path: string }[] };

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${company.siteUrl}${item.path}`,
        })),
      }}
    />
  );
}
