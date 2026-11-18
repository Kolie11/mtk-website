const tocItems = [
  { label: "Kurz erklärt", href: "#p-kurz" },
  { label: "Funktion", href: "#p-funktion" },
  { label: "Eignung", href: "#p-eignung" },
  { label: "Versorgung", href: "#p-versorgung" },
  { label: "Kontakt", href: "#p-kontakt" },
  { label: "FAQ", href: "#p-faq" },
];

/** In-page navigation. "Versorgung" only exists for insurance products. */
export function ProductToc({ showCare }: { showCare: boolean }) {
  const items = showCare ? tocItems : tocItems.filter((item) => item.href !== "#p-versorgung");
  return (
    <nav aria-label="Inhalt dieser Seite" className="flex max-w-full gap-1 self-start overflow-x-auto rounded-full border border-line bg-white p-1.5 scrollbar-none sm:flex-wrap">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="flex-shrink-0 whitespace-nowrap rounded-full px-4 py-[9px] text-[13px] font-semibold text-kaasen-blue hover:bg-kaasen-yellow hover:text-kaasen-blue">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
