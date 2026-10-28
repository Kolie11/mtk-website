import React from 'react';

// Rechtstexte: Impressum, Datenschutz, AGB, Widerruf
export default function LegalModal({ v }) {
  return (
    <>
    {v.legalOpen && (
      <>
        <div className="fixed inset-0 z-[120] grid place-items-center p-[16px] bg-[color:rgba(20,28,92,.55)] [backdrop-filter:blur(4px)]">
          <div className="w-[min(640px,100%)] max-h-[calc(100vh_-_32px)] overflow-auto flex flex-col gap-[16px] p-[clamp(22px,3vw,32px)] rounded-[24px] bg-[#f7f4ec] text-[#282828] box-border" role="dialog">
            <div className="sticky top-[calc(-1_*_clamp(22px,3vw,32px))] z-[3] flex items-center justify-between gap-[16px] m-[calc(-1_*_clamp(22px,3vw,32px))_calc(-1_*_clamp(22px,3vw,32px))_0] p-[clamp(18px,2.4vw,26px)_clamp(22px,3vw,32px)_14px] bg-[#f7f4ec] [border-bottom:1px_solid_rgba(20,28,92,.1)]">
              <h2 className="text-[length:clamp(22px,2.6vw,30px)] m-0">
                {v.legalTitle}
              </h2>
              <button className="flex-none grid place-items-center w-[40px] h-[40px] [border:1px_solid_rgba(20,28,92,.16)] rounded-full bg-[#fff] text-[#141c5c] text-[length:18px] cursor-pointer" onClick={v.closeLegal} aria-label="Schließen">
                {"×"}
              </button>
            </div>
            {(v.legalLines || []).map((ll, index) => (
              <React.Fragment key={index}>
                <p className="m-0 leading-[1.65] whitespace-pre-line [overflow-wrap:anywhere]" style={{ marginTop: ll?.mt, fontSize: ll?.s, fontWeight: ll?.w, color: ll?.c }}>
                  {ll?.t}
                </p>
              </React.Fragment>
            ))}
            {v.legalDraft && (
              <>
                <span className="p-[12px_14px] rounded-[12px] bg-[#fff7d6] text-[#6b5600] text-[length:12.5px] leading-[1.55]">
                  {"Platzhalter — der rechtsgültige Text wird von Medizintechnik Kaasen GmbH bereitgestellt und rechtlich geprüft."}
                </span>
              </>
            )}
          </div>
        </div>
      </>
    )}
    </>
  );
}
