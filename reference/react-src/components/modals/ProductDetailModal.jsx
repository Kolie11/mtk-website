import React from 'react';

// „Mehr erfahren“-Fenster eines Produkts
export default function ProductDetailModal({ v }) {
  return (
      <>
      <div className="fixed inset-0 z-[120] grid place-items-center p-[16px] bg-[color:rgba(20,28,92,.55)] [backdrop-filter:blur(4px)]" onClick={v.closeDetail}></div>
      <div className="fixed z-[121] left-[50%] top-[50%] [transform:translate(-50%,-50%)] w-[min(820px,calc(100%_-_32px))] max-h-[calc(100vh_-_32px)] overflow-auto rounded-[24px] bg-[#f7f4ec] text-[#282828] box-border grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!" role="dialog" aria-label={v.d?.name}>
        <div className="relative min-h-[260px]" style={{ background: v.d?.imgBg }}>
          {v.d?.hasImg && (
            <>
              <img className="absolute inset-0 w-full h-full object-contain p-[24px] box-border block" src={v.d?.img} alt={v.d?.name} />
            </>
          )}
          {v.d?.noImg && (
            <>
              <span className="absolute inset-0 grid place-items-center text-[length:12px] tracking-[.14em] uppercase text-[color:rgba(20,28,92,.45)] font-bold">
                {"Produktbild folgt"}
              </span>
            </>
          )}
          <span className="absolute top-[16px] left-[16px] p-[6px_12px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:10.5px] font-bold tracking-[.1em] uppercase">
            {v.d?.cat}
          </span>
        </div>
        <div className="flex flex-col gap-[14px] p-[clamp(22px,3vw,32px)]">
          <div className="flex items-start justify-between gap-[12px]">
            <h2 className="text-[length:clamp(22px,2.6vw,30px)] leading-[1.15] m-0">
              {v.d?.name}
            </h2>
            <button className="flex-none grid place-items-center w-[40px] h-[40px] [border:1px_solid_rgba(20,28,92,.16)] rounded-full bg-[#fff] text-[#141c5c] text-[length:18px] cursor-pointer" onClick={v.closeDetail} aria-label="Schließen">
              {"×"}
            </button>
          </div>
          <p className="m-0 text-[length:15px] leading-[1.65] text-[color:rgba(40,40,40,.8)] text-pretty">
            {v.d?.desc}
          </p>
          <div className="flex flex-wrap gap-[6px]">
            {(v.d?.tags || []).map((tg, index) => (
              <React.Fragment key={index}>
                <span className="p-[5px_10px] rounded-full bg-[color:rgba(166,178,255,.22)] text-[#3a4bb8] text-[length:11px] font-semibold">
                  {tg}
                </span>
              </React.Fragment>
            ))}
          </div>
          {v.d?.kasse && (
            <>
              <div className="flex flex-col gap-[8px] p-[14px_16px] rounded-[16px] bg-[#141c5c] text-[#f7f4ec]">
                <strong className="text-[length:14px] text-[#fbf389]">
                  {"Mit Rezept zur Krankenkasse"}
                </strong>
                <span className="text-[length:13.5px] leading-[1.55]">
                  {"Laden Sie Ihr Rezept hoch — wir prüfen die Kostenübernahme für Sie."}
                </span>
                <button className="self-start p-[9px_16px] border-0 rounded-full bg-[#fbf389] text-[#141c5c] text-[length:13px] font-bold cursor-pointer" onClick={v.detailRezept}>
                  {"Rezept hochladen"}
                </button>
              </div>
            </>
          )}
          <div className="flex flex-col gap-[12px] mt-[auto] pt-[14px] [border-top:1px_solid_rgba(20,28,92,.1)]">
            <div className="flex flex-col gap-[2px]">
              <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(20,28,92,.75)] font-bold">
                {"Direkt kaufen"}
              </span>
              <strong className="text-[length:24px] text-[#141c5c] font-extrabold">
                {v.d?.priceLabel}
              </strong>
              <span className="text-[length:11.5px] leading-[1.5] text-[color:rgba(40,40,40,.7)]">
                {"inkl. MwSt., zzgl. "}
                <a className="text-[#141c5c] underline" href="#agb">
                  {"Versandkosten"}
                </a>
                {" · Es gelten unsere "}
                <a className="text-[#141c5c] underline" href="#agb">
                  {"AGB"}
                </a>
                {" und die "}
                <a className="text-[#141c5c] underline" href="#widerrufsbelehrung">
                  {"Widerrufsbelehrung"}
                </a>
                {"."}
              </span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {v.d?.priced && (
                <>
                  <button className="p-[14px_26px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:14.5px] font-bold cursor-pointer hover:bg-[#282828]!" onClick={v.detailBuy}>
                    {"Kaufen"}
                  </button>
                </>
              )}
              <button className="p-[13px_22px] [border:1.5px_solid_#141c5c] rounded-full bg-transparent text-[#141c5c] text-[length:14px] font-bold cursor-pointer hover:bg-[#141c5c]! hover:text-[#fbf389]!" onClick={v.detailAsk}>
                {"Beratung anfragen"}
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
