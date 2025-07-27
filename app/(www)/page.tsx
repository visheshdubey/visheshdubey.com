import { TextLoop } from "@/components/magicui/text-loop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SectionHeader, ArticleCard, ProjectCard, ExperienceCard, ScrollAnimation } from "./_comps";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <main className="">
            <ScrollAnimation>
                <section className="flex flex-col gap-4 mt-20 md:mt-24">
                    <div className="flex flex-col-reverse md:flex-row gap-6 md:items-end">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl md:text-4xl font-bold font-bricolage">
                                Hi, I'm {` `}
                                <br className="block md:hidden" />
                                <TextLoop interval={1} transition={{ duration: 0.3 }}>
                                    <span>Vishesh Dubey 👋</span>
                                    <span className="text-neutral-500">Full Stack Developer</span>
                                    <span className="text-neutral-500">Builder</span>
                                    <span className="text-neutral-500">Dreamer</span>
                                </TextLoop>
                            </h1>
                            <p className="text-base md:text-lg font-inter-tight leading-relaxed tracking-wide">
                                I'm a full-stack developer who's always curious about tech. I love creating digital experiences and building products that people enjoy, while
                                sipping my coffee.
                            </p>
                        </div>
                        <Avatar className="w-20 h-20 md:w-24 md:h-24 rounded-lg">
                            <AvatarImage src="https://github.com/visheshdubey.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
                <section className="flex flex-col gap-4 mt-20 md:mt-28">
                    <SectionHeader>ARTICLES</SectionHeader>
                    <div className="flex flex-col gap-2">
                        <ArticleCard
                            href="/articles/how-to-export-metadata-from-mdx-for-nextjs-seo"
                            title="How to Export Metadata from MDX for Next.js SEO"
                            description="A guide on exporting metadata from MDX files to leverage Next.js SEO features."
                            delay={0.1}
                        />
                        <ArticleCard
                            href="/articles/how-to-export-metadata-from-mdx-for-nextjs-seo"
                            title="How to Export Metadata from MDX for Next.js SEO"
                            description="A guide on exporting metadata from MDX files to leverage Next.js SEO features."
                            delay={0.2}
                        />
                        <ArticleCard
                            href="/articles/how-to-export-metadata-from-mdx-for-nextjs-seo"
                            title="How to Export Metadata from MDX for Next.js SEO"
                            description="A guide on exporting metadata from MDX files to leverage Next.js SEO features."
                            delay={0.3}
                        />
                    </div>
                </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
                <section className="flex flex-col gap-4 mt-20 md:mt-28">
                    <SectionHeader>PROJECTS</SectionHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <ProjectCard title="Campusmonk" description="A guide on exporting metadata from MDX files to leverage Next.js SEO features." delay={0.1} />
                        <ProjectCard title="Campusmonk" description="A guide on exporting metadata from MDX files to leverage Next.js SEO features." delay={0.2} />
                        <ProjectCard title="Campusmonk" description="A guide on exporting metadata from MDX files to leverage Next.js SEO features." delay={0.3} />
                        <ProjectCard title="Campusmonk" description="A guide on exporting metadata from MDX files to leverage Next.js SEO features." delay={0.4} />
                    </div>
                </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
                <section className="flex flex-col gap-4 mt-20 md:mt-28">
                    <SectionHeader>EXPERIENCE</SectionHeader>
                    <div className="grid grid-cols-1 gap-2">
                        <ExperienceCard title="Frontend Engineer" company="LendAPI, California" duration="2025 - Present" delay={0.1} />
                        <ExperienceCard title="Software Engineer" company="PrashantAdvait Org" duration="2024 - 2025" delay={0.2} />
                        <ExperienceCard title="Software Engineer" company="Accenture" duration="2022 - 2024" delay={0.3} />
                        <ExperienceCard title="Full Stack Engineer" company="Campusmonk" duration="2021 - 2022" delay={0.4} />
                    </div>
                </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
                <section className="flex flex-col gap-4 mt-20 md:mt-28">
                    <h2 className="text-xl md:text-3xl font-semibold font-bricolage">Have a project in mind? I'd love to hear from you.</h2>
                    <Button className="w-fit rounded-md cursor-pointer">Contact Me</Button>
                </section>
            </ScrollAnimation>
        </main>
    );
};

export default HomePage;
