import { TextLoop } from "@/components/magicui/text-loop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <main className="">
            <section className="flex flex-col gap-4 mt-24">
                <div className="flex gap-6 items-end">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold font-bricolage">
                            Hi, I'm{" "}
                            <TextLoop interval={1} transition={{ duration: 0.3 }}>
                                <span>Vishesh Dubey 👋</span>
                                <span className="text-neutral-500">Full Stack Developer</span>
                                <span className="text-neutral-500">Builder</span>
                                <span className="text-neutral-500">Dreamer</span>
                            </TextLoop>
                        </h1>
                        <p className="text-lg font-inter-tight leading-relaxed tracking-wide">
                            I’m a full-stack developer who’s always curious about tech. I love creating digital experiences and building products that people enjoy, while sipping
                            my coffee.
                        </p>
                    </div>
                    <Avatar className="w-24 h-24 rounded-lg">
                        <AvatarImage src="https://github.com/visheshdubey.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </section>

            <section className="flex flex-col gap-4 mt-28">
                <h2 className="text-base font-bold font-inter-tight text-neutral-500">ARTICLES</h2>
                <div className="flex flex-col gap-2">
                    <Link href="/articles/how-to-export-metadata-from-mdx-for-nextjs-seo" className="p-4 rounded-md -ml-4 hover:bg-neutral-100 space-y-1">
                        <h3 className="text-base font-semibold font-inter">How to Export Metadata from MDX for Next.js SEO</h3>
                        <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                    </Link>
                    <Link href="/articles/how-to-export-metadata-from-mdx-for-nextjs-seo" className="p-4 rounded-md -ml-4 hover:bg-neutral-100 space-y-1">
                        <h3 className="text-base font-semibold font-inter">How to Export Metadata from MDX for Next.js SEO</h3>
                        <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                    </Link>
                    <Link href="/articles/how-to-export-metadata-from-mdx-for-nextjs-seo" className="p-4 rounded-md -ml-4 hover:bg-neutral-100 space-y-1">
                        <h3 className="text-base font-semibold font-inter">How to Export Metadata from MDX for Next.js SEO</h3>
                        <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                    </Link>
                </div>
            </section>

            <section className="flex flex-col gap-4 mt-28">
                <h2 className="text-base font-bold font-inter-tight text-neutral-500">PROJECTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex flex-col gap-4">
                        <div className="w-full aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Campusmonk</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex flex-col gap-4">
                        <div className="w-full aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Campusmonk</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex flex-col gap-4">
                        <div className="w-full aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Campusmonk</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex flex-col gap-4">
                        <div className="w-full aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Campusmonk</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">A guide on exporting metadata from MDX files to leverage Next.js SEO features.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 mt-28">
                <h2 className="text-base font-bold font-inter-tight text-neutral-500">EXPERIENCE</h2>
                <div className="grid grid-cols-1 gap-2">
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex gap-4 items-start">
                        <div className="w-32 aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Frontend Engineer</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">LendAPI, California</p>
                        </div>
                        <p className="text-xs font-inter leading-relaxed tracking-wide ml-auto text-neutral-500">2025 - Present</p>
                    </div>
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex gap-4 items-start">
                        <div className="w-32 aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Software Engineer</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">PrashantAdvait Org</p>
                        </div>
                        <p className="text-xs font-inter leading-relaxed tracking-wide ml-auto text-neutral-500">2024 - 2025</p>
                    </div>
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex gap-4 items-start">
                        <div className="w-32 aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Software Engineer</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">Accenture</p>
                        </div>
                        <p className="text-xs font-inter leading-relaxed tracking-wide ml-auto text-neutral-500">2022 - 2024</p>
                    </div>
                    <div className="p-4 rounded-md -ml-4 space-y-1 flex gap-4 items-start">
                        <div className="w-32 aspect-video rounded-md bg-neutral-100"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold font-inter">Full Stack Engineer</h3>
                            <p className="text-sm font-inter leading-relaxed tracking-wide">Campusmonk</p>
                        </div>
                        <p className="text-xs font-inter leading-relaxed tracking-wide ml-auto text-neutral-500">2021 - 2022</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 mt-28">
                <h2 className="text-3xl font-semibold font-bricolage">Have a project in mind? I'd love to hear from you.</h2>
                <Button className="w-fit rounded-md cursor-pointer">Contact Me</Button>
            </section>
        </main>
    );
};

export default HomePage;
