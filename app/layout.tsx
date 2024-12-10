import "./globals.css";

import { Inter, Poppins } from "next/font/google";

import CloudGradient from "./_comps/ui/CloudGradient";
import Footer from "./_comps/layouts/Footer";
import HomeHeader from "./_comps/navigation/HomeHeader";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { seoMeta } from "@/data/content-seo";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = seoMeta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>
          {` .font-poppins {
            font-family: ${poppins.style.fontFamily};
          }`}
        </style>
      </head>
      <body
        data-spy="scroll"
        data-target="#navbar"
        data-offset="100"
        className={`_${poppins.className} ${inter.className} relative transition-all ease-in-out duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CloudGradient />
          <HomeHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
