// Fachbereich (healthcare professionals) copy and quick prescriber info.
// Aid numbers (Hilfsmittelnummern) from docs/rehadat/.
import type { PrescriberInfo } from "@/lib/types";

export const prescriberInfos: PrescriberInfo[] = [
  {
    productId: "perifit-care-plus",
    name: "Perifit Care+",
    typeLabel: "Biofeedbackgerät mit Vaginalsensor",
    image: "/images/media/perifit-care.png",
    aidNumber: "15.25.19.2002",
    diagnoses: ["Stressinkontinenz", "Mischinkontinenz", "Dranginkontinenz"],
    href: "/produkte/perifit-care-plus",
  },
  {
    productId: "emy-by-fizimed",
    name: "Emy by Fizimed",
    typeLabel: "Biofeedbackgerät mit Vaginalsensor",
    image: "/images/media/emy.jpg",
    aidNumber: "15.25.19.2027",
    diagnoses: ["Stressinkontinenz", "Mischinkontinenz", "Dranginkontinenz"],
    href: "/produkte/emy-by-fizimed",
  },
  {
    productId: "restifem-stuetzpessar",
    name: "restifem",
    typeLabel: "Stützpessar",
    image: "/images/media/restifem.jpg",
    aidNumber: "15.25.21.0098",
    diagnoses: ["Stressinkontinenz", "Beckenbodensenkung"],
    href: "/produkte/restifem-stuetzpessar",
  },
];

export const proNav = [
  { label: "Verordnung", href: "#fVerordnung" },
  { label: "Produkte", href: "#fProdukte" },
  { label: "Webinare", href: "#fWebinare" },
  { label: "Kontakt", href: "#fKontakt" },
];

export const proBanner = {
  eyebrow: "Für Fachpersonen · Ärzt:innen · Hebammen · Physiotherapie",
  titleStart: "Hilfsmittel verordnen —",
  titleHighlight: "klar und schnell",
  intro: "Hilfsmittelnummern, Produktinfos, Flyer und Webinare für Ihre Praxis — gebündelt an einem Ort.",
  actions: [
    { number: "01", title: "Infos für Verordnende", text: "Hilfsmittelnummer & Diagnosen auf einen Blick", target: "#fVerordnung" },
    { number: "02", title: "Webinare", text: "Termine im Kalender, mit Anmeldung", target: "#fWebinare" },
    { number: "03", title: "Produktinfos / Flyer", text: "Downloads für Praxis und Patient:innen", target: "flyers" },
    { number: "04", title: "Produkte", text: "Alle Hilfsmittel mit Zubehör", target: "#fProdukte" },
  ],
} as const;

export const proGate = {
  question: "Sind Sie eine Fachperson?",
  text: "Dieser Bereich richtet sich an medizinische Fachpersonen, z. B. Ärzt:innen, Hebammen und Physiotherapeut:innen.",
  no: "Nein",
  yes: "Ja, ich bin Fachperson",
  hint: "Mit „Nein“ gelangen Sie zur Website für Privatpersonen.",
  loadingTitle: "Fachbereich wird geladen …",
  loadingText: "Infos, Produkte und Webinare für Fachpersonen",
  /** Business rule: 5 s loading screen after "Ja". */
  loadingMs: 5000,
} as const;

export const proLogin = {
  title: "Login für Fachpersonen",
  text: "Nach dem Login sehen Sie Fachpersonenpreise und können Studien, Flyer, Gebrauchsanweisungen und CE-Dokumente herunterladen.",
  forgotSent: "Wir haben Ihnen einen Link zum Zurücksetzen per E-Mail geschickt.",
  registerTitle: "Zugang beantragen",
  registerHint: "Wir prüfen Ihre Angaben und schalten den Zugang in der Regel innerhalb von 1–2 Werktagen frei.",
  pendingTitle: "Danke, Ihre Anfrage ist eingegangen.",
  pendingText: "Sobald wir Ihre Angaben geprüft haben, erhalten Sie Ihre Zugangsdaten per E-Mail.",
  skip: "Ohne Login weiter",
  demoHint: "Demo-Zugang: demo@kaasen.de / kaasen2026",
} as const;
