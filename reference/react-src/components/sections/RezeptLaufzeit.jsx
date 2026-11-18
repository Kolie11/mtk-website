// Hinweis: Rezeptlaufzeit prüfen (rezept.kaasen.de)
export default function RezeptLaufzeit({ v }) {
  return (
    <section className="p-[clamp(28px,3vw,44px)_clamp(16px,3vw,36px)] bg-[#f7f4ec]">
      <div className="max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[24px] p-[clamp(24px,3vw,36px)] rounded-[24px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] shadow-[0_20px_40px_-30px_rgba(20,28,92,.3)] max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
        <div className="flex flex-col gap-[12px]">
          <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
            {"Milchpumpe im Verleih?"}
          </span>
          <h3 className="text-[length:clamp(22px,2.4vw,30px)] text-[#141c5c]">
            {"Rezeptlaufzeit & Folgeverordnung prüfen."}
          </h3>
          <p className="m-0 text-[length:14.5px] leading-[1.6] text-[color:rgba(40,40,40,.7)]">
            {"Sehen Sie jederzeit den Status Ihres Rezepts, den Ablauf der Mietdauer und ob eine Folgeverordnung nötig ist — unter "}
            <a className="text-[#141c5c] font-bold underline" href="https://rezept.kaasen.de">
              {"rezept.kaasen.de"}
            </a>
            {"."}
          </p>
        </div>
        <form className="flex flex-col gap-[10px] self-center">
          <a className="inline-flex items-center justify-center gap-[10px] p-[14px_22px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:14px] font-bold hover:bg-[#282828]!" href="https://rezept.kaasen.de">
            {"Status auf rezept.kaasen.de prüfen "}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>
        </form>
      </div>
    </section>
  );
}
