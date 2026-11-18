import React from 'react';

// Footer mit Kontakt, Links, Partnerlogos und Rechtlichem
export default function Footer({ v }) {
  return (
    <footer className="order-[2] bg-[#141c5c] text-[color:rgba(247,244,236,.75)]">
      <div className="max-w-[1280px] mx-auto my-0 p-[clamp(44px,5vw,72px)_clamp(16px,3vw,36px)_30px]">
        <div className="k-footer-grid grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[36px] max-[1024px]:grid-cols-[repeat(2,minmax(0,1fr))]! max-[800px]:grid-cols-[1fr]! max-[640px]:grid-cols-[1fr]! max-[640px]:gap-[28px]! max-[400px]:grid-cols-[1fr]!">
          <div className="flex flex-col gap-[14px]">
            <img className="h-[48px] w-auto block p-[8px_12px] bg-[#f7f4ec] rounded-[12px] self-start" src="/images/logo-kaasen.png" alt="Medizintechnik Kaasen" />
            <span className="max-w-[24em] text-[length:14px] leading-[1.65]">
              <strong className="text-[#f7f4ec] font-bold">
                {"Innovative Medizinprodukte für die Frauen- und Männergesundheit."}
              </strong>
              {" Familienbetrieb aus Lünen — mit Krankenkasse abgerechnet."}
            </span>
            <span className="flex flex-wrap items-baseline gap-[4px_12px] text-[length:12.5px] leading-[1.6]">
              <span className="whitespace-nowrap">
                {"Tel. 02306 30 60 90"}
              </span>
              <span className="whitespace-nowrap">
                {"Fax 02306 30 60 929"}
              </span>
            </span>
            <div className="flex gap-[10px] mt-[6px]">
              <a className="grid place-items-center w-[36px] h-[36px] [border:1px_solid_rgba(247,244,236,.2)] rounded-full text-[#f7f4ec] hover:bg-[#fbf389]! hover:text-[#141c5c]! hover:border-[color:#fbf389]!" href="https://facebook.com/kaasen" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"></path>
                </svg>
              </a>
              <a className="grid place-items-center w-[36px] h-[36px] [border:1px_solid_rgba(247,244,236,.2)] rounded-full text-[#f7f4ec] hover:bg-[#fbf389]! hover:text-[#141c5c]! hover:border-[color:#fbf389]!" href="https://instagram.com/kaasen" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle>
                </svg>
              </a>
              <a className="grid place-items-center w-[36px] h-[36px] [border:1px_solid_rgba(247,244,236,.2)] rounded-full text-[#f7f4ec] hover:bg-[#fbf389]! hover:text-[#141c5c]! hover:border-[color:#fbf389]!" href="mailto:medizintechnik@kaasen.de" aria-label="E-Mail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 6L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] text-[length:14px]">
            <span className="text-[length:11px] tracking-[.2em] uppercase text-[color:rgba(247,244,236,.4)]">
              {"Privatpersonen"}
            </span>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#kRezept">
              {"Rezept einreichen"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#kMilchpumpe">
              {"Milchpumpe mieten"}
            </a>
          </div>
          <div className="flex flex-col gap-[10px] text-[length:14px]">
            <span className="text-[length:11px] tracking-[.2em] uppercase text-[color:rgba(247,244,236,.4)]">
              {"Fachpersonen"}
            </span>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#kFach">
              {"Klinik & Praxis"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#kFach">
              {"MAPLe · Kauf/Leasing"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#kFach">
              {"Schulungen"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#kKontakt">
              {"Außendienst kontaktieren"}
            </a>
          </div>
          <div className="flex flex-col gap-[10px] text-[length:14px]">
            <span className="text-[length:11px] tracking-[.2em] uppercase text-[color:rgba(247,244,236,.4)]">
              {"Rechtliches"}
            </span>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#impressum">
              {"Impressum"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#datenschutz">
              {"Datenschutz"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#agb">
              {"AGB"}
            </a>
            <a className="text-[color:rgba(247,244,236,.72)]" href="#widerrufsbelehrung">
              {"Widerrufsbelehrung"}
            </a>
            <button className="self-start mt-[6px] p-[10px_18px] [border:1.5px_solid_#fbf389] rounded-full bg-transparent text-[#fbf389] text-[length:13px] font-bold cursor-pointer hover:bg-[#fbf389]! hover:text-[#141c5c]!" onClick={v.openWiderruf}>
              {"Vertrag widerrufen"}
            </button>
          </div>
        </div>
        {v.hasPartners && (
          <>
            <div className="flex flex-col gap-[14px] mt-[36px] pt-[28px] [border-top:1px_solid_rgba(247,244,236,.14)]">
              <span className="text-[length:11px] tracking-[.2em] uppercase text-[color:rgba(247,244,236,.55)]">
                {"Wir arbeiten zusammen mit"}
              </span>
              <div className="flex flex-wrap gap-[10px]">
                {(v.partners || []).map((pt, index) => (
                  <React.Fragment key={index}>
                    <span className="grid place-items-center h-[56px] min-w-[120px] p-[10px_18px] rounded-[14px] bg-[#fff] box-border" title={pt?.name}>
                      {pt?.hasLogo && (
                        <>
                          <img className="max-w-[140px] max-h-[36px] object-contain block" src={pt?.logo} alt={pt?.name} />
                        </>
                      )}
                      {pt?.noLogo && (
                        <>
                          <span className="text-[length:14px] font-bold text-[#141c5c]">
                            {pt?.name}
                          </span>
                        </>
                      )}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="k-footer-bottom flex justify-between gap-[20px] flex-wrap mt-[36px] pt-[24px] [border-top:1px_solid_rgba(247,244,236,.14)] text-[length:12.5px] text-[color:rgba(247,244,236,.5)]">
          <span>
            {"© 2026 Medizintechnik Kaasen GmbH · Zugelassener Leistungserbringer"}
          </span>
          <span className="flex gap-[18px] items-center">
            <a className="text-[color:rgba(247,244,236,.5)] hover:text-[#fbf389]!" href="admin.html">
              {"Admin-Login"}
            </a>
            <span>
              {"Made with care in Lünen"}
            </span>
            <button className="flex-none grid place-items-center w-[44px] h-[44px] border-0 rounded-full bg-[#fbf389] text-[#141c5c] cursor-pointer [transition:transform_.2s_ease] hover:[transform:translateY(-3px)]!" onClick={v.toTop} aria-label="Nach oben" title="Nach oben">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5"></path>
                <path d="M5 12l7-7 7 7"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}
