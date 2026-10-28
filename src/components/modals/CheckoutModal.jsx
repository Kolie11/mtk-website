// Kasse (Platzhalter bis Shopify)
export default function CheckoutModal({ v }) {
  return (
    <>
    {v.checkoutOpen && (
      <>
        <div className="fixed inset-0 z-[120] grid place-items-center p-[16px] bg-[color:rgba(20,28,92,.55)] [backdrop-filter:blur(4px)]">
          <div className="w-[min(500px,100%)] max-h-[calc(100vh_-_32px)] overflow-auto flex flex-col gap-[16px] p-[clamp(22px,3vw,32px)] rounded-[24px] bg-[#f7f4ec] text-[#282828] box-border" role="dialog" aria-label="Zur Kasse">
            <div className="flex items-start justify-between gap-[16px]">
              <div className="flex flex-col gap-[6px]">
                <span className="text-[length:11px] tracking-[.14em] uppercase text-[#3a4bb8] font-bold">
                  {"Kasse"}
                </span>
                <h2 className="text-[length:clamp(22px,2.6vw,30px)] m-0">
                  {"Weiter zur Bezahlung"}
                </h2>
              </div>
              <button className="flex-none grid place-items-center w-[40px] h-[40px] [border:1px_solid_rgba(20,28,92,.16)] rounded-full bg-[#fff] text-[#141c5c] text-[length:18px] cursor-pointer" onClick={v.closeCheckout} aria-label="Schließen">
                {"×"}
              </button>
            </div>
            <div className="flex items-baseline justify-between gap-[12px] p-[14px_16px] rounded-[14px] bg-[#fff]">
              <span className="text-[length:13px] text-[color:rgba(40,40,40,.65)]">
                {"Zwischensumme inkl. MwSt."}
              </span>
              <strong className="text-[length:22px] text-[#141c5c] font-extrabold">
                {v.cartTotal}
              </strong>
            </div>
            <p className="m-0 text-[length:14.5px] leading-[1.65] text-[color:rgba(40,40,40,.78)]">
              {"Sie werden zum sicheren Checkout von Shopify weitergeleitet. Dort geben Sie Ihre Lieferadresse an und wählen Versand und Zahlungsart."}
            </p>
            <a className="inline-flex items-center justify-center gap-[10px] p-[15px_24px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold hover:bg-[#282828]!" href="#">
              {"Zum Shopify-Checkout"}
            </a>
            <span className="text-[length:12px] leading-[1.55] text-[color:rgba(40,40,40,.6)] text-center">
              {"Es gelten unsere "}
              <a className="text-[#141c5c] underline" href="#agb">
                {"AGB"}
              </a>
              {", die "}
              <a className="text-[#141c5c] underline" href="#widerrufsbelehrung">
                {"Widerrufsbelehrung"}
              </a>
              {" und "}
              <a className="text-[#141c5c] underline" href="#agb">
                {"Versand & Zahlung"}
              </a>
              {"."}
            </span>
            <span className="p-[12px_14px] rounded-[12px] bg-[#fff7d6] text-[#6b5600] text-[length:12.5px] leading-[1.55]">
              {"Entwurf: Im Live-Betrieb öffnet sich hier der Shopify-Checkout mit Ihrem Warenkorb."}
            </span>
          </div>
        </div>
      </>
    )}
    </>
  );
}
