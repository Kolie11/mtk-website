// Mobiles Menü: abgedunkelter Hintergrund + ausfahrendes Panel
export default function MobileMenu({ v }) {
  return (
      <>
      <div className="fixed inset-0 z-[80] bg-[color:rgba(20,28,92,.5)] [backdrop-filter:blur(4px)] [transition:opacity_.3s_ease]" onClick={v.closeMenu} style={{ opacity: v.menuOpacity, pointerEvents: v.menuPointer }}></div>
      <aside className="fixed top-0 right-0 bottom-0 z-[81] flex flex-col w-[min(340px,90vw)] bg-[#f7f4ec] p-[24px] [transition:transform_.35s_cubic-bezier(.22,.61,.36,1)] shadow-[-30px_0_60px_-20px_rgba(20,28,92,.35)]" style={{ transform: v.menuTransform }}>
        <div className="flex justify-between items-center mb-[24px]">
          <img className="h-[32px] w-auto block" src="/images/logo-kaasen.png" alt="Kaasen" />
          <button className="grid place-items-center w-[38px] h-[38px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[12px] bg-transparent text-[#141c5c] cursor-pointer text-[length:18px]" onClick={v.closeMenu} aria-label="Schließen">
            {"×"}
          </button>
        </div>
        <nav className="flex flex-col gap-[4px] text-[length:17px] font-semibold">
          <a className="p-[14px_16px] rounded-[14px] text-[#141c5c] hover:bg-[#fbf389]!" href="#kIntent" onClick={v.closeMenu}>
            {"Ihr Anliegen"}
          </a>
          <a className="p-[14px_16px] rounded-[14px] text-[#141c5c] hover:bg-[#fbf389]!" href="#kProdukte" onClick={v.closeMenu}>
            {"Produkte"}
          </a>
          <a className="p-[14px_16px] rounded-[14px] text-[#141c5c] hover:bg-[#fbf389]!" href="#kHaus" onClick={v.closeMenu}>
            {"Über uns"}
          </a>
          <a className="p-[14px_16px] rounded-[14px] text-[#141c5c] hover:bg-[#fbf389]!" href="#kKontakt" onClick={v.closeMenu}>
            {"Kontakt"}
          </a>
        </nav>
        <div className="mt-[auto] flex flex-col gap-[10px] pt-[24px] [border-top:1px_solid_rgba(20,28,92,.08)]">
          <a className="flex items-center justify-center gap-[10px] p-[14px] bg-[#141c5c] text-[#fbf389] rounded-full text-[length:14px] font-bold no-underline" href="tel:+492306306090">
            {"02306 30609-0"}
          </a>
          <a className="flex items-center justify-center gap-[10px] p-[14px] bg-[#fbf389] text-[#141c5c] rounded-full text-[length:14px] font-bold no-underline" href="mailto:medizintechnik@kaasen.de">
            {"E-Mail"}
          </a>
        </div>
      </aside>
      </>
  );
}
