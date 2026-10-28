import React from 'react';

// Rezept einreichen: Formular, gelistete / nicht gelistete Hilfsmittel
export default function RezeptUpload({ v }) {
  return (
    <section className="p-[clamp(48px,6vw,84px)_clamp(16px,3vw,36px)] bg-[#141c5c] text-[#f7f4ec] relative overflow-hidden" id="kRezept">
      <svg className="absolute top-0 left-0 w-full h-[80px] opacity-[.35]" viewBox="0 0 1400 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 175 0, 350 80, 525 40 S 875 0, 1050 40 S 1400 80, 1400 40" stroke="#fbf389" strokeWidth="1.5" fill="none"></path>
      </svg>
      <div className="relative max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(28px,4vw,56px)] items-center max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
        <div className="flex flex-col gap-[20px]">
          <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#fbf389] font-bold">
            {"Rezept einreichen"}
          </span>
          <h2 className="text-[length:clamp(30px,4vw,54px)] text-[#f7f4ec]">
            {"Rezept für Hilfsmittel — digital hochladen."}
          </h2>
          <p className="m-0 max-w-[34em] text-[length:16.5px] leading-[1.7] text-[color:rgba(247,244,236,.78)]">
            {"Übermitteln Sie Ihre ärztliche Verordnung für Emy, Perifit Care+, Apelvo, restifem oder Emagina bequem digital. So sparen Sie Zeit und wir bearbeiten Ihren Antrag schneller."}
          </p>
          <div className="m-0 max-w-[34em] p-[16px_18px] [border-left:3px_solid_#fbf389] bg-[color:rgba(251,243,137,.08)] rounded-[0_12px_12px_0]">
            <strong className="block text-[#fbf389] text-[length:13px] tracking-[.06em] uppercase mb-[6px]">
              {"Nicht für Milchpumpen"}
            </strong>
            <span className="text-[length:14.5px] leading-[1.65] text-[color:rgba(247,244,236,.86)]">
              {"Milchpumpen-Rezepte benötigen wir im Original — bitte nutzen Sie die "}
              <a className="text-[#fbf389] underline" href="#kMilchpumpe">
                {"Onlinebestellung Milchpumpe"}
              </a>
              {". Für Rezept-Status & Verlängerung: "}
              <a className="text-[#fbf389] underline" href="https://rezept.kaasen.de">
                {"rezept.kaasen.de"}
              </a>
              {"."}
            </span>
          </div>
          <div className="flex flex-col gap-[10px] mt-[4px]">
            <span className="text-[length:11.5px] tracking-[.14em] uppercase text-[#f7f4ec] font-bold">
              {"Mögliche Kassenleistung"}
            </span>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-[10px]">
              <div className="flex flex-col gap-[10px] p-[16px_18px] rounded-[16px] bg-[color:rgba(247,244,236,.07)] [border:1px_solid_rgba(247,244,236,.18)]">
                <span className="flex items-center gap-[8px] text-[length:11.5px] tracking-[.14em] uppercase text-[#fbf389] font-bold">
                  <span className="block w-[8px] h-[8px] rounded-full bg-[#fbf389]"></span>
                  {"Gelistete Hilfsmittel"}
                </span>
                <div className="flex flex-wrap gap-[6px]">
                  {(v.rezListed || []).map((rp, index) => (
                    <React.Fragment key={index}>
                      <span className="p-[6px_12px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:12.5px] font-bold">
                        {rp}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[10px] p-[16px_18px] rounded-[16px] bg-[color:rgba(247,244,236,.07)] [border:1px_solid_rgba(247,244,236,.18)]">
                <span className="flex items-center gap-[8px] text-[length:11.5px] tracking-[.14em] uppercase text-[#a6b2ff] font-bold">
                  <span className="block w-[8px] h-[8px] rounded-full [border:2px_solid_#a6b2ff] box-border"></span>
                  {"Nicht gelistete Hilfsmittel"}
                </span>
                <div className="flex flex-wrap gap-[6px]">
                  {(v.rezUnlisted || []).map((rp, index) => (
                    <React.Fragment key={index}>
                      <span className="p-[5px_11px] rounded-full [border:1.5px_solid_#a6b2ff] text-[#f7f4ec] text-[length:12.5px] font-semibold">
                        {rp}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] p-[16px_18px] rounded-[16px] [border:1px_dashed_rgba(247,244,236,.3)]">
              <span className="flex items-center gap-[8px] text-[length:11.5px] tracking-[.14em] uppercase text-[#f7f4ec] font-bold">
                <span className="block w-[8px] h-[8px] rounded-[2px] bg-[#f7f4ec]"></span>
                {"Ausschließlich Verkauf"}
              </span>
              <span className="text-[length:13.5px] leading-[1.55] text-[color:rgba(247,244,236,.86)]">
                {"Alle Produkte, die nicht unter gelistete oder nicht gelistete Hilfsmittel fallen, werden nicht von der Krankenkasse übernommen."}
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {(v.rezSale || []).map((rp, index) => (
                  <React.Fragment key={index}>
                    <span className="p-[5px_11px] rounded-full bg-[color:rgba(247,244,236,.12)] text-[#f7f4ec] text-[length:12.5px] font-semibold">
                      {rp}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="rounded-[16px] bg-[color:rgba(247,244,236,.05)] [border:1px_solid_rgba(247,244,236,.14)] overflow-hidden">
              <button className="flex items-center justify-between gap-[14px] w-full p-[14px_18px] border-0 bg-transparent text-[#f7f4ec] [font:inherit] text-[length:14px] font-bold text-left cursor-pointer hover:text-[#fbf389]!" onClick={v.toggleRezInfo}>
                {"Was heißt das?"}
                <span className="flex-none grid place-items-center w-[24px] h-[24px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:14px] font-extrabold">
                  {v.rezInfoSign}
                </span>
              </button>
              <div className="overflow-hidden [transition:max-height_.38s_cubic-bezier(.22,.61,.36,1)]" style={{ maxHeight: v.rezInfoMax }}>
                <div className="flex flex-col gap-[10px] p-[0_18px_16px] text-[length:14px] leading-[1.6] text-[color:rgba(247,244,236,.86)]">
                  <span>
                    <strong className="text-[#fbf389]">
                      {"Gelistet:"}
                    </strong>
                    {" Das Hilfsmittel steht im Hilfsmittelverzeichnis der Krankenkassen. Mit Rezept wird es mit hoher Wahrscheinlichkeit übernommen."}
                  </span>
                  <span>
                    <strong className="text-[#a6b2ff]">
                      {"Nicht gelistet:"}
                    </strong>
                    {" Kann ärztlich verordnet werden. Ob die Krankenkasse die Kosten übernimmt, ist fraglich — wir prüfen das für Sie."}
                  </span>
                  <span>
                    <strong className="text-[#f7f4ec]">
                      {"Ausschließlich Verkauf:"}
                    </strong>
                    {" Alle Produkte, die nicht unter gelistete oder nicht gelistete Hilfsmittel fallen, werden nicht von der Krankenkasse übernommen. Sie können sie direkt bei uns kaufen."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="k-rezept-chips hidden flex-wrap gap-[6px] mt-[4px]">
            <span className="text-[length:11.5px] tracking-[.14em] uppercase text-[color:rgba(247,244,236,.55)] w-full mb-[4px]">
              {"Rezept einreichbar für:"}
            </span>
            {(v.rezProducts || []).map((rp, index) => (
              <React.Fragment key={index}>
                <span className="p-[6px_12px] [border:1px_solid_rgba(247,244,236,.2)] rounded-full text-[length:12.5px] font-semibold text-[#f7f4ec]">
                  {rp}
                </span>
              </React.Fragment>
            ))}
          </div>
          <ul className="m-0 p-0 list-none flex flex-col gap-[10px] text-[length:15px]">
            {(v.rezSteps || []).map((r, index) => (
              <React.Fragment key={index}>
                <li className="flex items-start gap-[12px]">
                  <span className="flex-none grid place-items-center w-[22px] h-[22px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:12px] font-extrabold">
                    {"✓"}
                  </span>
                  <span className="text-[color:rgba(247,244,236,.86)]">
                    {r}
                  </span>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <span className="max-w-[34em] text-[length:13px] leading-[1.6] text-[color:rgba(247,244,236,.6)]">
            {"Das Originalrezept benötigen wir zusätzlich per Post — der digitale Upload beschleunigt die Vorbereitung. Rezepte per Fax können wir leider nicht bearbeiten."}
          </span>
        </div>
        <div className="flex flex-col gap-[14px] p-[clamp(24px,3vw,36px)] rounded-[26px] bg-[#f7f4ec] text-[#282828] shadow-[0_40px_80px_-50px_rgba(0,0,0,.7)]">
          <div className="flex flex-col gap-[6px]">
            <span className="text-[length:11px] tracking-[.14em] uppercase text-[#3a4bb8] font-bold">
              {"Schritt 1 von 2 · Ihre Angaben"}
            </span>
            <strong className="text-[length:18px] text-[#141c5c]">
              {"Rezept einreichen"}
            </strong>
            <span className="text-[length:13px] leading-[1.55] text-[color:rgba(40,40,40,.68)]">
              {"Im nächsten Schritt leiten wir Sie auf unsere Nextcloud-Seite weiter — dort laden Sie das Rezept hoch."}
            </span>
          </div>
          <div className="k-rezept-grid grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[10px]">
            <label className="col-[span_2] flex flex-col gap-[4px] max-[1024px]:col-[1/-1]!">
              <span className="text-[length:12px] text-[#141c5c] font-semibold">
                {"Für welches Produkt? "}
                <span className="text-[#c93838]">
                  {"*"}
                </span>
              </span>
              <select className="p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] text-[#282828] cursor-pointer focus:[outline:none]! focus:border-[color:#141c5c]!" required={true}>
                <option value="">
                  {"Bitte wählen …"}
                </option>
                {(v.rezProducts || []).map((rp, index) => (
                  <React.Fragment key={index}>
                    <option value={rp}>
                      {rp}
                    </option>
                  </React.Fragment>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-[4px]">
              <span className="text-[length:12px] text-[#141c5c] font-semibold">
                {"Vorname"}
              </span>
              <input className="p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] focus:[outline:none]! focus:border-[color:#141c5c]!" placeholder="Vorname" />
            </label>
            <label className="flex flex-col gap-[4px]">
              <span className="text-[length:12px] text-[#141c5c] font-semibold">
                {"Name "}
                <span className="text-[#c93838]">
                  {"*"}
                </span>
              </span>
              <input className="p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] focus:[outline:none]! focus:border-[color:#141c5c]!" required={true} placeholder="Name" />
            </label>
            <label className="flex flex-col gap-[4px]">
              <span className="text-[length:12px] text-[#141c5c] font-semibold">
                {"E-Mail "}
                <span className="text-[#c93838]">
                  {"*"}
                </span>
              </span>
              <input className="p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] focus:[outline:none]! focus:border-[color:#141c5c]!" required={true} type="email" placeholder="E-Mail" />
            </label>
            <label className="flex flex-col gap-[4px]">
              <span className="text-[length:12px] text-[#141c5c] font-semibold">
                {"Telefon "}
                <span className="text-[#c93838]">
                  {"*"}
                </span>
              </span>
              <input className="p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] focus:[outline:none]! focus:border-[color:#141c5c]!" required={true} type="tel" placeholder="Telefon" />
            </label>
            <label className="col-[span_2] flex flex-col gap-[4px] max-[1024px]:col-[1/-1]!">
              <span className="text-[length:12px] text-[#141c5c] font-semibold">
                {"Nachricht"}
              </span>
              <textarea className="p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] [resize:vertical] focus:[outline:none]! focus:border-[color:#141c5c]!" rows="2" placeholder="Fragen oder alternative Lieferadresse (optional)"></textarea>
            </label>
          </div>
          <label className="flex gap-[10px] text-[length:12px] leading-[1.55] text-[color:rgba(40,40,40,.75)]">
            <input className="mt-[3px] [accent-color:#141c5c] flex-none" type="checkbox" required={true} />
            <span>
              {"Ich habe die "}
              <a className="text-[#141c5c] underline" href="#datenschutz">
                {"Datenschutzerklärung"}
              </a>
              {" gelesen und stimme der elektronischen Verarbeitung meiner Angaben zu. Widerruf jederzeit an medizintechnik@kaasen.de."}
            </span>
          </label>
          <label className="flex gap-[10px] text-[length:12px] leading-[1.55] text-[color:rgba(40,40,40,.75)]">
            <input className="mt-[3px] [accent-color:#141c5c] flex-none" type="checkbox" required={true} />
            <span>
              {"Kaasen darf mit meinen Angaben den Kostenvoranschlag bei meiner Krankenkasse einreichen."}
            </span>
          </label>
          <button className="flex items-center justify-center gap-[10px] p-[16px_24px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer hover:bg-[#282828]!" onClick={v.goUpload}>
            {"Weiter zum Rezept-Upload"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M13 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="flex flex-wrap gap-[8px_14px] justify-center items-center">
            <span className="text-[length:12.5px] text-[color:rgba(40,40,40,.6)]">
              {"Lieber persönlich?"}
            </span>
            <a className="inline-flex items-center gap-[8px] text-[length:14px] font-bold text-[#141c5c] min-w-[0] overflow-hidden [text-overflow:ellipsis] whitespace-nowrap hover:text-[#3a4bb8]!" href="tel:+492306306090">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2L8 9.6a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2-.5 13 13 0 0 0 2.7.6 2 2 0 0 1 1.7 2z"></path>
              </svg>
              {"02306 30609-0"}
            </a>
            <span className="text-[color:rgba(40,40,40,.3)]">
              {"·"}
            </span>
            <a className="inline-flex items-center gap-[8px] text-[length:14px] font-bold text-[#141c5c] min-w-[0] overflow-hidden [text-overflow:ellipsis] whitespace-nowrap hover:text-[#3a4bb8]!" href="mailto:medizintechnik@kaasen.de">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-10 6L2 7"></path>
              </svg>
              {"E-Mail"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
