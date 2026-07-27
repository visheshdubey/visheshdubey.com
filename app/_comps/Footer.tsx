export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Vishesh Kumar Dubey</p>
        <p className="font-mono uppercase tracking-[0.15em]">Noida, India · Works remote</p>
        <a href="#home" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
