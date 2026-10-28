# Medizintechnik Kaasen – Website (React + Vite + Tailwind CSS)

## Starten (VS Code)
1. Node.js (LTS) installieren: https://nodejs.org
2. Ordner `kaasen-react` in VS Code öffnen
3. Terminal → Neues Terminal:
   ```
   npm install
   npm run dev
   ```
4. http://localhost:5177 öffnen

## Struktur
```
src/
  main.jsx                 Einstieg
  App.jsx                  Zustand + Handler (Warenkorb, Filter, Formulare, Routing per #hash)
  styles.css               Tailwind-Import, Grundstile, Animationen, Responsive-Regeln für k-…-Klassen
  components/
    layout/                AudienceSwitch, Header, MobileMenu, Footer
    sections/              Hero, MilchpumpeBestellung, RezeptUpload, RezeptLaufzeit, Sortiment,
                           Krankenkasse, DasHaus, Ticker, Partner, Kontakt
    pages/                 ShopPage (#shop), ProductPage (#produkt/…)
    modals/                ProductDetailModal, CartDrawer, CheckoutModal, LegalModal,
                           RezeptUploadModal, WiderrufModal
  data/
    products.js            Produkte, Preise, Bilder
    productPages.js        Inhalte der Produktseiten
    rezept.js              Gelistete / nicht gelistete Hilfsmittel, Krankenkassen
    content.js             FAQ, Fachpersonen-Karten, Partner
    legal.js               Impressum, Datenschutz, AGB, Widerruf
    intents.jsx            Schnellaktionen unter dem Hero
public/images/             Logo, Hero-Bild, Über-uns-Bild
public/images/products/    Produktbilder (benannt nach Produkt)
```

## Styling
- Alles ist mit Tailwind-Klassen direkt am Element gestylt (`className="flex gap-[14px] …"`).
- Werte, die sich zur Laufzeit ändern (z. B. aktiver Filter), stehen weiterhin in `style={{ … }}`.
- `max-[800px]:…!` = gilt nur bis 800 px Bildschirmbreite (Mobil).

## Häufige Änderungen
- Preis / Bild / Text eines Produkts: `src/data/products.js`
- Neues Produktbild: Datei nach `public/images/products/` legen und in `products.js` eintragen

## Deployment auf Netlify
- Mit GitHub: Repo verbinden → Netlify baut automatisch (`netlify.toml`).
- Ohne GitHub: `npm run build` → Ordner `dist` per Drag & Drop in Netlify ziehen.

## Noch offen
- Formulare an E-Mail anbinden (z. B. Netlify Forms)
- Checkout über Shopify
- Admin-Bereich (Backend/CMS)
