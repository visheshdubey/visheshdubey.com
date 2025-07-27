import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/app/_comps/Header";
// import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://visheshdubey.com/"),
    alternates: {
        canonical: "/",
    },
    title: {
        default: "Vishesh Dubey - Personal website",
        template: "%s | Vishesh Dubey",
    },
    description: "Vishesh Dubey is a software engineer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}>
                <ThemeProvider enableSystem={true} attribute="class" storageKey="theme" defaultTheme="system">
                    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
                        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                            <Header />
                            {children}
                            {/* <Footer /> */}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
