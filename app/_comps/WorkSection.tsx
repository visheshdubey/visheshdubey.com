import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type CaseStudy = {
  company: string;
  period: string;
  pull: string;
  pullNote: string;
  title: string;
  problem: string;
  ownership: string;
  decisions: string;
  outcome: string;
  stack: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    company: "LendAPI",
    period: "2025 to present",
    pull: "Django → React",
    pullNote: "full replatform, product stayed live",
    title: "Replatforming a live lending product",
    problem:
      "The frontend ran on Django templates. New features were slow to ship, hard to hire for, and every screen felt like a one-off.",
    ownership:
      "I wrote the migration plan and led the move to React, TypeScript, and Vite. We swapped modules one at a time while customers kept using the product.",
    decisions:
      "Shared components on Radix and Tailwind so every migrated screen landed on the same system. Drag-and-drop form builders, node-based workflow editors, spreadsheet grids, all wired with TanStack Query. Code splitting and lazy routes to cut bundle size.",
    outcome:
      "Auth, documents, notifications, and reporting are all on the new stack now. The team ships on a frontend they can actually extend.",
    stack: "React · TypeScript · Vite · Radix UI · Tailwind · XYFlow · TanStack Query · Django REST",
  },
  {
    company: "PrashantAdvait Foundation",
    period: "2024 to 2025",
    pull: "7,000+",
    pullNote: "students, one sitting · India Book of Records",
    title: "India's largest online Gita exam",
    problem:
      "Thousands of students had to register, pay, and sit a timed exam in a single go. Exam day couldn't break.",
    ownership:
      "I owned the SvelteKit frontend. Checkout, referral, CMS, and LMS flows, plus admin dashboards that 120+ internal staff used daily.",
    decisions:
      "SSR and on-page SEO that grew organic traffic about 40%. Small reusable components with Flux-style state so we could ship exam-day fixes without breaking checkout.",
    outcome:
      "7,000+ students in one sitting, recognized by the India Book of Records. Checkout and referral changes bumped conversion 30%.",
    stack: "SvelteKit · Redux · Highcharts · Tailwind",
  },
  {
    company: "Accenture",
    period: "2022 to 2024",
    pull: "1M+",
    pullNote: "daily users, two years in production",
    title: "File infrastructure at retail scale",
    problem:
      "A Swedish retail client moving files across systems serving over a million users a day. Slow or dropped transfers meant broken operations downstream.",
    ownership:
      "Built the SFTP/FTP file manager (React up front, Azure Function Apps behind it) and carried on-call for the integration platform.",
    decisions:
      "Event-driven services on Azure WebApps. Caching, batching, and parallel processing where throughput actually mattered.",
    outcome: "Ran at 1M+ daily users for two years. File ops became something nobody had to babysit.",
    stack: "React · Azure Functions · Event-driven microservices",
  },
];

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-28 lg:px-8 md:py-40">
      <SectionHeading index="01" title="Selected work" meta={`(${String(CASE_STUDIES.length).padStart(2, "0")})`} />

      <div className="mt-20 flex flex-col gap-28 md:mt-28 md:gap-40">
        {CASE_STUDIES.map((study, i) => (
          <Reveal key={study.company}>
            <article className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-last md:text-right" : ""}`}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {study.company} <span className="text-muted-foreground/50">· {study.period}</span>
                </p>
                <p className="mt-6 font-serif text-[clamp(3rem,6vw,4.75rem)] leading-none tracking-tight text-brand">
                  {study.pull}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{study.pullNote}</p>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-serif text-3xl tracking-tight md:text-4xl">{study.title}</h3>

                <div className="mt-8 flex flex-col gap-6">
                  <CaseBlock label="The problem" text={study.problem} />
                  <CaseBlock label="My part" text={study.ownership} />
                  <CaseBlock label="The calls made" text={study.decisions} />
                  <CaseBlock label="Outcome" text={study.outcome} />
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                  {study.stack}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
