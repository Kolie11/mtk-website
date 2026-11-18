import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { company } from "@/lib/data/site";
import "./globals.css";

// Montserrat (variable 400–800, latin) self-hosted via next/font — no request to Google at build or runtime.
const montserrat = localFont({
  src: "./fonts/montserrat-latin-variable.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Medizintechnik Kaasen — Hilfsmittel, die tragen",
    template: "%s | Medizintechnik Kaasen",
  },
  description:
    "Medizintechnik Kaasen, Lünen: Hilfsmittel für Beckenboden, Schwangerschaft, Stillzeit und Männergesundheit. Rezept einreichen, Milchpumpe mieten, persönliche Beratung.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Medizintechnik Kaasen",
    images: [{ url: "/images/media/hero-symphony-stillen.jpg", width: 640, height: 640, alt: "Medizintechnik Kaasen" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#141c5c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
