import HomeHeader from "@/components/header/HomeHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Copyright } from "lucide-react";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        data-spy="scroll"
        data-target="#navbar"
        data-offset="100"
        className={`${poppins.className} relative transition-all ease-in-out duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="sticky -z-10 top-0">
            <div className="-top-16 md:-top-32 right-16 md:right-32 absolute h-48 w-1/2 blur-[80px] rounded-full bg-fuchsia-500"></div>
            <div className="-top-16 md:-top-32 left-16 md:left-32 absolute h-48 w-1/2 blur-[80px] rounded-full bg-blue-500"></div>
          </div>
          <HomeHeader></HomeHeader>
          {children}
          <footer className="max-w-7xl w-full mx-auto flex flex-wrap p-8 justify-center md:justify-between gap-8 items-center ">
            <div className="flex gap-8 justify-center md:justify-between items-center flex-wrap">
              <span className="flex gap-2 items-center text-sm">
                © visheshdubey, 2023
              </span>
              <div className="flex gap-4">
                <a
                  href="http://#"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <Github className={` w-5 stroke-muted-foreground`} />
                </a>
                <a
                  href="http://#"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <Linkedin className="w-5 stroke-muted-foreground" />
                </a>
                <a
                  href="http://#"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <Twitter className="w-5 stroke-muted-foreground" />
                </a>
                <a
                  href="http://#"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <Mail className="w-5 stroke-muted-foreground" />
                </a>
              </div>
            </div>
            <span className="text-muted-foreground">
              Iterate.Innovate.Inspire!
            </span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
