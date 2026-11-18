// Company facts and static page copy (German, Lektorat-approved — do not rewrite).

export const company = {
  name: "Medizintechnik Kaasen GmbH",
  street: "Zum Gewerbepark 4",
  zip: "44532",
  city: "Lünen",
  country: "DE",
  phoneDisplay: "02306 30609-0",
  phoneInternational: "+49 2306 30609-0",
  phoneHref: "tel:+492306306090",
  faxDisplay: "02306 30609-29",
  email: "medizintechnik@kaasen.de",
  prescriptionEmail: "bb@kaasen.de",
  managingDirector: "Rita Kaasen",
  register: "Amtsgericht Dortmund, HRB 22411",
  vatId: "DE 267231607",
  foundedYear: 2005,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.medizintechnik-kaasen.de",
  social: {
    facebook: "https://facebook.com/kaasen",
    instagram: "https://instagram.com/kaasen",
  },
} as const;

/** Mon–Thu 08:00–17:00, Fri 08:00–16:00 (business rule). */
export const openingHours = {
  short: "Mo–Do 8:00–17:00 · Fr 8:00–16:00",
  long: "Mo–Do 8:00–17:00 Uhr · Fr 8:00–16:00 Uhr",
  lines: ["Mo–Do 8:00–17:00 Uhr", "Fr 8:00–16:00 Uhr"],
  schema: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "17:00" },
    { days: ["Friday"], opens: "08:00", closes: "16:00" },
  ],
} as const;

export const externalLinks = {
  prescriptionStatus: "https://rezept.kaasen.de",
  prescriptionStatusLabel: "rezept.kaasen.de",
  nextcloudUpload:
    process.env.NEXT_PUBLIC_NEXTCLOUD_UPLOAD_URL ??
    "https://nextcloud.kaasen.de/index.php/s/n6CBiiSMew9knW4",
  mapEmbed:
    "https://maps.google.com/maps?q=Medizintechnik%20Kaasen%2C%20Zum%20Gewerbepark%204%2C%2044532%20L%C3%BCnen&z=15&output=embed",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Ihr Anliegen", href: "/#kIntent" },
  { label: "Produkte", href: "/produkte" },
  { label: "Shop", href: "/shop" },
  { label: "Über uns", href: "/#kHaus" },
];

export const mobileNav: NavItem[] = [
  { label: "Ihr Anliegen", href: "/#kIntent" },
  { label: "Produkte", href: "/produkte" },
  { label: "Shop", href: "/shop" },
  { label: "Über uns", href: "/#kHaus" },
  { label: "Kontakt", href: "/#kKontakt" },
];

export type IntentIcon = "upload" | "pump" | "cart" | "phone" | "pulse";
export type IntentTone = "blue" | "white" | "lavender" | "dark";
export type IntentIconTone = "yellow" | "lavender" | "blue";

export type Intent = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: IntentIcon;
  tone: IntentTone;
  iconTone: IntentIconTone;
};

export const intents: Intent[] = [
  {
    title: "Rezept einreichen",
    description: "Laden Sie Ihre Verordnung einfach hier hoch – wir kümmern uns um alles Weitere.",
    cta: "Jetzt hochladen",
    href: "/#kRezept",
    icon: "upload",
    iconTone: "yellow",
    tone: "blue",
  },
  {
    title: "Klinik-Milchpumpe für zu Hause mieten",
    description:
      "Wenn Stillen nicht wie geplant möglich ist, unterstützt Sie eine Milchpumpe auf Klinikniveau zuverlässig im Alltag.",
    cta: "Online bestellen",
    href: "/#kMilchpumpe",
    icon: "pump",
    iconTone: "lavender",
    tone: "white",
  },
  {
    title: "Stärken Sie Ihren Beckenboden",
    description: "Entdecken Sie unsere Lösungen für den Beckenboden und bestellen Sie bequem online.",
    cta: "Zum Shop",
    href: "/#kProdukte",
    icon: "cart",
    iconTone: "yellow",
    tone: "white",
  },
  {
    title: "Persönliche Beratung",
    description:
      "Sie haben Fragen zu unseren Produkten oder zur Kostenübernahme durch Ihre Krankenkasse? Wir beraten Sie gerne telefonisch.",
    cta: "Anrufen · Mailen",
    href: "/#kKontakt",
    icon: "phone",
    iconTone: "blue",
    tone: "lavender",
  },
  {
    title: "Für Fachpersonen",
    description:
      "Sie sind medizinische Fachperson? Hier finden Sie Informationen und passende Lösungen für Ihren beruflichen Bedarf.",
    cta: "Fachbereich",
    href: "/fachbereich",
    icon: "pulse",
    iconTone: "yellow",
    tone: "dark",
  },
];

