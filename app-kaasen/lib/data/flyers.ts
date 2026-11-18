// Printed flyers (order form) and public flyer downloads in the Fachbereich drawer.
// PDFs are pending — `pdfUrl: null` renders a disabled download.
import type { Flyer } from "@/lib/types";

export const flyers: Flyer[] = [
  { id: "f1", title: "Smarte Beckenbodentrainer für Frauen", description: "Perifit Care+, Emy", image: "/images/media/perifit-care.png", pdfUrl: null, format: "PDF" },
  { id: "f2", title: "Beckenbodentraining in der Schwangerschaft", description: "Apelvo", image: "/images/media/apelvo.jpg", pdfUrl: null, format: "PDF" },
  { id: "f3", title: "Smarte Beckenbodentrainer für Männer", description: "Apelvo, Acticore, Pelvic Tool", image: "/images/media/alonea-pelvic-tool.jpg", pdfUrl: null, format: "PDF" },
  { id: "f4", title: "MAPLe Praxisgerät", description: "Patientenflyer", image: "/images/media/maple.jpg", pdfUrl: null, format: "PDF" },
  { id: "f5", title: "MAPLe Praxisgerät", description: "Fachpersonenflyer", image: "/images/media/maple.jpg", pdfUrl: null, format: "PDF" },
  { id: "f6", title: "Emagina Dammvorbereitung", description: "Patientenflyer", image: "/images/media/emagina.webp", pdfUrl: null, format: "PDF" },
  { id: "f7", title: "Emagina Dammvorbereitung", description: "DIN A4 mit Studienergebnissen", image: "/images/media/emagina.webp", pdfUrl: null, format: "PDF" },
];
