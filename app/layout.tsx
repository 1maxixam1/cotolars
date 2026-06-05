import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "COTOLAR — Colegio de Terapia Ocupacional de La Rioja",
    template: "%s | COTOLAR",
  },
  description:
    "Organismo oficial que regula, habilita y fiscaliza el ejercicio profesional de la Terapia Ocupacional en la provincia de La Rioja, Argentina.",
  keywords: [
    "terapia ocupacional",
    "La Rioja",
    "COTOLAR",
    "matrícula profesional",
    "colegio profesional",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "COTOLAR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-800`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

