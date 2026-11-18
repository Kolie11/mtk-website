# Kaasen Medizintechnik — website (Next.js 15)

Frontend for medizintechnik-kaasen.de. Design source of truth: `../design/` and `../screenshots/`.
Backend contract: [`docs/BACKEND.md`](docs/BACKEND.md).

## Run

```bash
npm install
cp .env.example .env.local   # optional — everything has defaults
npm run dev                  # http://localhost:3000
npm run build && npm run lint
```

## Structure

```
app/(site)/        public pages (home, shop, produkte/[slug], warenkorb, kasse, legal pages)
app/fachbereich/   area for healthcare professionals (own header/footer)
app/admin/         admin UI demo (UI only, "Demo – Backend folgt")
components/        layout, sections, product, product-page, cart, forms, modals, fachbereich, ui, seo
lib/types.ts       domain types = backend contract
lib/data/          static content (phase 1)
lib/api/           data access layer — the only place the backend gets wired in
lib/validation/    zod schemas for all forms (German error messages)
```

## Status

- Phase 1 (done): all pages, forms with validation/loading/success/error states, cart
  (localStorage), Fachbereich with demo login, SEO (metadata, sitemap, robots, JSON-LD).
- Open (frontend): cookie consent banner (Google Maps currently uses click-to-load; GA4
  must load only after consent).
- Backend (built later by the backend team): API, mails, real pro auth, admin persistence,
  Shopify checkout. Contract: `docs/BACKEND.md`.

## Demo logins (remove with real auth)

- Fachbereich: `demo@kaasen.de` / `kaasen2026`
- Admin: `admin@kaasen.de` / `kaasen2026`
