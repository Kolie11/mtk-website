import React from 'react';

// Onlinebestellung Leih-Milchpumpe (aufklappbar, mit Hinweisen und Formular)
export default function MilchpumpeBestellung({ v }) {
  return (
    <section className="p-[clamp(48px,6vw,84px)_clamp(16px,3vw,36px)] bg-[#f7f4ec] text-[#282828]" id="kMilchpumpe">
      <div className="max-w-[1240px] mx-auto my-0 flex flex-wrap items-end justify-between gap-[24px_40px]">
        <div className="flex flex-col gap-[14px] flex-[1_1_520px] min-w-[0]">
          <span className="text-[length:11px] tracking-[.2em] uppercase text-[#3a4bb8] font-bold">
            {"Leih-Milchpumpe · Onlinebestellung"}
          </span>
          <h2 className="text-[length:clamp(32px,4vw,54px)] leading-[1.08] m-0 text-[#141c5c]">
            {"Klinik-Milchpumpe "}
            <em className="italic text-[#3a4bb8]">
              {"für zuhause"}
            </em>
            {"."}
          </h2>
          <div className="flex flex-wrap gap-[8px]">
            <span className="flex items-center gap-[8px] p-[8px_14px] rounded-full bg-[#fff] [border:1px_solid_rgba(20,28,92,.1)] text-[length:13.5px] text-[#141c5c] font-semibold">
              <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:11px] font-extrabold">
                {"1"}
              </span>
              {"Formular ausfüllen"}
            </span>
            <span className="flex items-center gap-[8px] p-[8px_14px] rounded-full bg-[#fff] [border:1px_solid_rgba(20,28,92,.1)] text-[length:13.5px] text-[#141c5c] font-semibold">
              <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:11px] font-extrabold">
                {"2"}
              </span>
              {"Bestätigung per Mail"}
            </span>
            <span className="flex items-center gap-[8px] p-[8px_14px] rounded-full bg-[#fff] [border:1px_solid_rgba(20,28,92,.1)] text-[length:13.5px] text-[#141c5c] font-semibold">
              <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:11px] font-extrabold">
                {"3"}
              </span>
              {"Liefertermin per Telefon"}
            </span>
          </div>
        </div>
        <button className="flex-none flex items-center gap-[12px] p-[16px_26px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer [transition:background_.2s] hover:bg-[#282828]!" type="button" onClick={v.mpToggle} aria-expanded={v.mpOpen} aria-controls="kMilchpumpeBody">
          <span>
            {v.mpBtn}
          </span>
          <svg className="[transition:transform_.45s_cubic-bezier(.2,.7,.2,1)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${v.mpRot ?? ""})` }}>
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
      </div>
      <div className="grid [transition:grid-template-rows_.65s_cubic-bezier(.2,.7,.2,1)]" id="kMilchpumpeBody" style={{ gridTemplateRows: v.mpRows }}>
        <div className="min-h-[0] overflow-hidden">
          <div className="pt-[clamp(28px,4vw,44px)] [transition:opacity_.45s_ease_.12s,transform_.6s_cubic-bezier(.2,.7,.2,1)_.08s]" style={{ opacity: v.mpOp, transform: `translateY(${v.mpY ?? ""})` }}>
            <div className="max-w-[1240px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(24px,4vw,56px)] items-start max-[800px]:w-full! max-[800px]:h-auto! max-[800px]:min-h-[260px]!">
              <div className="flex flex-col gap-[16px]">
                <p className="m-0 text-[length:16px] leading-[1.7] text-[color:rgba(40,40,40,.78)] text-pretty">
                  {"Die Bestellung läuft ganz einfach: Formular ausfüllen und absenden. Nach dem Absenden prüfen wir Ihre Angaben und geben die Bestellung an unseren Außendienst weiter. Gleichzeitig erhalten Sie eine Bestätigung per Mail. Der Außendienst meldet sich telefonisch, um einen Liefertermin mit Ihnen zu vereinbaren."}
                </p>
                <div className="p-[14px_18px] rounded-[14px] bg-[#141c5c] text-[#f7f4ec] text-[length:14px] leading-[1.6]">
                  <strong className="text-[#fbf389]">
                    {"Wichtig:"}
                  </strong>
                  {" Bitte immer die Daten der Mutter eintragen – auch wenn jemand anderes bestellt. Eine abweichende Lieferadresse oder Telefonnummer kann im Nachrichtenfeld angegeben werden."}
                </div>
                <div className="flex flex-col gap-[8px] text-[length:14.5px] leading-[1.6] text-[color:rgba(40,40,40,.82)]">
                  <span>
                    {"Unsere Bestätigung erhalten Sie üblicherweise innerhalb einiger Minuten, spätestens aber in diesen Zeitfenstern:"}
                  </span>
                  <span>
                    <strong className="text-[#141c5c]">
                      {"Unter der Woche 9:00–17:00 Uhr:"}
                    </strong>
                    {" innerhalb von 30 Minuten"}
                  </span>
                  <span>
                    <strong className="text-[#141c5c]">
                      {"Am Wochenende/an Feiertagen 9:00–16:00 Uhr:"}
                    </strong>
                    {" innerhalb einer Stunde"}
                  </span>
                  <span>
                    <strong className="text-[#141c5c]">
                      {"Nach 17:00 Uhr (werktags) oder nach 16:00 Uhr (Wochenende/Feiertage):"}
                    </strong>
                    {" am nächsten Morgen bis 9:00 Uhr"}
                  </span>
                </div>
                <div className="flex flex-col [border:1px_solid_rgba(20,28,92,.12)] rounded-[16px] bg-[#fff] overflow-hidden">
                  <strong className="p-[14px_18px] text-[length:12px] tracking-[.14em] uppercase text-[#3a4bb8]">
                    {"Hinweise"}
                  </strong>
                  <details className="[border-top:1px_solid_rgba(20,28,92,.1)]" name="mpHinweise" open={true}>
                    <summary className="p-[14px_18px] cursor-pointer text-[length:14.5px] font-bold text-[#141c5c]">
                      {"Kostenübernahme durch Ihre Krankenkasse"}
                    </summary>
                    <div className="flex flex-col gap-[10px] p-[0_18px_16px] text-[length:13.5px] leading-[1.65] text-[color:rgba(40,40,40,.8)]">
                      <span>
                        <strong className="text-[#141c5c]">
                          {"Gesetzlich versichert?"}
                        </strong>
                        {" Wir rechnen direkt mit Ihrer Krankenkasse ab – Sie brauchen nur die Verordnung (Rezept). Die Erstverordnung stellt oft die Klinik aus, Folgerezepte gibt’s bei:"}
                      </span>
                      <ul className="m-0 pl-[18px]">
                        <li>
                          {"Frauenärzt:innen"}
                        </li>
                        <li>
                          {"Kinderärzt:innen"}
                        </li>
                        <li>
                          {"Hausärzt:innen"}
                        </li>
                      </ul>
                      <span>
                        <strong className="text-[#141c5c]">
                          {"Wichtig:"}
                        </strong>
                        {" Um Kosten für Sie zu vermeiden, muss die Mietzeit durchgehend mit Rezepten abgedeckt sein. Wir erinnern Sie automatisch 7 Tage vor Ablauf eines Rezepts per Mail und bestätigen den Eingang jedes neuen Rezepts samt Laufzeit."}
                      </span>
                      <span>
                        <strong className="text-[#141c5c]">
                          {"Privat versichert?"}
                        </strong>
                        {" Sie erhalten nach Rückgabe der Pumpe eine Rechnung zur Einreichung bei Ihrer Kasse. Achten Sie bitte ebenfalls auf eine lückenlose Abdeckung der gesamten Mietzeit durch Rezepte."}
                      </span>
                    </div>
                  </details>
                  <details className="[border-top:1px_solid_rgba(20,28,92,.1)]" name="mpHinweise">
                    <summary className="p-[14px_18px] cursor-pointer text-[length:14.5px] font-bold text-[#141c5c]">
                      {"Zubehör – das ist dabei"}
                    </summary>
                    <div className="flex flex-col gap-[10px] p-[0_18px_16px] text-[length:13.5px] leading-[1.65] text-[color:rgba(40,40,40,.8)]">
                      <span>
                        {"Die meisten gesetzlichen Krankenkassen sehen ein Zubehörset als ausreichend an. Wir liefern dennoch zwei Sets – denn viele Stillberatungen, Hebammen und auch Familien wünschen das zweite Set."}
                      </span>
                      <strong className="text-[#141c5c]">
                        {"Gut zu wissen:"}
                      </strong>
                      <ul className="m-0 pl-[18px] flex flex-col gap-[6px]">
                        <li>
                          {"Ist das zweite Set originalverpackt, können Sie es kostenlos zurückgeben."}
                        </li>
                        <li>
                          {"Ist es geöffnet, berechnen wir dafür 28,90 € privat."}
                        </li>
                        <li>
                          {"Standardmäßig liefern wir Brusthauben in Größe M – wenn Sie eine andere Größe benötigen, tragen Sie diese bitte im Textfeld bei der Bestellung ein."}
                        </li>
                        <li>
                          {"Die Kostenübernahme für Brusthauben ist je nach Kasse unterschiedlich geregelt – manche übernehmen die Kosten vollständig, maximal können 13,80 € anfallen."}
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className="[border-top:1px_solid_rgba(20,28,92,.1)]" name="mpHinweise">
                    <summary className="p-[14px_18px] cursor-pointer text-[length:14.5px] font-bold text-[#141c5c]">
                      {"Kaution"}
                    </summary>
                    <span className="block p-[0_18px_16px] text-[length:13.5px] leading-[1.65] text-[color:rgba(40,40,40,.8)]">
                      {"Für die Ausleihe der Pumpe erheben wir eine Kaution in Höhe von 50 €. Diese überweisen Sie ganz bequem – alle Informationen dazu finden Sie in Ihrer Bestellbestätigung. Nach Rückgabe der Pumpe und Abschluss der Prüfung erstatten wir Ihnen die Kaution vollständig zurück, sofern keine offenen Kosten entstanden sind."}
                    </span>
                  </details>
                  <details className="[border-top:1px_solid_rgba(20,28,92,.1)]" name="mpHinweise">
                    <summary className="p-[14px_18px] cursor-pointer text-[length:14.5px] font-bold text-[#141c5c]">
                      {"Rückgabe"}
                    </summary>
                    <span className="block p-[0_18px_16px] text-[length:13.5px] leading-[1.65] text-[color:rgba(40,40,40,.8)]">
                      <strong className="text-[#141c5c]">
                        {"Rückgabe leicht gemacht:"}
                      </strong>
                      {" Sie schicken die Pumpe einfach zurück – das Porto übernehmen Sie. Wir stellen Ihnen einen DHL-QR-Code zur Verfügung für den einfachen Versand oder zur Paketabholung."}
                      <br />
                      <br />
                      {"Je nach Region kann die Pumpe auch zurückgebracht oder neben dem Lieferdienst abgeholt werden. Sprechen Sie dafür einfach unsere Mitarbeitenden vor Ort an."}
                    </span>
                  </details>
                </div>
                <span className="text-[length:13.5px] text-[color:rgba(40,40,40,.75)]">
                  {"Noch Fragen? Unser Außendienst ist gern für Sie da, wenn er sich zur Absprache der Lieferung meldet – oder rufen Sie uns an: "}
                  <a className="text-[#141c5c] underline" href="tel:+492306306090">
                    {"02306 – 306090"}
                  </a>
                </span>
              </div>
              <div className="p-[clamp(20px,3vw,32px)] rounded-[24px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] shadow-[0_20px_50px_-30px_rgba(20,28,92,.35)]">
                {v.mpForm && (
                  <>
                    <div className="flex flex-col gap-[16px]">
                      <h3 className="m-0 text-[length:22px] text-[#141c5c]">
                        {"Bestellformular"}
                      </h3>
                      <span className="mt-[-10px] text-[length:12.5px] text-[color:rgba(40,40,40,.65)]">
                        {"* Pflichtfelder"}
                      </span>
                      <div className="k-form-grid grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[12px]">
                        {(v.mpFields || []).map((mf, index) => (
                          <React.Fragment key={index}>
                            <label className="flex flex-col gap-[6px] text-[length:12px] font-bold tracking-[.06em] uppercase text-[#141c5c] min-w-[0]">
                              {mf?.l}
                              <input className="w-full p-[13px_16px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] [font:inherit] text-[length:14.5px] text-[#282828] box-border min-w-[0]" type={mf?.t} />
                            </label>
                          </React.Fragment>
                        ))}
                        <div className="col-[1/-1] flex flex-wrap gap-[8px_18px] text-[length:14px] text-[#282828]">
                          <span className="w-full text-[length:12px] font-bold tracking-[.06em] uppercase text-[#141c5c]">
                            {"Aufenthalt"}
                          </span>
                          <label className="flex gap-[8px] items-center">
                            <input type="radio" name="mpOrt" />
                            {"entlassen"}
                          </label>
                          <label className="flex gap-[8px] items-center">
                            <input type="radio" name="mpOrt" />
                            {"noch im Krankenhaus"}
                          </label>
                        </div>
                        {(v.mpFields2 || []).map((mf, index) => (
                          <React.Fragment key={index}>
                            <label className="flex flex-col gap-[6px] text-[length:12px] font-bold tracking-[.06em] uppercase text-[#141c5c] min-w-[0]">
                              {mf?.l}
                              <input className="w-full p-[13px_16px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] [font:inherit] text-[length:14.5px] text-[#282828] box-border min-w-[0]" type={mf?.t} />
                            </label>
                          </React.Fragment>
                        ))}
                        <label className="col-[1/-1] flex flex-col gap-[6px] text-[length:12px] font-bold tracking-[.06em] uppercase text-[#141c5c] min-w-[0]">
                          {"Hinweis zur Lieferung"}
                          <textarea className="w-full p-[13px_16px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] [font:inherit] text-[length:14.5px] text-[#282828] box-border min-w-[0] [resize:vertical]" rows="3" placeholder="Besonderer Hinweis für die Lieferung (z. B. Brusthaubengröße, abweichende Lieferadresse u. a.)"></textarea>
                        </label>
                      </div>
                      <label className="flex gap-[10px] items-start text-[length:13px] leading-[1.55] text-[color:rgba(40,40,40,.8)]">
                        <input className="mt-[3px] flex-none" type="checkbox" />
                        <span>
                          {"Ich habe die "}
                          <a className="text-[#141c5c] underline" href="#datenschutz">
                            {"Datenschutzerklärung"}
                          </a>
                          {" zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an medizintechnik@kaasen.de widerrufen."}
                        </span>
                      </label>
                      <button className="self-start p-[15px_28px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer hover:bg-[#282828]!" type="button" onClick={v.mpSubmit}>
                        {"Senden"}
                      </button>
                    </div>
                  </>
                )}
                {v.mpSent && (
                  <>
                    <div className="flex flex-col gap-[12px] items-start">
                      <span className="grid place-items-center w-[48px] h-[48px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:22px] font-extrabold">
                        {"✓"}
                      </span>
                      <h3 className="m-0 text-[length:22px] text-[#141c5c]">
                        {"Vielen Dank für Ihre Bestellung."}
                      </h3>
                      <p className="m-0 text-[length:15px] leading-[1.65] text-[color:rgba(40,40,40,.78)]">
                        {"Sie erhalten in Kürze eine Bestätigung per Mail. Unser Außendienst meldet sich telefonisch für den Liefertermin."}
                      </p>
                      <button className="p-[11px_20px] [border:1.5px_solid_#141c5c] rounded-full bg-transparent text-[#141c5c] text-[length:14px] font-bold cursor-pointer" type="button" onClick={v.mpReset}>
                        {"Neue Bestellung"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
