"use client";

import { useEffect, useState } from "react";

import { socialLinks } from "@/data/content-social-links";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
  { href: "/#skills", label: "Skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="/#home" className="text-sm font-medium tracking-tight">
          visheshdubey<span className="text-brand">.</span>
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={socialLinks.email}
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-brand hover:text-brand sm:block"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
