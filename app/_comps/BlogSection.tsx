import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/data/content-blog";

export default function BlogSection() {
  return (
    <section id="blog" className="mx-auto w-full max-w-6xl px-6 pb-28 lg:px-8 md:pb-40">
      <div className="flex items-baseline justify-between border-t border-border/60 pt-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-brand">05</span>
            <span className="mx-3 text-border">·</span>
            Writing
          </p>
        </Reveal>
        <Link
          href="/blog"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 divide-y divide-border/60 md:mt-12">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-4 py-10 transition-colors md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/70">{post.readTime}</p>
              </div>

              <div className="md:col-span-9">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-brand md:text-2xl">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
