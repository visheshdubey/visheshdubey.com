import type { Metadata } from "next";
import Link from "next/link";

import { blogPosts } from "@/data/content-blog";

export const metadata: Metadata = {
  title: "Writing | Vishesh Dubey",
  description: "Notes on AI-assisted coding, React, TypeScript, and building web products.",
};

export default function BlogListPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-28 lg:px-8 md:py-40">
      <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Writing</h1>
      <p className="mt-4 text-muted-foreground">Notes on Cursor, React performance, and the TypeScript I actually use day to day.</p>

      <ul className="mt-12 divide-y divide-border/60">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block py-6">
              <p className="font-mono text-xs text-muted-foreground">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-2 text-xl font-medium tracking-tight transition-colors group-hover:text-brand">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
