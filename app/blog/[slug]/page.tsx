import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlogContent from "@/app/_comps/BlogContent";
import { blogPosts, getAllBlogSlugs, getBlogPost } from "@/data/content-blog";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} | Vishesh Dubey`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-28 lg:px-8 md:py-40">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to writing
      </Link>

      <header className="mt-10 border-b border-border/60 pb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight md:text-5xl">{post.title}</h1>

        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="mt-12">
        <BlogContent blocks={post.content} />
      </article>

      <footer className="mt-20 border-t border-border/60 pt-10">
        <p className="text-sm text-muted-foreground">More from the blog</p>
        <ul className="mt-4 space-y-3">
          {blogPosts
            .filter((p) => p.slug !== post.slug)
            .map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-foreground transition-colors hover:text-brand">
                  {p.title}
                </Link>
              </li>
            ))}
        </ul>
      </footer>
    </main>
  );
}
