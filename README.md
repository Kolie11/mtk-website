# Medizintechnik Kaasen — Website (Next.js Handoff)

Complete handoff package to build the new **Medizintechnik Kaasen GmbH** website from scratch with **Next.js, TypeScript and Tailwind CSS**, including the public site, shop, product pages, the **Fachbereich** (healthcare professionals area) and the **Admin** panel.

> The website language is **German**. This README and code comments are in English.

---

## 1. About the company

| | |
|---|---|
| Company | Medizintechnik Kaasen GmbH |
| Address | Zum Gewerbepark 4, 44532 Lünen, Germany |
| Phone / Fax | 02306 30609-0 / 02306 30609-29 |
| Email (general) | medizintechnik@kaasen.de |
| Email (prescription requests) | bb@kaasen.de |
| Managing director | Rita Kaasen |
| Register | Amtsgericht Dortmund, HRB 22411 |
| VAT ID | DE 267231607 |
| Opening hours | Mon–Thu 08:00–17:00, Fri 08:00–16:00 |
| Existing site | https://www.medizintechnik-kaasen.de (source for prices, legal texts, current flows) |
| Brands | **babybeat** is a registered trademark owned by the GmbH |

**What they sell:** medical aids (Hilfsmittel) for pelvic floor training, pregnancy, breastfeeding (rental breast pumps), men's health, children, plus accessories.
**Core business rule:** products are financed primarily through **statutory health insurance (GKV)** via prescription. Buying is the **secondary** option.

---

## 2. What's in this folder

```
kaasen-nextjs-handoff/
├── README.md              ← this file
├── design/                ← HTML design prototypes (source of truth for UI)
│   ├── index.html         ← public site: home, shop (#shop), product pages (#produkt/<slug>), modals
│   ├── Fachpersonen.dc.html ← Fachbereich (needs support.js next to it)
│   ├── admin.html         ← admin panel (demo login: admin@kaasen.de / kaasen2026)
│   ├── baukasten.html     ← product-page builder (admin)
│   ├── support.js
│   └── img/
├── screenshots/           ← expected result, per page/state
├── assets/images/         ← production images, named by product (copy to /public/images)
├── reference/react-src/   ← earlier React+Tailwind version: components + data files to reuse
│   └── data/              ← products.js, productPages.js, rezept.js, content.js, legal.js, intents.jsx
└── docs/
    ├── brand/             ← corporate design styleguide (PDF)
    ├── content/           ← edited copy (Lektorat) for the home page
    ├── specs/             ← Fachbereich schema, product page schema, briefing
    ├── rehadat/           ← official product sheets (aid numbers / Hilfsmittelnummern)
    └── forms/             ← screenshots of the current breast-pump order form
```

Open the files in `design/` directly in a browser to see the intended look and behaviour. **They are design references, not production code** — rebuild them in Next.js.

---

## 3. Tech stack

| Area | Choice |
|---|---|
| Framework | **Next.js 15 (App Router)**, React Server Components |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS v4** (design tokens in `@theme`) |
| Fonts | `next/font/google` → **Montserrat** (400–800, italic) |
| Images | `next/image` |
| Forms | Server Actions + **zod** validation |
| Email | **Resend** (or SMTP via Nodemailer) |
| CMS / Admin | **Payload CMS 3** (runs inside the same Next.js app) |
| Database | PostgreSQL (Neon / Supabase) or MongoDB |
| Shop / Checkout | **Shopify** (Storefront API / Buy Button) — subscription pending → placeholder for now |
| Analytics | **Google Analytics 4** with consent banner (GDPR) |
| Newsletter | **GetResponse** (later) |
| Hosting | **Netlify** (or Vercel) |

---

## 4. Site map / routes

| Route | Page |
|---|---|
| `/` | Home (Privatpersonen) |
| `/shop` | Shop — all products with price, add to cart |
| `/produkte/[slug]` | Product page built from blocks (emy, perifit, apelvo, emagina, maple, restifem, therapee, picterus …) |
| `/milchpumpe` | (optional) direct link to the breast-pump order section |
| `/fachbereich` | Healthcare professionals area |
| `/warenkorb`, `/kasse` | Cart & checkout placeholder (Shopify later) |
| `/impressum`, `/datenschutz`, `/agb`, `/widerrufsbelehrung`, `/versand` | Legal pages |
| `/admin` | Payload admin |

---

## 5. Pages in detail

