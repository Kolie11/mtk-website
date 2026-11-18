// Domain types shared by the static data (lib/data), the data access layer (lib/api)
// and the UI. The backend must return exactly these shapes — see docs/BACKEND.md.

export type ProductCategory =
  | "Beckenboden"
  | "Schwangerschaft"
  | "Milchpumpen"
  | "Zubehör"
  | "Männergesundheit"
  | "Kinder"
  | "Fachpersonen";

/**
 * listed       – in the GKV aid directory (Hilfsmittelverzeichnis), coverage very likely
 * unlisted     – can be prescribed, coverage uncertain
 * sale         – sale only, never covered (shown in shop, hidden under "Alle")
 * professional – device for practices/clinics (B2B)
 * pending      – insurance status not decided yet
 */
export type InsuranceStatus = "listed" | "unlisted" | "sale" | "professional" | "pending";

export type ImageFit = "contain" | "cover";

export type ProductImage = {
  src: string;
  fit: ImageFit;
  padded: boolean;
  /** Background colour behind transparent / contained product shots (hex). */
  background: string;
};

export type Price = {
  /** Gross amount in EUR used for the cart. `null` = not purchasable online. */
  amount: number | null;
  /** Display label, e.g. "199,00 €", "ab 59,99 €", "Preis auf Anfrage". */
  label: string;
};

export type ProPrice = {
  /** Gross amount in EUR for healthcare professionals (independent of `price`). */
  amount: number;
  /** Unit / note shown next to the price, e.g. "pro Sonde · 5 Stück". */
  unit: string;
};

export type ProProductInfo = {
  order: number;
  /** Optional display name override in the Fachbereich (e.g. "Medela Symphony"). */
  name: string | null;
  category: string;
  description: string;
  image: string;
  accessories: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  alsoIn: ProductCategory[];
  tags: string[];
  description: string;
  price: Price;
  proPrice: ProPrice | null;
  insurance: InsuranceStatus;
  aidNumber: string | null;
  image: ProductImage | null;
  badge: string | null;
  coverageNote: string | null;
  hasProductPage: boolean;
  isRental: boolean;
  featuredOrder: number | null;
  shopifyProductId: string | null;
  /** Present when the product is shown in the Fachbereich product overview. */
  pro: ProProductInfo | null;
};

export type BannerTone = "yellow" | "lavender" | "white";

export type ProductPageScreen = {
  title: string;
  text: string;
  image: { src: string | null; fit: ImageFit; background: string };
};

export type TitledText = { title: string; text: string };

export type QuestionAnswer = { question: string; answer: string };

export type ProductPage = {
  productSlug: string;
  kind: "smart" | "analog";
  banner: BannerTone;
  categoryLabel: string;
  claim: string;
  headline: string;
  intro: string;
  features: string[];
  screens: ProductPageScreen[];
  steps: TitledText[];
  suitability: TitledText[];
  aidNumber: string;
  diagnoses: string;
  faqs: QuestionAnswer[];
};

export type FaqCategory = "Allgemein" | "Milchpumpen" | "Beckenbodentrainer" | "Kostenübernahme";

export type Faq = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  visible: boolean;
  order: number;
};

/** Partner logos are shown WITHOUT external links (business rule). */
export type Partner = {
  id: string;
  name: string;
  logo: string | null;
  visible: boolean;
};

export type Webinar = {
  id: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  time: string;
  title: string;
  product: string;
  topic: string;
  host: string;
  platform: string;
  url: string;
  registrationRequired: boolean;
};

export type Flyer = {
  id: string;
  title: string;
  description: string;
  image: string;
  pdfUrl: string | null;
  format: "PDF";
};

export type ProDocumentType = "study" | "flyer" | "ifu" | "certificate";

export type ProDocument = {
  id: string;
  productId: string;
  type: ProDocumentType;
  title: string;
  pdfUrl: string | null;
  loginRequired: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  product: string;
  initials: string;
  audience: "patient" | "professional";
};

export type PrescriberInfo = {
  productId: string;
  name: string;
  typeLabel: string;
  image: string;
  aidNumber: string;
  diagnoses: string[];
  href: string;
};

export type LegalPage = {
  slug: string;
  title: string;
  lines: string[];
  /** true = placeholder text, final legal copy pending. */
  draft: boolean;
};

export type ProUser = {
  email: string;
  name: string;
};
