import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Intro } from "@/components/layout/intro";
import { Nav } from "@/components/layout/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luxora Estates — Patrimonios de excepción",
    template: "%s · Luxora Estates",
  },
  description:
    "Una práctica privada que representa las residencias más extraordinarias del mundo. Rigor arquitectónico, servicio discreto y representación off-market.",
  metadataBase: new URL("https://luxora-estates.vercel.app"),
  openGraph: {
    title: "Luxora Estates",
    description: "Patrimonios de excepción.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <Intro />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
