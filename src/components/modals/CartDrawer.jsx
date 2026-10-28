import React from 'react';

// Warenkorb: Hintergrund + ausfahrendes Panel
export default function CartDrawer({ v }) {
  return (
      <>
      <div className="fixed inset-0 z-[95] bg-[color:rgba(20,28,92,.55)] opacity-0 pointer-events-none [transition:opacity_.35s_ease] [backdrop-filter:blur(3px)]" ref={v.scrimRef} onClick={v.closeCart}></div>
      <aside className="fixed top-0 right-0 bottom-0 z-[96] flex flex-col w-[min(430px,92vw)] bg-[#f7f4ec] [border-left:1px_solid_rgba(20,28,92,.08)] [transform:translateX(105%)] [transition:transform_.45s_cubic-bezier(.22,.61,.36,1)] shadow-[-30px_0_60px_-20px_rgba(20,28,92,.3)]" ref={v.drawerRef}>
        <div className="flex items-center justify-between gap-[16px] p-[22px_26px] [border-bottom:1px_solid_rgba(20,28,92,.1)]">
          <div>
            <strong className="text-[length:20px] text-[#141c5c] font-extrabold tracking-[-.01em]">
              {"Warenkorb"}
            </strong>
            <div className="text-[length:12.5px] text-[color:rgba(40,40,40,.6)]">
              {v.cartCountLabel}
            </div>
          </div>
          <button className="grid place-items-center w-[36px] h-[36px] [border:1px_solid_rgba(20,28,92,.14)] rounded-full bg-transparent text-[length:16px] text-[#141c5c] cursor-pointer hover:bg-[#141c5c]! hover:text-[#fbf389]! hover:border-[color:#141c5c]!" onClick={v.closeCart}>
            {"×"}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-[18px_26px]">
          {v.hasCart && (
            <>
              {(v.cartLines || []).map((l, index) => (
                <React.Fragment key={index}>
                  <div className="grid grid-cols-[56px_1fr_auto] gap-[14px] items-center p-[14px_0] [border-bottom:1px_solid_rgba(20,28,92,.08)]">
                    <span className="grid place-items-center h-[52px] rounded-[12px] bg-[#a6b2ff]">
                      <svg width="26" height="26" viewBox="0 0 60 60" fill="none">
                        <path d="M8 34c6-8 12-8 22 0s16 8 22 0" stroke="#141c5c" strokeWidth="3" strokeLinecap="round" fill="none"></path>
                        <path d="M8 26c6-8 12-8 22 0s16 8 22 0" stroke="#fbf389" strokeWidth="3" strokeLinecap="round" fill="none"></path>
                      </svg>
                    </span>
                    <span className="flex flex-col gap-[4px]">
                      <strong className="text-[length:14.5px] text-[#141c5c] font-bold">
                        {l?.name}
                      </strong>
                      <span className="text-[length:12.5px] text-[color:rgba(40,40,40,.6)]">
                        {l?.price}
                      </span>
                      <span className="flex items-center gap-[12px] mt-[4px]">
                        <button className="grid place-items-center w-[24px] h-[24px] [border:1px_solid_rgba(20,28,92,.18)] rounded-full bg-transparent text-[#141c5c] cursor-pointer" onClick={l?.dec}>
                          {"–"}
                        </button>
                        <span className="text-[length:13.5px] min-w-[12px] text-center text-[#141c5c] font-bold">
                          {l?.qty}
                        </span>
                        <button className="grid place-items-center w-[24px] h-[24px] [border:1px_solid_rgba(20,28,92,.18)] rounded-full bg-transparent text-[#141c5c] cursor-pointer" onClick={l?.inc}>
                          {"+"}
                        </button>
                      </span>
                    </span>
                    <button className="self-start border-0 bg-transparent text-[#3a4bb8] [font:inherit] text-[length:11.5px] font-semibold underline cursor-pointer" onClick={l?.remove}>
                      {"Entfernen"}
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </>
          )}
          {v.cartEmpty && (
            <>
              <div className="flex flex-col gap-[14px] p-[40px_0]">
                <strong className="text-[length:22px] text-[#141c5c] font-extrabold tracking-[-.01em]">
                  {"Warenkorb ist leer."}
                </strong>
                <span className="text-[length:14.5px] leading-[1.7] text-[color:rgba(40,40,40,.7)]">
                  {"Milchpumpen & Hilfsmittel laufen über eine separate Rezept-/Versorgungsanfrage. Ob Ihre Kasse übernimmt, prüfen wir kostenlos."}
                </span>
                <a className="self-start p-[12px_22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:13.5px] font-bold hover:bg-[#282828]!" href="#kProdukte" onClick={v.closeCart}>
                  {"Sortiment ansehen"}
                </a>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[14px] p-[22px_26px_26px] [border-top:1px_solid_rgba(20,28,92,.1)] bg-[#fff]">
          <div className="flex items-baseline justify-between">
            <span className="text-[length:11px] tracking-[.2em] uppercase text-[color:rgba(40,40,40,.55)]">
              {"Summe"}
            </span>
            <strong className="text-[length:26px] text-[#141c5c] font-extrabold tracking-[-.02em]">
              {v.cartTotal}
            </strong>
          </div>
          <button className="p-[16px_26px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer hover:bg-[#282828]!" onClick={v.goCheckout}>
            {"Zur Kasse"}
          </button>
          <span className="text-[length:11.5px] leading-[1.6] text-[color:rgba(40,40,40,.55)] text-center">
            {"Sichere Bezahlung über Shopify · inkl. MwSt., zzgl. Versand"}
          </span>
        </div>
      </aside>
      </>
  );
}
