import React from 'react';

// Shop-Seite (#shop) mit allen Verkaufsprodukten
export default function ShopPage({ v }) {
  return (
    <div className="order-[2]" style={{ display: v.shopDisplay }}>
      <section className="p-[clamp(40px,5vw,72px)_clamp(16px,3vw,36px)_clamp(56px,6vw,96px)] bg-[#f7f4ec]" id="kShop">
        <div className="max-w-[1280px] mx-auto my-0 flex flex-col gap-[clamp(24px,3vw,40px)]">
          <div className="flex flex-col gap-[14px] max-w-[48em]">
            <a className="self-start inline-flex items-center gap-[8px] text-[length:13px] font-bold text-[#3a4bb8] no-underline" href="#kProdukte">
              {"← Zurück zum Sortiment"}
            </a>
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
              {"Shop · babybeat"}
            </span>
            <h2 className="text-[length:clamp(32px,4vw,58px)] m-0">
              {"Direkt "}
              <em className="italic text-[#3a4bb8]">
                {"bestellen"}
              </em>
              {"."}
            </h2>
            <p className="m-0 text-[length:16px] leading-[1.65] text-[color:rgba(40,40,40,.75)] text-pretty">
              {"Produkte ohne Kassenleistung — rund ums Stillen, Abpumpen und die erste Zeit mit Baby. Alle Preise inkl. MwSt., zzgl. Versandkosten."}
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-[clamp(14px,1.6vw,22px)]">
            {(v.shopProducts || []).map((p, index) => (
              <React.Fragment key={index}>
                <article className="flex flex-col rounded-[22px] overflow-hidden bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] [transition:transform_.35s_cubic-bezier(.22,.61,.36,1),box-shadow_.35s_ease] hover:[transform:translateY(-6px)]! hover:shadow-[0_30px_60px_-40px_rgba(20,28,92,.4)]!">
                  <div className="relative aspect-[4/3] overflow-hidden flex-none" style={{ background: p?.imgBg }}>
                    <span className="absolute top-[14px] left-[14px] p-[6px_12px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:10.5px] font-bold tracking-[.1em] uppercase z-[2]">
                      {p?.cat}
                    </span>
                    {p?.hasImg && (
                      <>
                        <img className="absolute inset-0 w-full h-full block box-border" src={p?.img} alt={p?.name} loading="lazy" style={{ objectFit: p?.fit, padding: p?.pad }} />
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
                  <div className="flex flex-col gap-[10px] p-[20px_20px_22px] flex-1">
                    <h3 className="text-[length:18px] leading-[1.25] m-0">
                      {p?.name}
                    </h3>
                    <p className="m-0 text-[length:13.5px] leading-[1.6] text-[color:rgba(40,40,40,.7)]">
                      {p?.desc}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-[10px] mt-[auto] pt-[14px] [border-top:1px_solid_rgba(20,28,92,.08)]">
                      <strong className="text-[length:18px] text-[#141c5c] font-extrabold">
                        {p?.price}
                      </strong>
                      <button className="p-[10px_16px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:13px] font-bold cursor-pointer hover:bg-[#282828]!" onClick={p?.add}>
                        {p?.btn}
                      </button>
                    </div>
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
