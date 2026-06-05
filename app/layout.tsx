import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

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
        <Navbar />
        <main className="pt-[calc(2.5rem+4rem)]">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
