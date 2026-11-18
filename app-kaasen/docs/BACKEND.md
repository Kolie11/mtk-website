# Backend contract

The frontend is complete and runs **without a backend**: every data access goes through
`lib/api/*`, which currently resolves static data from `lib/data/*` and mocks all writes.
Components never import `lib/data` directly.

The backend (stack chosen by the backend team) is connected like this:

1. Set `NEXT_PUBLIC_API_BASE_URL`.
2. Replace the function **bodies** in `lib/api/*` with `fetch` calls. Keep names, arguments
   and return types.
3. Return exactly the shapes from `lib/types.ts`. Those types are the contract.

What stays in the frontend: UI copy and labels (`lib/data/site.ts`, the `proNav`/`proGate`/
`proLogin`/`proBanner` texts in `lib/data/fachbereich.ts`, `proDocumentTypes`). These are
imported directly by components and are not part of the API. Everything else in
`lib/data/*` is domain data that the backend replaces.

Section numbers below are referenced from code comments.

---

## 1. Conventions

- JSON, UTF‑8. All user-facing strings are **German** and edited by the client — store as-is.
- IDs are strings. Dates are ISO (`YYYY-MM-DD`), timestamps ISO 8601.
- Money: gross EUR as `number` plus a preformatted `label` (`"199,00 €"`).
- Images/PDFs: absolute URLs or paths under `/images/...` / `/media/...`.
- Errors: `4xx` with `{ "error": string, "fieldErrors"?: Record<string, string[]> }`.
  Field error messages should be German (the frontend shows them verbatim).
- Read endpoints are public and cacheable (ISR / `revalidate`), except §4.2.

## 2. Products — `lib/api/products.ts`

| Function | Endpoint | Returns |
|---|---|---|
| `getProducts()` | `GET /products` | `Product[]` |
| `getProductBySlug(slug)` | `GET /products/:slug` | `Product \| null` (404 → `null`) |
| `getFeaturedProducts()` | `GET /products?featured=true` | sorted by `featuredOrder` |
| `getShopProducts()` | `GET /products?insurance=sale` | sale-only products |
| `getProProducts()` | `GET /products?pro=true` | sorted by `pro.order` |

### 2.1 Product rules (do not break)

- `insurance`: `listed | unlisted | sale | professional | pending`.
  Insurance products (`listed`, `unlisted`) **show no price on cards**; buying is secondary.
- `price` is the public price. `proPrice` is a **separate field**, independent of `price`,
  only shown to logged-in professionals (§4.2). Initial values:
  Perifit Care+ 94,90 €, Emy 129,90 €, MAPLe probes 125 € per piece (5 pcs).
- `shopifyProductId` links to Shopify for checkout (phase 2; `/kasse` is a placeholder).

### 2.2 Product pages

| Function | Endpoint | Returns |
|---|---|---|
| `getProductPages()` | `GET /product-pages` | `ProductPage[]` (used by `generateStaticParams`) |
| `getProductPage(slug)` | `GET /product-pages/:productSlug` | `ProductPage \| null` |

### 2.3 Baukasten (page builder)

The admin edits a product page as an ordered list of blocks (`lib/admin/pageBuilder.ts`):
`hero | benefits | audience | gallery | insurance | text | faq | price`.
Store pages in this block form (ordered array of typed blocks). The `price` block is automatic —
it renders from the linked product. Until the public renderer reads blocks directly, the
backend must also be able to return the structured `ProductPage` shape above.

## 3. Editorial content — `lib/api/content.ts`

| Function | Endpoint | Notes |
|---|---|---|
| `getFaqs()` | `GET /faqs` | only `visible`, sorted by `order` |
| `getPartners()` | `GET /partners` | only `visible`. **No URL field** — partner logos are never linked |
| `getLegalPage(slug)` | `GET /legal-pages/:slug` | slugs: `impressum`, `datenschutz`, `agb`, `widerrufsbelehrung`, `versand` |

## 4. Fachbereich — `lib/api/fachbereich.ts`, `lib/api/proAuth.ts`

The page `/fachbereich` is **open to everyone** after the "Sind Sie Fachperson?" modal
(frontend only, every visit, no backend involved). Login only *expands* it.

### 4.1 Public

| Function | Endpoint |
|---|---|
| `getWebinars()` | `GET /webinars` (sorted by date) |
| `getFlyers()` | `GET /flyers` |
| `getTestimonials()` | `GET /testimonials` |
| `getPrescriberInfos()` | `GET /prescriber-infos` |

