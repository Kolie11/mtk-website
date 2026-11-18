import { JsonLd } from "./JsonLd";

type FaqJsonLdProps = { items: { question: string; answer: string }[] };

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  if (items.length === 0) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
