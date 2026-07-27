import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { socialLinks } from "@/data/content-social-links";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-32 lg:px-8 md:pb-44">
      <SectionHeading index="06" title="Contact" />

      <Reveal>
        <div className="mt-16 md:mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            At LendAPI now · open to the right role
          </p>

          <h2 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
            Building something worth the effort? <em className="text-muted-foreground">Say hi.</em>
          </h2>

          <a
            href={socialLinks.email}
            className="group mt-14 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-xl tracking-tight transition-colors hover:border-brand hover:text-brand md:text-2xl"
          >
            visheshdubey.work@gmail.com
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <div className="mt-16 flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              Twitter
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