### 5.1 Home (`design/index.html`, `screenshots/startseite-*.jpg`)
1. **Audience switch** at the very top: *Für Privatpersonen* / *Für Fachpersonen* (→ `/fachbereich`).
2. **Header** (sticky): logo, nav, cart icon with counter, burger → right drawer on mobile.
3. **Hero** with headline, image and **quick actions** (e.g. *Milchpumpe mieten* → breast-pump order section, *Fachbereich* → `/fachbereich`).
4. **Rental breast pump – online order** (`#kMilchpumpe`)
   - Collapsed by default: title, 3 steps, button *Jetzt online bestellen*.
   - Expands with `grid-template-rows: 0fr → 1fr` (0.65 s, `cubic-bezier(.2,.7,.2,1)`), content fades + slides from −16 px.
   - Banner: **„Bitte kein Rezept hochladen“** — breast-pump prescriptions are needed **in original**.
   - Accordion *Hinweise* (Kostenübernahme / Zubehör / Kaution / Rückgabe) — **only one open at a time**. Texts: see design file.
   - Order form: mother's data, address, e-mail, phones, mother's date of birth, stay (home / still in hospital → hospital, ward/room), insurer, insurance number, message, privacy checkbox. See `docs/forms/` for the current live form.
   - "Milchpumpe mieten", the rental card and footer links **only scroll** to this section (they do not auto-expand).
5. **Prescription upload** (`#kRezept`)
   - Form → after submit, redirect to Nextcloud: `https://nextcloud.kaasen.de/index.php/s/n6CBiiSMew9knW4`.
   - Submissions must be **emailed to bb@kaasen.de** and stored in the admin.
   - Side panel: **Mögliche Kassenleistung** → *gelistete Hilfsmittel* (Emy, Perifit, restifem, StoPee …: high chance of coverage) and *nicht gelistete Hilfsmittel* (Apelvo, Acticore, Emagina, TheraPee …: can be prescribed, coverage uncertain), expandable *„Was heißt das?“*. Plus **Ausschließlich Verkauf**: all other products are not covered.
   - The upload is **not** for breast pumps.
6. **Check prescription validity** → link to rezept.kaasen.de.
7. **Product range** (`#kProdukte`): filter chips (Alle, Beckenboden, Schwangerschaft, Milchpumpen, Zubehör, Männergesundheit, Kinder …) and cards.
   - **No price on cards for insurance products.**
   - *Mehr erfahren* → product page, or the detail modal (image, description, tags, "Mit Rezept zur Krankenkasse" box if insurance product, price incl. VAT, links to shipping/AGB/withdrawal, buttons *Kaufen* + *Beratung anfragen*).
   - Sale-only products are hidden under "Alle" but shown in their category and in the shop.
8. **Health insurance**, **About us (Das Haus)**, **Ticker**.
9. **Contact**: form + details + map.
10. **Footer** (Kaasen blue `#141c5c`): links, **partner logos without external links**, legal links, **„Vertrag widerrufen“** button (form: name, order no., contact, free text → medizintechnik@kaasen.de), back-to-top arrow.

### 5.2 Shop & product pages
- `/shop`: sale products with price + *In den Warenkorb*; free shipping from €100.
- `/produkte/[slug]`: assembled from CMS blocks (hero, features, aid number, FAQ, CTA prescription/buy). Content: `reference/react-src/data/productPages.js`, schema: `docs/specs/Schema_Produktseite.pdf`.
- Legal requirements for selling online (price incl. VAT, shipping costs, withdrawal, AGB) must be visible.

### 5.3 Fachbereich (`design/Fachpersonen.dc.html`, `docs/specs/Schema_Fachpersonen_Landingpage.pdf`)
- **No login / no registration.** On every visit a modal asks **„Sind Sie eine Fachperson?“** with two buttons:
  - **„Ja, ich bin Fachperson“** → a **5-second loading screen** (blue background, logo, spinner, "Fachbereich wird geladen …", yellow progress bar) → page shown.
  - **„Nein“** → back to `/`.
- 8 blocks:
  1. Banner + 4 quick actions (Infos für Verordnende, Webinare, Produktinfos/Flyer → opens download drawer, Produkte).
  2. **Quick info for prescribers**: Perifit Care+ `15.25.19.2002`, Emy `15.25.19.2027`, restifem `15.25.21.0098` (from `docs/rehadat/`), diagnoses, link to product page.
  3. **Products** (8, with accessories: MAPLe probes; Symphony pump sets + hands-free).
  4. **Testimonials** as speech bubbles (patients white, professionals blue), product visible.
  5. **Webinar calendar** (month view; click date → title, topic, date, time, host, platform; per webinar either *Zum Webinar anmelden* or *Keine Anmeldung erforderlich* — set in CMS).
  6. **Newsletter** (design only; GetResponse later).
  7. **Contact with 2 modes**: *Kontaktanfrage* / *Infomaterial bestellen* (7 flyers with thumbnail + description, checkbox each, then address). Flyers: Smarte Beckenbodentrainer für Frauen (Perifit Care+, Emy) · in der Schwangerschaft (Apelvo) · für Männer (Apelvo, Acticore, Pelvic Tool) · MAPLe Patientenflyer · MAPLe Fachpersonenflyer · Emagina Patientenflyer · Emagina DIN A4 with study results.
  8. Footer.
- **Flyer download drawer** (right side): product, title, format, download button.

