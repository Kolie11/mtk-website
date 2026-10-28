// Kontaktformular und Kontaktdaten
export default function Kontakt({ v }) {
  return (
    <section className="p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)]" id="kKontakt">
      <div className="k-kontakt-grid max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px] max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
        <div className="k-kontakt-card flex flex-col gap-[22px] p-[clamp(20px,3.6vw,48px)] rounded-[28px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] min-w-[0]">
          <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
            {"Kontakt"}
          </span>
          <h2 className="text-[length:clamp(26px,3.2vw,42px)] m-0">
            {"Wir antworten am gleichen Werktag."}
          </h2>
          <div className="k-form-grid grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-[12px] max-[800px]:grid-cols-[1fr]!">
            <input className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" placeholder="Name" />
            <input className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" placeholder="E-Mail" />
            <input className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" placeholder="Telefon" />
            <select className="w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] text-[color:rgba(40,40,40,.7)] box-border min-w-[0]">
              <option>
                {"Anliegen wählen…"}
              </option>
              <option>
                {"Milchpumpe mieten"}
              </option>
              <option>
                {"Beckenboden"}
              </option>
              <option>
                {"Rezept einreichen"}
              </option>
              <option>
                {"Kostenübernahme"}
              </option>
              <option>
                {"Fachpersonen · Demo"}
              </option>
              <option>
                {"Sonstiges"}
              </option>
            </select>
            <textarea className="col-[1/-1] w-full p-[15px_18px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[14px] bg-[#f7f4ec] text-[length:14px] [resize:vertical] box-border min-w-[0] focus:[outline:none]! focus:border-[color:#141c5c]! focus:bg-[#fff]!" rows="4" placeholder="Wie können wir helfen?"></textarea>
            <label className="col-[1/-1] flex gap-[10px] text-[length:12.5px] leading-[1.6] text-[color:rgba(40,40,40,.66)] flex-wrap">
              <input className="mt-[3px] [accent-color:#141c5c] w-auto flex-none" type="checkbox" />
              <span className="flex-1 min-w-[0]">
                {"Datenschutzerklärung gelesen und akzeptiert."}
              </span>
            </label>
            <button className="col-[1/-1] p-[16px_28px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer box-border hover:bg-[#282828]!">
              {"Absenden"}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex-1 relative min-h-[230px] rounded-[24px] overflow-hidden bg-[#e8ecf7]">
            <iframe className="absolute inset-0 w-full h-full border-0 z-[1]" title="Karte: Zum Gewerbepark 4, 44532 Lünen" src="https://maps.google.com/maps?q=Medizintechnik%20Kaasen%2C%20Zum%20Gewerbepark%204%2C%2044532%20L%C3%BCnen&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <svg className="absolute inset-0 w-full h-full opacity-[.35]" viewBox="0 0 400 200" aria-hidden="true" preserveAspectRatio="none">
              <path d="M50 40 Q120 90 60 140 T140 180" stroke="#141c5c" strokeWidth="1.4" fill="none"></path>
              <path d="M180 20 Q220 60 300 30 Q380 40 380 100" stroke="#141c5c" strokeWidth="1.4" fill="none"></path>
              <path d="M20 100 Q80 120 160 90 Q260 60 360 130" stroke="#141c5c" strokeWidth="1.4" fill="none"></path>
            </svg>
            <span className="absolute top-[50%] left-[50%] grid place-items-center w-[44px] h-[44px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:20px] [transform:translate(-50%,-50%)] shadow-[0_0_0_12px_rgba(251,243,137,.35)]">
              {"📍"}
            </span>
            <span className="absolute left-[16px] bottom-[14px] text-[length:10.5px] text-[color:rgba(20,28,92,.6)]" style={{ fontFamily: "ui-monospace,monospace" }}>
              {"Zum Gewerbepark 4, 44532 Lünen"}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-[16px] p-[clamp(24px,3vw,36px)] rounded-[24px] bg-[#141c5c] text-[#f7f4ec]">
            <span className="text-[length:11px] tracking-[.22em] uppercase text-[#a6b2ff]">
              {"Direkter Draht"}
            </span>
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[length:20px] text-[#f7f4ec] font-bold">
                {"Medizintechnik Kaasen GmbH"}
              </strong>
              <span className="text-[length:14.5px] text-[color:rgba(247,244,236,.7)]">
                {"Zum Gewerbepark 4, 44532 Lünen"}
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pt-[16px] [border-top:1px_solid_rgba(247,244,236,.14)] text-[length:15px]">
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
      </div>
    </section>
  );
}
