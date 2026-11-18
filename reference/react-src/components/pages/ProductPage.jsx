import React from 'react';

// Produktseite (#produkt/…) für Emy, Perifit, Apelvo …
export default function ProductPage({ v }) {
  return (
    <div className="order-[2]" style={{ display: v.productDisplay }}>
      <section className="p-[clamp(24px,3vw,40px)_clamp(16px,3vw,36px)_clamp(28px,3vw,44px)] overflow-hidden" id="p-top" style={{ background: v.pp?.bannerBg }}>
        <div className="max-w-[1280px] mx-auto my-0 flex flex-col gap-[clamp(22px,3vw,36px)]">
          <a className="self-start inline-flex items-center gap-[8px] text-[length:13px] font-semibold text-[#141c5c] hover:text-[#3a4bb8]!" href="#kProdukte">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <path d="M11 19l-7-7 7-7"></path>
            </svg>
            {"Alle Produkte"}
          </a>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-[clamp(24px,4vw,56px)] items-center">
            <div className="flex flex-col gap-[18px]">
              <span className="inline-flex items-center gap-[10px] p-[8px_16px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:11.5px] font-bold tracking-[.1em] uppercase w-[max-content]">
                {v.pp?.cat}
              </span>
              <h1 className="text-[length:clamp(38px,5.4vw,76px)] tracking-[-.025em] text-[#141c5c]">
                {v.pp?.name}
              </h1>
              <p className="m-0 max-w-[30em] text-[length:18px] leading-[1.6] text-[color:rgba(20,28,92,.82)]">
                {v.pp?.claim}
              </p>
              <div className="flex flex-wrap gap-[10px] mt-[4px]">
                <a className="inline-flex items-center gap-[10px] p-[14px_22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:14px] font-bold hover:bg-[#282828]!" href="#p-versorgung">
                  {"Als Kassenleistung erhalten"}
                </a>
                <a className="inline-flex items-center gap-[10px] p-[14px_22px] rounded-full bg-[#fff] text-[#141c5c] text-[length:14px] font-bold hover:bg-[#f7f4ec]!" href="#p-kontakt">
                  {"Beratung anfragen"}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-[12px_20px] mt-[6px] p-[16px_20px] rounded-[18px] bg-[color:rgba(255,255,255,.75)] [border:1px_solid_rgba(20,28,92,.1)] max-w-[34em] box-border">
                <span className="flex flex-col gap-[2px] flex-1 min-w-[150px]">
                  <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(20,28,92,.75)] font-bold">
                    {"Oder direkt kaufen"}
                  </span>
                  <strong className="text-[length:22px] text-[#141c5c] font-extrabold">
                    {v.pp?.priceLabel}
                  </strong>
                  <span className="text-[length:11.5px] leading-[1.5] text-[color:rgba(40,40,40,.72)]">
                    {"inkl. MwSt., zzgl. "}
                    <a className="text-[#141c5c] underline" href="#agb">
                      {"Versandkosten"}
                    </a>
                  </span>
                </span>
                <button className="inline-flex items-center gap-[8px] p-[13px_24px] [border:1.5px_solid_#141c5c] rounded-full bg-transparent text-[#141c5c] text-[length:14px] font-bold cursor-pointer hover:bg-[#141c5c]! hover:text-[#fbf389]!" onClick={v.buyNow}>
                  {"Kaufen"}
                </button>
                <span className="w-full text-[length:11.5px] leading-[1.5] text-[color:rgba(40,40,40,.68)]">
                  {"Es gelten unsere "}
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
            </div>
            <figure className="m-0 relative rounded-[32px] overflow-hidden aspect-[4/3] bg-[#fff] shadow-[0_40px_80px_-46px_rgba(20,28,92,.55)]">
              <img className="absolute inset-0 w-full h-full box-border block" src={v.pp?.img} alt={v.pp?.name} style={{ objectFit: v.pp?.fit, padding: v.pp?.pad }} />
            </figure>
          </div>
          <nav className="flex flex-wrap gap-[4px] p-[6px] rounded-full bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] self-start max-w-full">
            {(v.toc || []).map((tc, index) => (
              <React.Fragment key={index}>
                <a className="p-[9px_16px] rounded-full text-[length:13px] font-semibold text-[#141c5c] hover:bg-[#fbf389]!" href={tc?.href}>
                  {tc?.label}
                </a>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </section>
      <section className="[scroll-margin-top:90px] p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)]" id="p-kurz">
        <div className="max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(28px,4vw,60px)] items-start">
          <div className="flex flex-col gap-[18px]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
              {"Kurz erklärt"}
            </span>
            <h2 className="text-[length:clamp(28px,3.6vw,48px)]">
              {v.pp?.headline}
            </h2>
            <p className="m-0 max-w-[34em] text-[length:16.5px] leading-[1.75] text-[color:rgba(40,40,40,.72)]">
              {v.pp?.intro}
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {(v.pp?.features || []).map((ft, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-[16px] p-[20px_22px] rounded-[18px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)]">
                  <span className="flex-none grid place-items-center w-[36px] h-[36px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:14px] font-extrabold">
                    {ft?.n}
                  </span>
                  <strong className="text-[length:16.5px] leading-[1.4] text-[#141c5c] font-bold">
                    {ft?.t}
                  </strong>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="[scroll-margin-top:90px] p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)] bg-[#141c5c] text-[#f7f4ec]" id="p-funktion">
        <div className="max-w-[1280px] mx-auto my-0 flex flex-col gap-[clamp(28px,3vw,44px)]">
          <div className="flex flex-col gap-[14px] max-w-[44em]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#fbf389] font-bold">
              {v.pp?.funcKicker}
            </span>
            <h2 className="text-[length:clamp(28px,3.6vw,48px)] text-[#f7f4ec]">
              {v.pp?.funcTitle}
            </h2>
          </div>
          {v.pp?.smart && (
            <>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[clamp(16px,2vw,28px)]">
                {(v.pp?.screens || []).map((sc, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col gap-[16px]">
                      <div className="aspect-[9/16] max-h-[440px] rounded-[30px] [border:2px_solid_rgba(247,244,236,.18)] bg-[color:rgba(247,244,236,.06)] grid place-items-center p-[20px]">
                        <span className="text-[length:11px] tracking-[.16em] uppercase text-[color:rgba(247,244,236,.45)] font-bold text-center">
                          {"App-Screenshot folgt"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <strong className="text-[length:17px] text-[#fbf389] font-bold">
                          {sc?.t}
                        </strong>
                        <span className="text-[length:14.5px] leading-[1.6] text-[color:rgba(247,244,236,.75)]">
                          {sc?.d}
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
          {v.pp?.analog && (
            <>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[16px]">
                {(v.pp?.steps || []).map((stp, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col gap-[14px] p-[26px] rounded-[22px] bg-[color:rgba(247,244,236,.06)] [border:1px_solid_rgba(247,244,236,.14)]">
                      <span className="grid place-items-center w-[40px] h-[40px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:15px] font-extrabold">
                        {stp?.n}
                      </span>
                      <strong className="text-[length:18px] text-[#f7f4ec] font-bold">
                        {stp?.t}
                      </strong>
                      <span className="text-[length:14.5px] leading-[1.65] text-[color:rgba(247,244,236,.75)]">
                        {stp?.d}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="[scroll-margin-top:90px] p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)]" id="p-eignung">
        <div className="max-w-[1280px] mx-auto my-0 flex flex-col gap-[clamp(24px,3vw,40px)]">
          <div className="flex flex-col gap-[14px]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
              {"Eignung"}
            </span>
            <h2 className="text-[length:clamp(28px,3.6vw,48px)]">
              {"Für wen ist "}{v.pp?.name}{" geeignet?"}
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[14px]">
            {(v.pp?.fits || []).map((fi, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-[10px] p-[26px] rounded-[22px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)]">
                  <strong className="text-[length:18px] leading-[1.3] text-[#141c5c] font-bold">
                    {fi?.t}
                  </strong>
                  <span className="text-[length:14.5px] leading-[1.65] text-[color:rgba(40,40,40,.7)]">
                    {fi?.d}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="[scroll-margin-top:90px] p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)] bg-[#a6b2ff]" id="p-versorgung">
        <div className="max-w-[1280px] mx-auto my-0 flex flex-col gap-[clamp(24px,3vw,40px)]">
          <div className="flex flex-col gap-[14px]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#141c5c] font-bold">
              {"So funktioniert die Versorgung"}
            </span>
            <h2 className="text-[length:clamp(28px,3.6vw,48px)]">
              {"So erhalten Sie "}{v.pp?.name}{" als Kassenleistung."}
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-[12px]">
            {(v.careSteps || []).map((cs, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-[12px] p-[24px] rounded-[22px] bg-[#f7f4ec]">
                  <span className="flex items-center justify-between gap-[10px]">
                    <span className="grid place-items-center w-[40px] h-[40px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-extrabold">
                      {cs?.n}
                    </span>
                    {cs?.arrow && (
                      <>
                        <svg className="opacity-[.4]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#141c5c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M13 5l7 7-7 7"></path>
                        </svg>
                      </>
                    )}
                  </span>
                  <strong className="text-[length:17px] leading-[1.3] text-[#141c5c] font-bold">
                    {cs?.t}
                  </strong>
                  <span className="text-[length:14px] leading-[1.6] text-[color:rgba(40,40,40,.72)]">
                    {cs?.d}
                  </span>
                  {cs?.hasLink && (
                    <>
                      <a className="self-start mt-[auto] text-[length:13.5px] font-bold text-[#141c5c] underline" href="#kRezept">
                        {"Jetzt hochladen"}
                      </a>
                    </>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="p-rz grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1.6fr)] gap-[clamp(16px,2.4vw,32px)] items-center p-[clamp(20px,2.4vw,28px)] rounded-[22px] bg-[#fff]">
            <span className="grid place-items-center w-[64px] h-[64px] rounded-[16px] [border:2px_solid_#141c5c] text-[#141c5c] text-[length:20px] font-extrabold" title="Piktogramm-Platzhalter">
              {"RZ"}
            </span>
            <span className="flex flex-col gap-[4px]">
              <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(40,40,40,.6)] font-semibold">
                {"Hilfsmittelnummer"}
              </span>
              <strong className="text-[length:17px] text-[#141c5c] font-bold">
                {v.pp?.hmv}
              </strong>
            </span>
            <span className="flex flex-col gap-[4px]">
              <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(40,40,40,.6)] font-semibold">
                {"Beispieldiagnosen"}
              </span>
              <span className="text-[length:15px] leading-[1.5] text-[#282828]">
                {v.pp?.diagnoses}
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className="[scroll-margin-top:90px] p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)]" id="p-kontakt">
        <div className="k-kontakt-grid max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px] max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
          <div className="k-kontakt-card flex flex-col gap-[20px] p-[clamp(20px,3.6vw,44px)] rounded-[28px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] min-w-[0]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
              {"Kontakt"}
            </span>
            <h2 className="text-[length:clamp(26px,3.2vw,40px)] m-0">
              {"Fragen zu "}{v.pp?.name}{"?"}
            </h2>
            <div className="k-form-grid grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-[12px] max-[800px]:grid-cols-[1fr]!">
              <label className="col-[1/-1] flex flex-col gap-[6px]">
                <span className="text-[length:12px] text-[#141c5c] font-semibold">
                  {"Produkt"}
                </span>
                <select className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] font-semibold text-[#141c5c] box-border min-w-[0] cursor-pointer" value={v.contactProduct} onChange={v.setContactProduct}>
                  {(v.productNames || []).map((pn, index) => (
                    <React.Fragment key={index}>
                      <option value={pn}>
                        {pn}
                      </option>
                    </React.Fragment>
                  ))}
                </select>
              </label>
              <input className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" placeholder="Name" />
              <input className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" placeholder="E-Mail oder Telefon" />
              <textarea className="col-[1/-1] w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] [resize:vertical] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" rows="3" placeholder="Ihre Nachricht (optional)"></textarea>
              <label className="col-[1/-1] flex gap-[10px] text-[length:12.5px] leading-[1.6] text-[color:rgba(40,40,40,.66)]">
                <input className="mt-[3px] [accent-color:#141c5c] w-auto flex-none" type="checkbox" />
                <span className="flex-1 min-w-[0]">
                  {"Datenschutzerklärung gelesen und akzeptiert."}
                </span>
              </label>
              <button className="col-[1/-1] p-[16px_28px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer box-border hover:bg-[#282828]!">
                {"Kontakt anfragen"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex-1 relative min-h-[230px] rounded-[24px] overflow-hidden bg-[#e8ecf7]">
              <iframe className="absolute inset-0 w-full h-full border-0 z-[1]" title="Karte: Zum Gewerbepark 4, 44532 Lünen" src="https://maps.google.com/maps?q=Medizintechnik%20Kaasen%2C%20Zum%20Gewerbepark%204%2C%2044532%20L%C3%BCnen&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <span className="absolute top-[50%] left-[50%] grid place-items-center w-[44px] h-[44px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:20px] [transform:translate(-50%,-50%)] shadow-[0_0_0_12px_rgba(251,243,137,.35)]">
                {"📍"}
              </span>
              <span className="absolute left-[16px] bottom-[14px] text-[length:10.5px] text-[color:rgba(20,28,92,.6)]" style={{ fontFamily: "ui-monospace,monospace" }}>
                {"Zum Gewerbepark 4, 44532 Lünen"}
              </span>
            </div>
            <div className="flex flex-col gap-[10px] p-[clamp(22px,2.6vw,32px)] rounded-[24px] bg-[#141c5c] text-[#f7f4ec] text-[length:15px]">
              <span className="text-[length:11px] tracking-[.22em] uppercase text-[#a6b2ff]">
                {"Direkter Draht"}
              </span>
              <a className="text-[#fbf389]" href="tel:+492306306090">
                {"+49 2306 30609-0"}
              </a>
              <a className="text-[#fbf389]" href="mailto:medizintechnik@kaasen.de">
                {"medizintechnik@kaasen.de"}
              </a>
              <span className="text-[color:rgba(247,244,236,.65)] text-[length:13.5px]">
                {"Mo–Do 8:00–17:00 Uhr · Fr 8:00–16:00 Uhr"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="[scroll-margin-top:90px] p-[0_clamp(16px,3vw,36px)_clamp(48px,6vw,90px)]" id="p-faq">
        <div className="max-w-[880px] mx-auto my-0 flex flex-col gap-[clamp(20px,2.4vw,32px)]">
          <div className="flex flex-col gap-[14px]">
            <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
              {"FAQ"}
            </span>
            <h2 className="text-[length:clamp(26px,3.2vw,42px)]">
              {"Häufige Fragen zu "}{v.pp?.name}
            </h2>
          </div>
          <div>
            {(v.pFaqs || []).map((f, index) => (
              <React.Fragment key={index}>
                <div className="rounded-[18px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] mb-[10px] overflow-hidden">
                  <button className="flex items-center justify-between gap-[18px] w-full p-[22px_24px] border-0 bg-transparent text-[#141c5c] [font:inherit] text-left text-[length:16px] font-bold cursor-pointer hover:text-[#3a4bb8]!" onClick={f?.toggle}>
                    {f?.q}
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
    </div>
  );
}
