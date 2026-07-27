import Reveal from "./Reveal";

const COMPANIES = [
  { name: "LendAPI", note: "Fintech · US" },
  { name: "PrashantAdvait Foundation", note: "Ed-tech · India" },
  { name: "Accenture", note: "Enterprise · Global" },
];

const METRICS = [
  { value: "1M+", label: "daily users on file infrastructure I helped run" },
  { value: "7,000+", label: "students in one online exam sitting" },
  { value: "30%", label: "checkout conversion bump from referral work I shipped" },
];

export default function ProofBar() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-8">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-12 gap-y-4 border-t border-border/60 pt-8">
          {COMPANIES.map((company) => (
            <p key={company.name} className="text-sm tracking-tight text-foreground/80">
              {company.name}
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">
                {company.note}
              </span>
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-8 pb-8 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div key={metric.value}>
              <p className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">{metric.value}</p>
              <p className="mt-2 max-w-[26ch] text-xs leading-relaxed text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
