import "./globals.css";

import { Instrument_Serif, Inter } from "next/font/google";

import Footer from "./_comps/Footer";
import type { Metadata } from "next";
import Nav from "./_comps/Nav";
import { seoMeta } from "@/data/content-seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = seoMeta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans bg-background text-foreground antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
