"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-32 lg:px-8 md:pb-24">
      <motion.p
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        animate="visible"
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        Vishesh Kumar Dubey · Fullstack Product Engineer
      </motion.p>

      <motion.h1
        variants={fadeUp}
        custom={0.25}
        initial="hidden"
        animate="visible"
        className="mt-8 max-w-5xl font-serif text-[clamp(2.75rem,7.5vw,6rem)] leading-[1.02] tracking-[-0.02em]"
      >
        I build products end to end,<br className="hidden md:block" /> and the stuff underneath that keeps them{" "}
        <em className="text-brand">fast</em>.
      </motion.h1>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
        <motion.div variants={fadeUp} custom={0.45} initial="hidden" animate="visible" className="md:col-span-6 md:col-start-7">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Four years in fintech, ed-tech, and enterprise retail. These days I&apos;m replatforming the frontend of a
            live US lending product at LendAPI. One module at a time, without taking the business offline.
          </p>

          <a
            href="#work"
            className="group mt-10 inline-flex items-center gap-4 text-sm uppercase tracking-[0.15em]"
          >
            <span className="border-b border-brand pb-1 transition-colors group-hover:text-brand">View selected work</span>
            <span aria-hidden className="text-brand transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