### 4.2 Login-only

| Function | Endpoint |
|---|---|
| `loginPro({ email, password })` | `POST /pro/auth/login` → sets **httpOnly** session cookie, returns `ProUser` |
| `logoutPro()` | `POST /pro/auth/logout` |
| `readStoredProSession()` | `GET /pro/auth/me` → `ProUser \| null` |
| `getProDocuments(productId?)` | `GET /pro/documents?productId=` → `ProDocument[]` |

- Entity `ProUsers` (email + password hash). Accounts are created/approved by an admin only.
- `ProductDocuments`: `product`, `type: study | flyer | ifu | certificate`, PDF upload,
  `loginRequired` (default `true`). PDF files must be served **only** with a valid session —
  the current demo gates them in the UI only.
- `proPrice` must not be included in public product responses for anonymous users
  (either strip it server-side or serve it from a session-protected endpoint).
- Invalid login: `401` → frontend shows "E-Mail oder Passwort ist nicht korrekt."
- **Remove the demo credentials** in `proAuth.ts` and `admin.ts` when wiring real auth.

## 5. Form submissions — `lib/api/submissions.ts`

Every submission must be **stored** (entity `Submissions`: `type`, `payload` JSON,
`createdAt`, `status`) **and e‑mailed** to the recipient below.
Payloads are the zod output types in `lib/validation/*`; validate again server-side with the
same schemas. Reject when the honeypot field `website` is non-empty (respond `200` silently).
Response: `{ id: string, receivedAt: string }`.

| Function | Endpoint | Schema | Mail to |
|---|---|---|---|
| `submitPrescriptionRequest` | `POST /submissions/prescription` | `prescriptionSchema` | **bb@kaasen.de** |
| `submitBreastPumpOrder` | `POST /submissions/breast-pump-order` | `breastPumpOrderSchema` | medizintechnik@kaasen.de |
| `submitContactRequest` | `POST /submissions/contact` | `contactSchema` | medizintechnik@kaasen.de |
| `submitWithdrawal` | `POST /submissions/withdrawal` | `withdrawalSchema` | **medizintechnik@kaasen.de** |
| `submitFlyerOrder` | `POST /submissions/flyer-order` | `flyerOrderSchema` | medizintechnik@kaasen.de |
| `submitProContactRequest` | `POST /submissions/pro-contact` | `proContactSchema` | medizintechnik@kaasen.de |
| `submitProAccessRequest` | `POST /submissions/pro-access-request` | `proAccessRequestSchema` | medizintechnik@kaasen.de |
| `submitWebinarRegistration` | `POST /submissions/webinar-registration` | `webinarRegistrationSchema` | medizintechnik@kaasen.de |
| `submitNewsletterSignup` | `POST /newsletter/subscribe` | `newsletterSchema` | — (GetResponse later) |

Business rules:
- **Prescription**: no file upload on the website. After success the frontend redirects
  to `NEXT_PUBLIC_NEXTCLOUD_UPLOAD_URL`, where the file is uploaded.
- **Breast pumps** never go through the prescription upload (original prescription
  required) — only through the online order form.
- **Access request**: admin approves → creates a `ProUsers` account.
- Add rate limiting per IP on all submission endpoints.

## 6. Admin — `lib/api/admin.ts`

`/admin` is currently a **UI demo** marked "Demo – Backend folgt" (state in memory,
nothing persisted; mirrors `design/admin.html` + `design/baukasten.html`). Its editors call
`saveAdminChange(resource, payload)` — replace that with authenticated CRUD endpoints
(`GET/POST/PUT/DELETE /admin/<resource>`) and `loginAdmin` with real admin auth.
Entities needed:

`Users`, `Products` (incl. `proPrice`), `ProductPages` (blocks, §2.3), `ProductDocuments`,
`FAQ`, `Partners`, `Webinars`, `Flyers`, `Testimonials`, `LegalPages`, `Submissions`, `ProUsers`.

## 7. Environment variables

| Variable | Used by | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical URLs, sitemap, JSON-LD | |
| `NEXT_PUBLIC_NEXTCLOUD_UPLOAD_URL` | prescription redirect | |
| `NEXT_PUBLIC_API_BASE_URL` | `lib/api/*` | empty = static data |

The frontend needs no database and no secrets. Backend secrets (mail API key, DB URL)
live only in the backend.
