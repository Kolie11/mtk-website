// Kopfzeile mit Logo, Navigation, Warenkorb und Burger-Button
export default function Header({ v }) {
  return (
    <header className="order-[-1] sticky top-0 z-[60] bg-[color:rgba(247,244,236,.9)] [backdrop-filter:blur(14px)] [border-bottom:1px_solid_rgba(20,28,92,.08)]">
      <div className="flex items-center justify-between gap-[20px] max-w-[1280px] mx-auto my-0 p-[16px_clamp(16px,3vw,36px)]">
        <a className="flex items-center gap-[14px]" href="#kTop">
          <img className="h-[40px] w-auto block" src="/images/logo-kaasen.png" alt="Medizintechnik Kaasen" />
        </a>
        <nav className="k-desktop-nav flex flex-wrap gap-[2px] text-[length:14px] font-medium">
          <a className="p-[10px_14px] rounded-full hover:bg-[color:rgba(20,28,92,.06)]!" href="#kIntent">
            {"Ihr Anliegen"}
          </a>
          <a className="p-[10px_14px] rounded-full hover:bg-[color:rgba(20,28,92,.06)]!" href="#kProdukte">
            {"Produkte"}
          </a>
          <a className="p-[10px_14px] rounded-full hover:bg-[color:rgba(20,28,92,.06)]!" href="#shop">
            {"Shop"}
          </a>
          <a className="p-[10px_14px] rounded-full hover:bg-[color:rgba(20,28,92,.06)]!" href="#kHaus">
            {"Über uns"}
          </a>
        </nav>
        <div className="flex items-center gap-[8px]">
          <button className="relative flex items-center gap-[8px] p-[11px_16px] [border:1px_solid_rgba(20,28,92,.14)] rounded-full bg-[#f7f4ec] text-[length:13px] font-semibold text-[#141c5c] cursor-pointer hover:border-[color:#141c5c]!" onClick={v.openCart}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="k-cart-total">
              {v.cartTotal}
            </span>
            {v.hasCart && (
              <>
                <span className="absolute top-[-6px] right-[-6px] grid place-items-center min-w-[20px] h-[20px] p-[0_5px] rounded-full bg-[#fbf389] text-[#141c5c] text-[length:11px] font-bold">
                  {v.cartCount}
                </span>
              </>
            )}
          </button>
          <a className="inline-flex items-center gap-[10px] p-[12px_18px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:13.5px] font-bold whitespace-nowrap hover:bg-[#282828]!" href="tel:+492306306090">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2L8 9.6a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2-.5 13 13 0 0 0 2.7.6 2 2 0 0 1 1.7 2z"></path>
            </svg>
            <span className="k-phone-label">
              {"02306 30609-0"}
            </span>
          </a>
          <button className="k-burger place-items-center w-[42px] h-[42px] [border:1px_solid_rgba(20,28,92,.14)] rounded-[12px] bg-[#f7f4ec] text-[#141c5c] cursor-pointer" onClick={v.toggleMenu} aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
