import React from 'react';

// Kostenübernahme durch die Krankenkasse
export default function Krankenkasse({ v }) {
  return (
    <section className="p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)] bg-[#a6b2ff]" id="kKasse">
      <div className="max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(28px,4vw,60px)] items-start max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
        <div className="k-kasse-left flex flex-col gap-[20px] sticky top-[120px] self-start">
          <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#141c5c] font-bold">
            {"Kostenübernahme & Beratung"}
          </span>
          <h2 className="text-[length:clamp(30px,4vw,54px)]">
            {"Was die Kasse zahlt — offen und ehrlich."}
          </h2>
          <p className="m-0 max-w-[28em] text-[length:16.5px] leading-[1.7] text-[color:rgba(20,28,92,.78)]">
            {"Wir sind zugelassener Leistungserbringer und rechnen direkt mit Ihrer Kasse ab. Für eine Beratung über die Kostenübernahme brauchen Sie "}
            <strong>
              {"keinen Termin"}
            </strong>
            {" — rufen Sie einfach an oder schreiben eine E-Mail."}
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <a className="inline-flex items-center gap-[10px] p-[14px_22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:14px] font-bold hover:bg-[#282828]!" href="tel:+492306306090">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2L8 9.6a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2-.5 13 13 0 0 0 2.7.6 2 2 0 0 1 1.7 2z"></path>
              </svg>
              {"02306 30609-0"}
            </a>
            <a className="inline-flex items-center gap-[10px] p-[14px_22px] rounded-full bg-[#fff] text-[#141c5c] text-[length:14px] font-bold hover:bg-[#fbf389]!" href="mailto:medizintechnik@kaasen.de">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-10 6L2 7"></path>
              </svg>
              {"E-Mail schreiben"}
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-[6px] mb-[16px]">
            {(v.faqFilters || []).map((ff, index) => (
              <React.Fragment key={index}>
                <button className="p-[10px_16px] rounded-full text-[length:12.5px] font-bold cursor-pointer [transition:all_.2s_ease] tracking-[.02em]" onClick={ff?.select} style={{ border: `1px solid ${ff?.border ?? ""}`, background: ff?.bg, color: ff?.color }}>
                  {ff?.label}
                </button>
              </React.Fragment>
            ))}
          </div>
          {(v.faqs || []).map((f, index) => (
            <React.Fragment key={index}>
              <div className="rounded-[18px] bg-[#f7f4ec] mb-[10px] overflow-hidden">
                <button className="flex items-center justify-between gap-[18px] w-full p-[22px_24px] border-0 bg-transparent text-[#141c5c] [font:inherit] text-left text-[length:16px] font-bold cursor-pointer hover:text-[#3a4bb8]!" onClick={f?.toggle}>
                  {f?.q}{" "}
                  <span className="flex-none grid place-items-center w-[28px] h-[28px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:16px] font-extrabold">
                    {f?.sign}
                  </span>
                </button>
                <div className="overflow-hidden [transition:max-height_.38s_cubic-bezier(.22,.61,.36,1)]" style={{ maxHeight: f?.max }}>
                  <p className="m-0 p-[0_24px_22px] max-w-[42em] text-[length:14.5px] leading-[1.7] text-[color:rgba(40,40,40,.72)]">
                    {f?.a}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
