import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillData } from "@/data/content-skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 pb-32 lg:px-8 md:pb-44">
      <SectionHeading index="07" title="Skills" />

      <div className="mt-16 flex flex-col gap-14 md:mt-24">
        {skillData.categories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.05}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                {category.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item.id}
                    className="rounded-full border border-border/60 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