export const hero = {
  badge: "Zugelassen für alle Krankenkassen",
  titleStart: "Wie möchten Sie",
  titleHighlight: "versorgt",
  titleEnd: "werden?",
  intro: "Wählen Sie Ihr Thema. Wir zeigen Ihnen die passenden Lösungen für Ihre Gesundheit.",
  image: "/images/media/hero-symphony-stillen.jpg",
  imageAlt: "Leih-Milchpumpe Medela Symphony zuhause",
  imageBadge: "Seit 2005",
} as const;

export const breastPump = {
  eyebrow: "Leih-Milchpumpe · Onlinebestellung",
  titleStart: "Klinik-Milchpumpe",
  titleHighlight: "für zuhause",
  steps: ["Formular ausfüllen", "Bestätigung per Mail", "Liefertermin per Telefon"],
  openLabel: "Jetzt online bestellen",
  closeLabel: "Schließen",
  intro:
    "Die Bestellung läuft ganz einfach: Formular ausfüllen und absenden. Nach dem Absenden prüfen wir Ihre Angaben und geben die Bestellung an unseren Außendienst weiter. Gleichzeitig erhalten Sie eine Bestätigung per Mail. Der Außendienst meldet sich telefonisch, um einen Liefertermin mit Ihnen zu vereinbaren.",
  importantNote:
    "Bitte immer die Daten der Mutter eintragen – auch wenn jemand anderes bestellt. Eine abweichende Lieferadresse oder Telefonnummer kann im Nachrichtenfeld angegeben werden.",
  noPrescriptionUpload:
    "Bitte kein Rezept hochladen — Milchpumpen-Rezepte benötigen wir im Original.",
  confirmationIntro:
    "Unsere Bestätigung erhalten Sie üblicherweise innerhalb einiger Minuten, spätestens aber in diesen Zeitfenstern:",
  confirmationWindows: [
    { label: "Unter der Woche 9:00–17:00 Uhr:", text: "innerhalb von 30 Minuten" },
    { label: "Am Wochenende/an Feiertagen 9:00–16:00 Uhr:", text: "innerhalb einer Stunde" },
    {
      label: "Nach 17:00 Uhr (werktags) oder nach 16:00 Uhr (Wochenende/Feiertage):",
      text: "am nächsten Morgen bis 9:00 Uhr",
    },
  ],
  questions: "Noch Fragen? Unser Außendienst ist gern für Sie da, wenn er sich zur Absprache der Lieferung meldet – oder rufen Sie uns an:",
  successTitle: "Vielen Dank für Ihre Bestellung.",
  successText:
    "Sie erhalten in Kürze eine Bestätigung per Mail. Unser Außendienst meldet sich telefonisch für den Liefertermin.",
} as const;

export type NoteBlock =
  | { kind: "text"; strong?: string; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "heading"; text: string };

export type BreastPumpNote = { title: string; blocks: NoteBlock[] };

