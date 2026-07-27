import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CAPABILITIES = [
  {
    title: "Understand the product",
    text: "Start from the problem and the user. Turn Figma, notes, and ambiguity into shippable scope.",
    stack: "Figma · product analytics",
  },
  {
    title: "Design the system",
    text: "Component libraries and data-heavy UIs built so the second feature costs less.",
    stack: "Radix UI · Tailwind · XYFlow · TanStack Query · Redux",
  },
  {
    title: "Ship and keep it fast",
    text: "SSR, code splitting, caching. Speed is part of the product.",
    stack: "React · Next.js · SvelteKit · Vite · Django · Azure Functions",
  },
  {
    title: "Help the team move faster",
    text: "Shared libraries, migration notes, AI workflows in the repo.",
    stack: "TypeScript · Playwright · Docker · Git",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="mx-auto w-full max-w-6xl px-6 pb-28 lg:px-8 md:pb-40">
      <SectionHeading index="04" title="How I work" />

      <div className="mt-16 grid gap-x-12 gap-y-14 md:mt-24 md:grid-cols-2">
        {CAPABILITIES.map((capability, i) => (
          <Reveal key={capability.title} delay={(i % 2) * 0.08}>
            <div className="flex flex-col gap-4 border-l border-border/60 pl-6">
              <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{capability.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{capability.text}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                {capability.stack}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
