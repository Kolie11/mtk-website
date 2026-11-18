// Formular „Vertrag widerrufen“
export default function WiderrufModal({ v }) {
  return (
    <>
    {v.widerrufOpen && (
      <>
        <div className="fixed inset-0 z-[120] grid place-items-center p-[16px] bg-[color:rgba(20,28,92,.55)] [backdrop-filter:blur(4px)]">
          <div className="w-[min(540px,100%)] max-h-[calc(100vh_-_32px)] overflow-auto flex flex-col gap-[16px] p-[clamp(22px,3vw,32px)] rounded-[24px] bg-[#f7f4ec] text-[#282828] box-border" role="dialog" aria-label="Vertrag widerrufen">
            <div className="flex items-start justify-between gap-[16px]">
              <div className="flex flex-col gap-[6px]">
                <span className="text-[length:11px] tracking-[.18em] uppercase text-[#3a4bb8] font-bold">
                  {"Widerruf"}
                </span>
                <h2 className="text-[length:clamp(22px,2.6vw,30px)] m-0">
                  {"Vertrag widerrufen"}
                </h2>
              </div>
              <button className="flex-none grid place-items-center w-[40px] h-[40px] [border:1px_solid_rgba(20,28,92,.16)] rounded-full bg-[#fff] text-[#141c5c] text-[length:18px] cursor-pointer" onClick={v.closeWiderruf} aria-label="Schließen">
                {"×"}
              </button>
            </div>
            {v.widerrufForm && (
              <>
                <div className="flex flex-col gap-[12px]">
                  <p className="m-0 text-[length:14px] leading-[1.6] text-[color:rgba(40,40,40,.75)]">
                    {"Hiermit widerrufen Sie Ihre Bestellung. Ihre Erklärung geht direkt an medizintechnik@kaasen.de — Sie erhalten eine Eingangsbestätigung."}
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[10px]">
                    <label className="flex flex-col gap-[4px]">
                      <span className="text-[length:12px] text-[#141c5c] font-semibold">
                        {"Name "}
                        <span className="text-[#c93838]">
                          {"*"}
                        </span>
                      </span>
                      <input className="w-full box-border p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px]" required={true} placeholder="Vor- und Nachname" />
                    </label>
                    <label className="flex flex-col gap-[4px]">
                      <span className="text-[length:12px] text-[#141c5c] font-semibold">
                        {"Bestellnummer "}
                        <span className="text-[#c93838]">
                          {"*"}
                        </span>
                      </span>
                      <input className="w-full box-border p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px]" required={true} placeholder="z. B. #1042" />
                    </label>
                    <label className="col-[1/-1] flex flex-col gap-[4px]">
                      <span className="text-[length:12px] text-[#141c5c] font-semibold">
                        {"E-Mail oder Telefon "}
                        <span className="text-[#c93838]">
                          {"*"}
                        </span>
                      </span>
                      <input className="w-full box-border p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px]" required={true} placeholder="Damit wir Sie erreichen" />
                    </label>
                    <label className="col-[1/-1] flex flex-col gap-[4px]">
                      <span className="text-[length:12px] text-[#141c5c] font-semibold">
                        {"Nachricht"}
                      </span>
                      <textarea className="w-full box-border p-[12px_14px] [border:1px_solid_rgba(20,28,92,.16)] rounded-[12px] bg-[#fff] text-[length:14px] [resize:vertical]" rows="3" placeholder="Welche Artikel? Grund (optional)"></textarea>
                    </label>
                  </div>
                  <button className="p-[15px_24px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold cursor-pointer hover:bg-[#282828]!" onClick={v.sendWiderruf}>
                    {"Widerruf absenden"}
                  </button>
                  <span className="text-[length:12px] leading-[1.55] text-[color:rgba(40,40,40,.6)] text-center">
                    {"Details zu Fristen und Rücksendung: "}
                    <a className="text-[#141c5c] underline" href="#widerrufsbelehrung">
                      {"Widerrufsbelehrung"}
                    </a>
                  </span>
                </div>
              </>
            )}
            {v.widerrufSent && (
              <>
                <div className="flex flex-col gap-[14px] items-start">
                  <span className="grid place-items-center w-[44px] h-[44px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:20px] font-extrabold">
                    {"✓"}
                  </span>
                  <p className="m-0 text-[length:15px] leading-[1.6] text-[#282828]">
                    {"Vielen Dank. Ihr Widerruf ist bei uns eingegangen — die Bestätigung kommt per E-Mail."}
                  </p>
                  <button className="p-[13px_22px] border-0 rounded-full bg-[#141c5c] text-[#fbf389] text-[length:14px] font-bold cursor-pointer" onClick={v.closeWiderruf}>
                    {"Schließen"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    )}
    </>
  );
}
