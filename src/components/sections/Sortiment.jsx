import React from 'react';

// Sortiment mit Filtern und Produktkarten
export default function Sortiment({ v }) {
  return (
    <section className="order-[-1] p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)]" id="kProdukte">
      <div className="max-w-[1280px] mx-auto my-0">
        <div className="flex items-end justify-between gap-[26px] flex-wrap mb-[clamp(28px,3vw,44px)]">
          <div className="flex flex-col gap-[14px]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
              {"Sortiment"}
            </span>
            <h2 className="text-[length:clamp(32px,4vw,58px)]">
              {"Nach "}
              <em className="italic text-[#3a4bb8]">
                {"Anwendungsbereich"}
              </em>
              {", nicht nach Marke."}
            </h2>
            <a className="self-start inline-flex items-center gap-[8px] p-[10px_18px] [border:1.5px_solid_#141c5c] rounded-full text-[#141c5c] text-[length:13.5px] font-bold no-underline hover:bg-[#141c5c]! hover:text-[#fbf389]!" href="#shop">
              {"Produkte ohne Kassenleistung im Shop →"}
            </a>
          </div>
          <div className="k-filters flex flex-wrap gap-[6px] p-[6px] rounded-full bg-[#fff] [border:1px_solid_rgba(20,28,92,.1)] max-w-full">
            {(v.filters || []).map((f, index) => (
              <React.Fragment key={index}>
                <button className="p-[9px_16px] border-0 rounded-full text-[length:13px] font-semibold cursor-pointer [transition:all_.25s_ease]" onClick={f?.select} style={{ background: f?.bg, color: f?.color }}>
                  {f?.label}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-[18px] max-[1024px]:grid-cols-[repeat(2,minmax(0,1fr))]! max-[1024px]:gap-[16px]! max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[14px]!">
          {(v.products || []).map((p, index) => (
            <React.Fragment key={index}>
              <article className="flex flex-col rounded-[22px] overflow-hidden bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] [transition:transform_.35s_cubic-bezier(.22,.61,.36,1),box-shadow_.35s_ease] hover:[transform:translateY(-6px)]! hover:shadow-[0_30px_60px_-40px_rgba(20,28,92,.4)]!">
                <div className="relative aspect-[4/3] overflow-hidden flex-none" style={{ background: p?.imgBg }}>
                  <span className="absolute top-[14px] left-[14px] p-[6px_12px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:10.5px] font-bold tracking-[.1em] uppercase z-[2]">
                    {p?.cat}
                  </span>
                  {p?.hasBadge && (
                    <>
                      <span className="absolute top-[14px] right-[14px] p-[6px_12px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:10.5px] font-bold tracking-[.06em] z-[2]">
                        {p?.badge}
                      </span>
                    </>
                  )}
                  {p?.hasImg && (
                    <>
                      <img className="absolute inset-0 w-full h-full object-center block box-border" src={p?.img} alt={p?.name} style={{ objectFit: p?.fit, padding: p?.pad }} />
                    </>
                  )}
                  {p?.noImg && (
                    <>
                      <span className="absolute inset-0 grid place-items-center text-[length:12px] tracking-[.14em] uppercase text-[color:rgba(20,28,92,.45)] font-bold">
                        {"Produktbild folgt"}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-[10px] p-[22px_22px_24px] flex-1">
                  <h3 className="text-[length:20px] leading-[1.2]">
                    {p?.name}
                  </h3>
                  <p className="m-0 text-[length:13.5px] leading-[1.6] text-[color:rgba(40,40,40,.7)] min-h-[3.2em]">
                    {p?.desc}
                  </p>
                  <div className="flex flex-wrap gap-[6px] mt-[2px]">
                    {(p?.tags || []).map((tg, index) => (
                      <React.Fragment key={index}>
                        <span className="p-[5px_10px] rounded-full bg-[color:rgba(166,178,255,.22)] text-[#3a4bb8] text-[length:11px] font-semibold">
                          {tg}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-[10px] mt-[auto] pt-[16px] [border-top:1px_solid_rgba(20,28,92,.08)] min-w-[0]">
                    <span className="text-[length:12px] font-semibold leading-[1.35] text-[#3a4bb8] min-w-[0] flex-1">
                      {p?.note}
                    </span>
                    <button className="p-[10px_16px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:12.5px] font-bold cursor-pointer [transition:background_.2s_ease,transform_.15s_ease] whitespace-nowrap shrink-0 min-h-[40px] hover:bg-[#282828]! hover:[transform:scale(1.03)]!" onClick={p?.add}>
                      {p?.cta}
                    </button>
                  </div>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
