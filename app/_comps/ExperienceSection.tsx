import Image from "next/image";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experienceData } from "@/data/content-experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 pb-28 lg:px-8 md:pb-40">
      <SectionHeading index="05" title="Experience" />

      <div className="mt-16 flex flex-col gap-12 md:mt-24">
        {experienceData.data.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.05}>
            <article className="grid gap-6 border-l border-border/60 pl-6 md:grid-cols-12 md:gap-8">
              <div className="flex items-start gap-4 md:col-span-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-card">
                  <Image
                    src={job.avatar.src}
                    alt=""
                    fill
                    className="object-contain p-1.5 grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-medium tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">
                    {job.period}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-8">{job.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
