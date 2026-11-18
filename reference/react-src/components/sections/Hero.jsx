import React from 'react';

// Startbereich mit Headline, Bild und Schnellaktionen
export default function Hero({ v }) {
  return (
    <section className="order-[-1] relative p-[clamp(44px,6vw,88px)_clamp(16px,3vw,36px)_clamp(28px,3vw,44px)] overflow-hidden" id="kTop">
      <div className="absolute top-[-140px] right-[-120px] w-[520px] h-[520px] rounded-full [background:radial-gradient(circle_at_40%_40%,rgba(251,243,137,.55),transparent_68%)] [animation:kPulse_14s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-160px] left-[-140px] w-[460px] h-[460px] rounded-full [background:radial-gradient(circle_at_60%_40%,rgba(166,178,255,.5),transparent_68%)] [animation:kPulse_18s_ease-in-out_infinite_reverse] max-[800px]:w-full! max-[800px]:h-auto! max-[800px]:min-h-[260px]!"></div>
      <div className="k-hero relative max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(12,1fr)] gap-[32px] items-center max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
        <div className="k-hero-text col-[span_7] flex flex-col gap-[22px] max-[800px]:col-[1/-1]!">
          <span className="inline-flex items-center gap-[10px] p-[8px_18px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:12px] font-bold tracking-[.06em] uppercase w-[max-content]">
            <span className="block w-[6px] h-[6px] rounded-full bg-[#141c5c]"></span>
            {" Zugelassen für alle Krankenkassen"}
          </span>
          <h1 className="text-[length:clamp(38px,6vw,84px)] tracking-[-.025em]">
            {"Wie möchten Sie "}
            <em className="italic text-[#3a4bb8]">
              {"versorgt"}
            </em>
            {" werden?"}
          </h1>
          <p className="m-0 max-w-[32em] text-[length:18px] leading-[1.65] text-[#4a4a52]">
            {"Wählen Sie Ihr Anliegen — nicht das Produkt. Wir bringen Sie in wenigen Schritten dorthin, wo Sie hin wollen."}
          </p>
        </div>
        <figure className="k-hero-figure col-[span_5] m-0 relative rounded-[32px] overflow-hidden aspect-[5/4] shadow-[0_40px_80px_-40px_rgba(20,28,92,.5)] max-[800px]:col-[1/-1]!">
          <img className="w-full h-full object-cover block" src="/images/hero.jpg" alt="Mutter mit Kind" />
          <span className="absolute bottom-[16px] left-[16px] p-[8px_14px] rounded-full bg-[color:rgba(20,28,92,.85)] text-[#fbf389] text-[length:11px] tracking-[.12em] uppercase font-bold [backdrop-filter:blur(6px)]">
            {"Familie · seit 2005"}
          </span>
        </figure>
      </div>
      <svg className="block w-full max-w-[1280px] m-[32px_auto_0] h-[60px]" viewBox="0 0 1400 60" preserveAspectRatio="none" aria-hidden="true">
        <path className="[animation:kWave_12s_ease-in-out_infinite]" d="M0 30 C 175 -10, 350 70, 525 30 S 875 -10, 1050 30 S 1400 70, 1400 30" stroke="#141c5c" strokeWidth="2" fill="none" opacity=".38"></path>
        <path d="M0 40 C 175 0, 350 80, 525 40 S 875 0, 1050 40 S 1400 80, 1400 40" stroke="#3a4bb8" strokeWidth="2" fill="none" opacity=".2"></path>
      </svg>
      <div className="relative max-w-[1280px] m-[clamp(24px,3vw,40px)_auto_0] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[14px] max-[1024px]:grid-cols-[repeat(3,minmax(0,1fr))]! max-[1024px]:gap-[12px]! max-[800px]:grid-cols-[repeat(2,minmax(0,1fr))]! max-[800px]:gap-[10px]! max-[640px]:grid-cols-[1fr]! max-[640px]:gap-[10px]!" id="kIntent">
        {(v.intents || []).map((i, index) => (
          <React.Fragment key={index}>
            <a className="flex flex-col justify-between gap-[22px] min-h-[220px] p-[26px] rounded-[22px] [transition:transform_.35s_cubic-bezier(.22,.61,.36,1),box-shadow_.35s_ease] shadow-[0_12px_30px_-26px_rgba(20,28,92,.5)] hover:[transform:translateY(-6px)]! hover:shadow-[0_24px_46px_-28px_rgba(20,28,92,.7)]!" href={i?.href} style={{ background: i?.bg, color: i?.color, border: `1px solid ${i?.border ?? ""}` }}>
              <span className="grid place-items-center w-[48px] h-[48px] rounded-[14px]" style={{ background: i?.icoBg, color: i?.icoColor }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {i?.icoPath}
                </svg>
              </span>
              <span className="flex flex-col gap-[8px]">
                <strong className="text-[length:19px] font-bold leading-[1.2]" style={{ color: i?.color }}>
                  {i?.title}
                </strong>
                <span className="text-[length:13.5px] leading-[1.55]" style={{ color: i?.sub }}>
                  {i?.desc}
                </span>
              </span>
              <span className="flex items-center justify-between gap-[8px] text-[length:13px] font-bold">
                {i?.cta}{" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
