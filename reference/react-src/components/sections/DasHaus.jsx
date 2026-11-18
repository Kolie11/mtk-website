// Über uns: das Haus Kaasen
export default function DasHaus({ v }) {
  return (
    <section className="p-[clamp(48px,6vw,90px)_clamp(16px,3vw,36px)]" id="kHaus">
      <div className="max-w-[1280px] mx-auto my-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(28px,4vw,60px)] items-center max-[800px]:grid-cols-[1fr]! max-[800px]:gap-[20px]!">
        <div className="flex flex-col gap-[22px]">
          <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
            {"Das Haus Kaasen"}
          </span>
          <h2 className="text-[length:clamp(30px,4vw,54px)]">
            {"Ein "}
            <em className="italic text-[#3a4bb8]">
              {"Familienbetrieb"}
            </em>
            {", der Tabus enttabuisiert."}
          </h2>
          <p className="m-0 text-[length:16.5px] leading-[1.75] text-[color:rgba(40,40,40,.72)]">
            {"Seit 2005 vermitteln wir Hilfsmittel, die sonst niemand offen anspricht: Milchpumpen, Beckenboden, Bettnässen, Kinderwunsch, Männergesundheit. Empathisch. Kompetent. Ohne rot zu werden."}
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[20px] mt-[12px] [border-top:1px_solid_rgba(20,28,92,.14)] pt-[24px]">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(40,40,40,.6)] font-semibold">
                {"Standort"}
              </span>
              <strong className="text-[length:17px] text-[#141c5c] leading-[1.4] font-bold">
                {"Zum Gewerbepark 4"}
                <br />
                {"44532 Lünen"}
              </strong>
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(40,40,40,.6)] font-semibold">
                {"Anrufen"}
              </span>
              <a className="text-[length:17px] text-[#141c5c] font-bold leading-[1.4]" href="tel:+492306306090">
                {"02306 30609-0"}
              </a>
            </div>
            <div className="flex flex-col gap-[8px] min-w-[0]">
              <span className="text-[length:11px] tracking-[.14em] uppercase text-[color:rgba(40,40,40,.6)] font-semibold">
                {"Schreiben"}
              </span>
              <a className="text-[length:15px] text-[#141c5c] font-bold leading-[1.4] [word-break:break-word] [overflow-wrap:anywhere]" href="mailto:medizintechnik@kaasen.de">
                {"medizintechnik"}
                <wbr />
                {"@kaasen.de"}
              </a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[460px] rounded-[32px] overflow-hidden text-[#f7f4ec] p-[clamp(28px,3vw,44px)] flex flex-col justify-between gap-[20px] max-[800px]:w-full! max-[800px]:h-auto! max-[800px]:min-h-[260px]!">
          <img className="absolute inset-0 w-full h-full object-cover" src="/images/das-haus-mutter-mit-neugeborenem.jpg" alt="Mutter mit Neugeborenem" />
          <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(20,28,92,.35)_0%,rgba(20,28,92,.85)_100%)]" aria-hidden="true"></div>
          <span className="relative text-[length:11.5px] tracking-[.22em] uppercase text-[#fbf389] font-bold">
            {"Markenkern"}
          </span>
          <blockquote className="relative m-0 text-[length:clamp(20px,2.4vw,32px)] font-semibold leading-[1.25] text-[#f7f4ec]" style={{ fontFamily: "Montserrat" }}>
            {"„Empathisch, kompetent, zuverlässig — und, wo es passt, humorvoll. So sprechen wir mit Menschen, nicht mit Patienten.\""}
          </blockquote>
          <span className="relative text-[length:13.5px] text-[color:rgba(247,244,236,.8)]">
            {"Familie Kaasen · Lünen"}
          </span>
        </div>
      </div>
    </section>
  );
}