export const breastPumpNotes: BreastPumpNote[] = [
  {
    title: "Kostenübernahme durch Ihre Krankenkasse",
    blocks: [
      {
        kind: "text",
        strong: "Gesetzlich versichert?",
        text: "Wir rechnen direkt mit Ihrer Krankenkasse ab – Sie brauchen nur die Verordnung (Rezept). Die Erstverordnung stellt oft die Klinik aus, Folgerezepte gibt’s bei:",
      },
      { kind: "list", items: ["Frauenärzt:innen", "Kinderärzt:innen", "Hausärzt:innen"] },
      {
        kind: "text",
        strong: "Wichtig:",
        text: "Um Kosten für Sie zu vermeiden, muss die Mietzeit durchgehend mit Rezepten abgedeckt sein. Wir erinnern Sie automatisch 7 Tage vor Ablauf eines Rezepts per Mail und bestätigen den Eingang jedes neuen Rezepts samt Laufzeit.",
      },
      {
        kind: "text",
        strong: "Privat versichert?",
        text: "Sie erhalten nach Rückgabe der Pumpe eine Rechnung zur Einreichung bei Ihrer Kasse. Achten Sie bitte ebenfalls auf eine lückenlose Abdeckung der gesamten Mietzeit durch Rezepte.",
      },
    ],
  },
  {
    title: "Zubehör – das ist dabei",
    blocks: [
      {
        kind: "text",
        text: "Die meisten gesetzlichen Krankenkassen sehen ein Zubehörset als ausreichend an. Wir liefern dennoch zwei Sets – denn viele Stillberatungen, Hebammen und auch Familien wünschen das zweite Set.",
      },
      { kind: "heading", text: "Gut zu wissen:" },
      {
        kind: "list",
        items: [
          "Ist das zweite Set originalverpackt, können Sie es kostenlos zurückgeben.",
          "Ist es geöffnet, berechnen wir dafür 28,90 € privat.",
          "Standardmäßig liefern wir Brusthauben in Größe M – wenn Sie eine andere Größe benötigen, tragen Sie diese bitte im Textfeld bei der Bestellung ein.",
          "Die Kostenübernahme für Brusthauben ist je nach Kasse unterschiedlich geregelt – manche übernehmen die Kosten vollständig, maximal können 13,80 € anfallen.",
        ],
      },
    ],
  },
  {
    title: "Kaution",
    blocks: [
      {
        kind: "text",
        text: "Für die Ausleihe der Pumpe erheben wir eine Kaution in Höhe von 50 €. Diese überweisen Sie ganz bequem – alle Informationen dazu finden Sie in Ihrer Bestellbestätigung. Nach Rückgabe der Pumpe und Abschluss der Prüfung erstatten wir Ihnen die Kaution vollständig zurück, sofern keine offenen Kosten entstanden sind.",
      },
    ],
  },
  {
    title: "Rückgabe",
    blocks: [
      {
        kind: "text",
        strong: "Rückgabe leicht gemacht:",
        text: "Sie schicken die Pumpe einfach zurück – das Porto übernehmen Sie. Wir stellen Ihnen einen DHL-QR-Code zur Verfügung für den einfachen Versand oder zur Paketabholung.",
      },
      {
        kind: "text",
        text: "Je nach Region kann die Pumpe auch zurückgebracht oder neben dem Lieferdienst abgeholt werden. Sprechen Sie dafür einfach unsere Mitarbeitenden vor Ort an.",
      },
    ],
  },
];

