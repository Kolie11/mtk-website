// Umschalter Privatpersonen / Fachpersonen (ganz oben)
export default function AudienceSwitch({ v }) {
  return (
    <div className="order-[-1] bg-[#141c5c] text-[#f7f4ec]">
      <div className="flex flex-wrap items-center justify-between gap-[14px] max-w-[1280px] mx-auto my-0 p-[9px_clamp(16px,3vw,36px)] text-[length:12.5px]">
        <span className="k-topbar-hours flex items-center gap-[10px] text-[color:rgba(247,244,236,.72)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbf389" strokeWidth="2.4" strokeLinecap="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9z"></path>
          </svg>
          {" +49 2306 30609-0 · Mo–Do 8:00–17:00 · Fr 8:00–16:00"}
        </span>
        <div className="k-audience flex gap-[4px] p-[3px] rounded-full bg-[color:rgba(247,244,236,.08)]">
          <button className="p-[7px_16px] border-0 rounded-full text-[length:12px] font-semibold tracking-[.02em] cursor-pointer [transition:all_.25s_ease]" onClick={v.setPrivat} style={{ background: v.privatBg, color: v.privatColor }}>
            {"Für Privatpersonen"}
          </button>
          <button className="p-[7px_16px] border-0 rounded-full text-[length:12px] font-semibold tracking-[.02em] cursor-pointer [transition:all_.25s_ease]" onClick={v.setFach} style={{ background: v.fachBg, color: v.fachColor }}>
            {"Für Fachpersonen"}
          </button>
        </div>
      </div>
    </div>
  );
}
