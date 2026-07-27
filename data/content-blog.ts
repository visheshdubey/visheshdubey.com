export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: BlogBlock[];
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-use-cursor-to-its-fullest-potential",
    title: "How to get more out of Cursor",
    excerpt:
      "Most people install Cursor, leave the defaults, and wonder why it's hit or miss. A bit of setup and clearer prompts changed how I ship.",
    date: "Jul 27, 2026",
    readTime: "8 min read",
    tags: ["Cursor", "AI", "Productivity"],
    content: [
      {
        type: "paragraph",
        text: "I treated Cursor like fancy autocomplete for a while. Sometimes great, often weird. The difference turned out to be boring stuff: which files were open, whether the repo had rules, and how specific my prompts were.",
      },
      {
        type: "heading",
        text: "Open the right files first",
      },
      {
        type: "paragraph",
        text: "Cursor reads your open tabs, recent edits, and folder structure. Before you ask it to build something, open the file it should copy. A similar component, the data layer, a test. @-mention files when you need them explicitly. If the model can't see how you already write code, it will invent its own style.",
      },
      {
        type: "list",
        items: [
          "Open the closest existing example before you prompt.",
          "Keep related files in tabs during a session.",
        ],
      },
      {
        type: "heading",
        text: "Write rules that match how you ship",
      },
      {
        type: "paragraph",
        text: "Project rules (.cursor/rules or AGENTS.md) were the highest-ROI setup step for me. Put in the things a senior dev would repeat on every PR: naming, test expectations, commit format, folders that are off limits, how you like components structured.",
      },
      {
        type: "code",
        language: "markdown",
        text: `# Example rule snippet
- Match existing import style and file layout
- Prefer small, focused diffs over rewrites
- Never commit .env or credentials
- Use data/ for content, app/_comps for UI`,
      },
      {
        type: "paragraph",
        text: "Good rules cut review churn. The model stops suggesting patterns you'd reject anyway.",
      },
      {
        type: "heading",
        text: "Prompt with actual constraints",
      },
      {
        type: "paragraph",
        text: "\"Add auth\" gets you generic auth. Try: \"Add email/password login using our existing Button and form patterns, store session in httpOnly cookie, add /login with the same layout as /signup.\" Constraints help. On big changes, ask for a plan first, then implement in steps.",
      },
      {
        type: "heading",
        text: "Use Agent mode for multi-file work",
      },
      {
        type: "paragraph",
        text: "Chat is fine for a single file. Agent mode is what I use when routing, components, types, and tests all need to move together. Let it explore, but steer. Approve file reads, cut scope when it wanders, interrupt when it starts refactoring things you didn't ask for.",
      },
      {
        type: "heading",
        text: "Still read the output",
      },
      {
        type: "paragraph",
        text: "The speed gain only holds if the code is still yours. Skim for hallucinated APIs, wrong env assumptions, duplicated logic. Run the app. Run tests. AI-assisted coding falls apart when you stop reviewing.",
      },
      {
        type: "paragraph",
        text: "At its best, Cursor feels like a fast teammate who already knows the repo because you showed it how you work.",
      },
    ],
  },
  {
    slug: "vite-chunking-might-not-be-the-optimization-your-react-app-needs",
    title: "Vite chunking might not be the optimization your React app needs",
    excerpt:
      "Manual chunk splits look good in bundle analyzers. Often the real win is somewhere else, and bad splits make things worse.",
    date: "Jul 27, 2026",
    readTime: "7 min read",
    tags: ["Vite", "React", "Performance"],
    content: [
      {
        type: "paragraph",
        text: "Open any React perf thread and someone will suggest aggressive manual chunking in vite.config. Split vendor. Split lodash. Split every route. The treemap looks healthier. Lighthouse barely moves. Sometimes users pay for it with extra round trips.",
      },
      {
        type: "heading",
        text: "What chunking is actually for",
      },
      {
        type: "paragraph",
        text: "Code splitting helps when users don't need the code on first paint. Lazy-loaded routes, heavy editors loaded on demand, chart libraries that only show up on one page. Those are real wins. Splitting react-dom into its own chunk because it's big? The browser still needs it immediately.",
      },
      {
        type: "list",
        items: [
          "First visit: fewer bytes and less parse time on the critical path.",
          "Repeat visit: vendor chunks that change rarely and cache well.",
        ],
      },
      {
        type: "heading",
        text: "When manual chunks backfire",
      },
      {
        type: "paragraph",
        text: "Over-splitting creates tiny chunks that block each other, HTTP/2 overhead adds up, and one dependency bump can bust half your vendor tree. You also burn hours tuning rollup output instead of fixing the slow component.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// Often unnecessary early on
manualChunks(id) {
  if (id.includes("node_modules")) {
    if (id.includes("react")) return "react-vendor";
    if (id.includes("lodash")) return "lodash-vendor";
    return "vendor";
  }
}`,
      },
      {
        type: "paragraph",
        text: "Vite and Rollup already produce reasonable splits. Reach for manualChunks only after you've measured a specific problem.",
      },
      {
        type: "heading",
        text: "Things that usually matter more",
      },
      {
        type: "list",
        items: [
          "Drop unused dependencies and duplicate date/icon libraries.",
          "Lazy-load routes and heavy modals with React.lazy + Suspense.",
          "Fix re-render storms before touching the bundler.",
          "Serve images in modern formats with explicit width/height.",
          "Move data fetching server-side where you can (RSC, loaders).",
          "Audit third-party scripts. Analytics often cost more than your app bundle.",
        ],
      },
      {
        type: "heading",
        text: "Measure first",
      },
      {
        type: "paragraph",
        text: "Use Lighthouse, Web Vitals in the field, and the Performance panel. If LCP is slow because of a 2MB hero image, chunking react-router won't help. If TBT spikes from a mount effect that maps 10k rows, virtualize the list first.",
      },
      {
        type: "paragraph",
        text: "Treat Vite chunking as a fix for a proven bottleneck. Wait until you have numbers.",
      },
    ],
  },
  {
    slug: "bare-minimum-typescript-for-modern-frameworks",
    title: "Bare minimum TypeScript for modern frameworks",
    excerpt:
      "You don't need conditional types to ship in Next.js or SvelteKit. Learn this subset and let the framework types do the rest.",
    date: "Jul 27, 2026",
    readTime: "6 min read",
    tags: ["TypeScript", "React", "Next.js"],
    content: [
      {
        type: "paragraph",
        text: "TypeScript scared me off JavaScript longer than it should have. Modern frameworks infer a lot for you. A small practical subset covers most of my day-to-day work in React and Next.js.",
      },
      {
        type: "heading",
        text: "1. Annotate props and function inputs",
      },
      {
        type: "code",
        language: "typescript",
        text: `type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}`,
      },
      {
        type: "paragraph",
        text: "Objects with optional fields (?), unions (string | number), and basic arrays (string[]) handle most component contracts.",
      },
      {
        type: "heading",
        text: "2. Let inference handle locals",
      },
      {
        type: "paragraph",
        text: "You rarely need to type every variable. const count = 0 and const items = posts.filter(...) are enough. Add explicit types when inference fails or the value crosses a module boundary.",
      },
      {
        type: "heading",
        text: "3. Know async return shapes",
      },
      {
        type: "code",
        language: "typescript",
        text: `type User = { id: string; name: string };

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) return null;
  return res.json();
}`,
      },
      {
        type: "paragraph",
        text: "Promise<T> on async functions tells callers what they get back. Pair with zod at API boundaries when data comes from the network.",
      },
      {
        type: "heading",
        text: "4. Read generics, don't write them yet",
      },
      {
        type: "paragraph",
        text: "useState<User | null>(null), Array<Post>, Record<string, string> show up everywhere. Recognize them. Wait until you've repeated a pattern a few times before writing custom generics.",
      },
      {
        type: "heading",
        text: "5. Narrow with guards",
      },
      {
        type: "code",
        language: "typescript",
        text: `function formatId(id: string | number) {
  if (typeof id === "number") return id.toString();
  return id;
}`,
      },
      {
        type: "paragraph",
        text: "typeof checks, optional chaining (user?.email), and nullish coalescing (value ?? default) fix most any-related pain without unsafe casts.",
      },
      {
        type: "heading",
        text: "6. Import types from the framework",
      },
      {
        type: "list",
        items: [
          "React: ComponentProps, ReactNode, CSSProperties",
          "Next.js: Metadata, PageProps, LayoutProps (App Router)",
          "Generated types from your ORM or API client. Don't duplicate by hand.",
        ],
      },
      {
        type: "heading",
        text: "What you can skip for now",
      },
      {
        type: "list",
        items: [
          "Conditional types, mapped types, template literal types",
          "Declaration merging and ambient modules",
        ],
      },
      {
        type: "paragraph",
        text: "Ship with the minimum. Type errors are feedback. Fix one, learn one concept, move on. That's enough to work confidently in modern frameworks, and AI tools handle boilerplate types faster when you know what to ask for.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