export const prescription = {
  eyebrow: "Hilfsmittel auf Rezept",
  title: "Rezept einreichen.",
  intro:
    "Laden Sie Ihre ärztliche Verordnung einfach online hoch. So können wir Ihre Anfrage schnell bearbeiten.",
  breastPumpNoticeTitle: "Nicht für Milchpumpen",
  steps: [
    "Formular absenden — Geben Sie Ihr Produkt und Ihre Kontaktdaten an.",
    "Rezept hochladen — Sie werden direkt zu unserer Nextcloud-Seite weitergeleitet (Serverstandort: Deutschland).",
    "Fertig — Wir stimmen uns mit Ihrer Krankenkasse ab und informieren Sie per E-Mail über den aktuellen Stand.",
  ],
  originalNote:
    "Das Originalrezept benötigen wir zusätzlich per Post. Der digitale Upload beschleunigt die Bearbeitung. Rezepte per Fax können wir leider nicht annehmen.",
  coverage: {
    title: "Mögliche Kassenleistung",
    listedLabel: "Gelistete Hilfsmittel",
    listed: ["Emy by Fizimed", "Perifit Care+", "restifem Stützpessar"],
    unlistedLabel: "Nicht gelistete Hilfsmittel",
    unlisted: ["Apelvo", "Acticore", "Emagina"],
    saleLabel: "Ausschließlich Verkauf",
    saleText:
      "Alle Produkte, die nicht unter gelistete oder nicht gelistete Hilfsmittel fallen, werden nicht von der Krankenkasse übernommen.",
    sale: ["Milchpumpen & Zubehör", "Gleitgel", "Desinfektion & Pflege", "Pulsoximeter"],
    explainLabel: "Was heißt das?",
    explain: [
      {
        term: "Gelistet:",
        tone: "yellow",
        text: "Das Hilfsmittel steht im Hilfsmittelverzeichnis der Krankenkassen. Mit Rezept wird es mit hoher Wahrscheinlichkeit übernommen.",
      },
      {
        term: "Nicht gelistet:",
        tone: "lavender",
        text: "Kann ärztlich verordnet werden. Ob die Krankenkasse die Kosten übernimmt, ist fraglich — wir prüfen das für Sie.",
      },
      {
        term: "Ausschließlich Verkauf:",
        tone: "cream",
        text: "Alle Produkte, die nicht unter gelistete oder nicht gelistete Hilfsmittel fallen, werden nicht von der Krankenkasse übernommen. Sie können sie direkt bei uns kaufen.",
      },
    ],
  },
  /** Options of the "Für welches Produkt?" select. Breast pumps are deliberately excluded. */
  productOptions: [
    "Emy by Fizimed",
    "Perifit Care+",
    "restifem Stützpessar",
    "Apelvo",
    "Acticore",
    "Emagina",
    "TheraPee",
    "Anderes Hilfsmittel",
  ],
  formEyebrow: "Schritt 1 von 2 · Ihre Angaben",
  formTitle: "Rezept einreichen",
  submitLabel: "Weiter zum Rezept-Upload",
  uploadEyebrow: "Schritt 2 von 2 · Rezept hochladen",
  uploadTitle: "Danke — jetzt Rezept hochladen.",
  uploadText:
    "Ihre Angaben sind bei uns eingegangen. Laden Sie Ihr Rezept jetzt auf unserer Nextcloud hoch — verschlüsselt, Serverstandort Deutschland.",
  uploadCta: "Zur Nextcloud-Upload-Seite",
  uploadHint: "Die Upload-Seite öffnet sich in einem neuen Tab.",
} as const;

export const prescriptionValidity = {
  eyebrow: "Milchpumpe im Verleih?",
  title: "Rezeptlaufzeit & Folgeverordnung prüfen.",
  text: "Behalten Sie alles im Blick: Verfolgen Sie den Status Ihres Rezepts, Ihre Mietdauer und ob eine Folgeverordnung erforderlich ist – jederzeit unter",
  cta: "Rezeptstatus prüfen",
} as const;

export const insuranceSection = {
  eyebrow: "Kostenübernahme & Beratung",
  title: "Kostenübernahme & persönliche Beratung",
  textStart:
    "Wir unterstützen Sie bei Fragen zur Kostenübernahme durch Ihre Krankenkasse und rechnen als zugelassener Leistungserbringer direkt mit ihr ab. Sie haben Fragen? Wir beraten Sie gerne telefonisch oder per E-Mail –",
  textStrong: "ganz ohne Termin",
  faqCategories: ["Alle", "Allgemein", "Milchpumpen", "Beckenbodentrainer", "Kostenübernahme"],
} as const;

export const about = {
  eyebrow: "Über uns",
  titleStart: "Gesundheit verdient",
  titleHighlight: "gute Beratung",
  text: "Seit 2005 unterstützen wir Menschen mit passenden medizinischen Hilfsmitteln und persönlicher Beratung. Ob Stillzeit, Beckenbodengesundheit oder weitere sensible Gesundheitsthemen – wir nehmen jedes Anliegen ernst und helfen Ihnen, die passende Lösung zu finden.",
  image: "/images/das-haus-mutter-mit-neugeborenem.jpg",
  imageAlt: "Mutter mit Neugeborenem",
  quoteLabel: "Markenkern",
  quote:
    "Wir hören zu, beraten verständlich und finden gemeinsam passende Lösungen. Offen, persönlich und auf Augenhöhe.",
  quoteCaption: "Unsere Haltung",
} as const;

