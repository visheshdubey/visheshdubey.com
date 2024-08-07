import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import CloudGradient from "./_comps/ui/CloudGradient";
import Footer from "./_comps/layouts/Footer";
import HomeHeader from "./_comps/navigation/HomeHeader";
import { seoMeta } from "@/data/content-seo";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = seoMeta;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        data-spy="scroll"
        data-target="#navbar"
        data-offset="100"
        className={`${poppins.className} relative transition-all ease-in-out duration-300`}
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
