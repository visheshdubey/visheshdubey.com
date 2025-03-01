import "../globals.css";

import CloudGradient from "../_comps/ui/CloudGradient";
import Footer from "@/features/navigation/comps/footer";
import HomeHeader from "../_comps/navigation/HomeHeader";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { seoMeta } from "@/data/content-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = seoMeta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        data-spy="scroll"
        data-target="#navbar"
        data-offset="100"
        className={`${inter.className} relative transition-all ease-in-out duration-300`}
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