### 5.4 Admin (`design/admin.html`, `design/baukasten.html`)
Build with **Payload CMS**. Collections:
- **Products** (name, slug, category, tags, description, price, image, insurance status: *gelistet* / *nicht gelistet* / *Verkauf*, aid number, Shopify product ID)
- **ProductPages** with a **blocks field = page builder (Baukasten)**, linked to a product
- **FAQ**, **Partners** (logo JPG/PNG upload, no link), **Webinars** (registration required: yes/no), **Flyers** (PDF upload), **Testimonials**, **LegalPages**
- **Submissions**: prescription, breast-pump order, contact, withdrawal, flyer order — stored **and** emailed
- **Users** (admin roles; user management)
- **Dashboard widget**: GA4 stats (views, interactions, scroll depth, time on page)

---

## 6. Design tokens

| Token | Value | Use |
|---|---|---|
| `kaasen-blue` | `#141c5c` | primary, footer, buttons |
| `kaasen-yellow` | `#fbf389` | accent, text on blue |
| `cream` | `#f7f4ec` | page background |
| `ink` | `#282828` | body text |
| `accent` | `#3a4bb8` | eyebrows, links, highlights |
| `tag-bg` | `rgba(166,178,255,.22)` | tags |
| `line` | `rgba(20,28,92,.08–.16)` | borders |

- **Font:** Montserrat 400/500/600/700/800 + italic for highlighted words in headlines.
- **Type:** H1 `clamp(36px,5.2vw,68px)`/800 · H2 `clamp(30px,3.6vw,48px)`, lh 1.08 · eyebrow 11 px/700, uppercase, tracking .2em · body 15–16 px, lh 1.65.
- **Radius:** buttons/chips 999px · cards 20–24px · inputs 12px · modals 24–28px.
- **Layout:** max-width 1240–1280px, section padding `clamp(56px,7vw,96px) clamp(16px,3vw,36px)`.
- **Shadow:** `0 20px 50px -30px rgba(20,28,92,.35)`.
- **Hover:** dark buttons → `#282828`; outline buttons fill blue with yellow text.
- **Motion:** sections fade/slide in on scroll; respect `prefers-reduced-motion`.
- Brand reference: `docs/brand/`.

---

## 7. SEO requirements

- `metadata` / `generateMetadata` on every route (German titles & descriptions, `lang="de"`).
- Canonical URLs, Open Graph + Twitter cards (OG image per product).
- `app/sitemap.ts` and `app/robots.ts`.
- **JSON-LD**: `Organization` / `MedicalBusiness` + `LocalBusiness` (address, phone, opening hours), `Product` + `Offer` on product pages, `FAQPage` for FAQ, `BreadcrumbList`.
- Semantic HTML (one `h1` per page, landmarks), descriptive `alt` text.
- Static generation / ISR for product and content pages.
- Core Web Vitals: `next/image`, `next/font`, no layout shift, lazy-load maps/iframes.
- Clean slugs: `/produkte/perifit-care-plus`, `/fachbereich`.
- `noindex` for `/admin`, cart and checkout.

---

## 8. Legal & compliance (Germany)

- Impressum, Datenschutz, AGB, Widerrufsbelehrung, Versand: texts in `reference/react-src/data/legal.js` (taken from the existing site).
- **Cookie consent** before loading GA4 / maps.
- Privacy checkbox on every form; data processed for the request only.
- Online shop duties: prices incl. VAT, shipping costs, withdrawal right + **withdrawal button** ("Vertrag widerrufen") in the footer.
- Health data in forms → HTTPS only, minimal storage, access-restricted admin.
- Images provided by Julien, Farina or Mr. Kaasen are approved for use.

---

## 9. Getting started

```bash
npx create-next-app@latest kaasen --typescript --tailwind --app --eslint
cd kaasen
cp -r ../kaasen-nextjs-handoff/assets/images public/images
npm run dev
```

`.env.local` (never commit):
```
RESEND_API_KEY=
MAIL_TO_REZEPT=bb@kaasen.de
MAIL_TO_GENERAL=medizintechnik@kaasen.de
NEXTCLOUD_UPLOAD_URL=https://nextcloud.kaasen.de/index.php/s/n6CBiiSMew9knW4
DATABASE_URI=
PAYLOAD_SECRET=
NEXT_PUBLIC_GA_ID=
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_TOKEN=
NEXT_PUBLIC_SITE_URL=https://www.medizintechnik-kaasen.de
```

### Deployment (Netlify)
Connect the Git repo → build command `npm run build` → Next.js runtime is detected automatically. Add the env variables in *Site settings → Environment variables*.

---

## 10. Open items (waiting on the client)

- Shopify subscription → real checkout
- Regional / insurer limits for breast-pump online ordering
- Final edited copy (approval by Farina)
- Final logo + partner logos (Julien)
- Prices for Picterus, Apelvo variants; insurance status of Picterus
- Real testimonials, webinar dates, flyer PDFs, Acticore photo
- GetResponse integration

---

## 11. Screenshots

`screenshots/` shows the expected result: home (hero, breast pump collapsed/open, prescription upload, product range, contact, footer), shop, Emy product page, Fachbereich sections, admin login. Some external images and the map are blank in screenshots only.
