import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SIGNALS = [
  {
    text: "India Book of Records for the largest online Gita exam. 7,000+ students in one sitting.",
    source: "PrashantAdvait Foundation, 2024",
  },
  {
    text: "A US fintech trusted me remotely to plan and lead the replatform of their live product.",
    source: "LendAPI, 2025",
  },
  {
    text: "Consumer apps I shipped end to end, live on the App Store and Play Store.",
    source: "TRNR, independent",
  },
];

export default function SignalsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-28 lg:px-8 md:pb-40">
      <SectionHeading index="03" title="Signals" />

      <div className="mt-14 flex flex-col gap-12 md:mt-20">
        {SIGNALS.map((signal, i) => (
          <Reveal key={signal.source} delay={i * 0.05}>
            <blockquote className="grid gap-3 md:grid-cols-12 md:gap-8">
              <p className="max-w-3xl font-serif text-2xl leading-snug tracking-tight md:col-span-9 md:text-3xl">
                {signal.text}
              </p>
              <p className="self-end font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 md:col-span-3 md:text-right">
                {signal.source}
              </p>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
