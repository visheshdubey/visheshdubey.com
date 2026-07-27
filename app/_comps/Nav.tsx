"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { socialLinks } from "@/data/content-social-links";

const NAV_LINKS = [
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "border-b border-border/60 bg-background/70 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="/#home" className="text-sm font-medium tracking-tight" onClick={closeMenu}>
          visheshdubey<span className="text-brand">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
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
            className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-brand hover:text-brand"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[calc(100svh-4rem)] opacity-100" : "max-h-0 border-b-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={socialLinks.email}
            onClick={closeMenu}
            className="mt-2 rounded-full border border-border px-4 py-2.5 text-center text-sm transition-colors hover:border-brand hover:text-brand"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