export const tickerItems = [
  "Emy Trainer",
  "Perifit",
  "Apelvo",
  "Emagina",
  "restifem",
  "TheraPee",
  "Medela Symphony",
  "Ardo Carum",
  "MAPLe",
  "Pelvic Tool",
];

export const contactSection = {
  eyebrow: "Kontakt",
  title: "Wir freuen uns, von Ihnen zu hören.",
  topics: [
    "Milchpumpe mieten",
    "Beckenboden",
    "Rezept einreichen",
    "Kostenübernahme",
    "Fachpersonen · Demo",
    "Sonstiges",
  ],
} as const;

export const footer = {
  descriptionStrong: "Innovative Medizinprodukte für die Frauen- und Männergesundheit.",
  description:
    "Familienunternehmen aus Lünen mit Lösungen für Frauengesundheit, Stillzeit, Beckenboden sowie Kinder- und Männergesundheit – persönlich beraten und mit Unterstützung bei der Kostenübernahme durch die Krankenkasse.",
  phone: "Tel. 02306 30 60 90",
  fax: "Fax 02306 30 60 929",
  columns: [
    {
      title: "Privatpersonen",
      links: [
        { label: "Rezept einreichen", href: "/#kRezept" },
        { label: "Milchpumpe mieten", href: "/#kMilchpumpe" },
        { label: "Shop", href: "/shop" },
      ],
    },
    {
      title: "Fachpersonen",
      links: [
        { label: "Klinik & Praxis", href: "/fachbereich" },
        { label: "MAPLe · Kauf/Leasing", href: "/fachbereich#fProdukte" },
        { label: "Schulungen", href: "/fachbereich#fWebinare" },
        { label: "Außendienst kontaktieren", href: "/#kKontakt" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
        { label: "Widerrufsbelehrung", href: "/widerrufsbelehrung" },
        { label: "Versand & Zahlung", href: "/versand" },
      ],
    },
  ],
  copyright: "© 2026 Medizintechnik Kaasen GmbH · Zugelassener Leistungserbringer",
  madeIn: "Made with care in Lünen",
} as const;

/** "So erhalten Sie … als Kassenleistung" — shared by every product page. */
export const careSteps = [
  { title: "Verordnung erhalten", text: "Ihre Ärztin oder Ihr Arzt stellt das Rezept aus.", uploadLink: false },
  { title: "Verordnung online hochladen", text: "Formular ausfüllen, dann Upload über unsere Nextcloud.", uploadLink: true },
  { title: "Prüfung Kostenvoranschlag", text: "Wir reichen den Kostenvoranschlag bei Ihrer Krankenkasse ein.", uploadLink: false },
  { title: "Rückmeldung", text: "Sie erhalten Bescheid — und Ihr Produkt kommt zu Ihnen.", uploadLink: false },
];

export const shop = {
  eyebrow: "Shop · babybeat",
  titleStart: "Direkt",
  titleHighlight: "bestellen",
  intro:
    "Produkte ohne Kassenleistung — rund ums Stillen, Abpumpen und die erste Zeit mit Baby. Alle Preise inkl. MwSt., zzgl. Versandkosten.",
  freeShippingThreshold: 100,
  freeShippingNote: "Versandkostenfrei ab 100 €",
} as const;

export const productCatalog = {
  eyebrow: "Sortiment",
  titleStart: "Produkte nach",
  titleHighlight: "Anwendungsbereich",
  intro: "Wählen Sie Ihr Thema und entdecken Sie passende Produkte.",
  shopLink: "Produkte ohne Kassenleistung im Shop →",
  filters: ["Alle", "Milchpumpen", "Schwangerschaft", "Beckenboden", "Kinder", "Männergesundheit", "Zubehör"],
  featuredTitleStart: "Ausgewählte",
  featuredTitleHighlight: "Produkte",
  featuredCta: "Alle Produkte ansehen",
} as const;
