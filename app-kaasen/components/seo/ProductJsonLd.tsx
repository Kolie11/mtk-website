import { company } from "@/lib/data/site";
import type { Product } from "@/lib/types";
import { JsonLd } from "./JsonLd";

/** Product + Offer (README §7). The Offer is only emitted when a public price exists. */
export function ProductJsonLd({ product, description }: { product: Product; description: string }) {
  const image = product.image?.src;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description,
        image: image ? (image.startsWith("http") ? image : `${company.siteUrl}${image}`) : undefined,
        category: product.category,
        brand: { "@type": "Brand", name: product.name.split(" ")[0] },
        ...(product.price.amount !== null && {
          offers: {
            "@type": "Offer",
            price: product.price.amount.toFixed(2),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${company.siteUrl}/produkte/${product.slug}`,
            seller: { "@id": `${company.siteUrl}/#organization` },
          },
        }),
      }}
    />
  );
}
