import { BlogBlock } from "@/data/content-blog";

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-custom space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="pt-4 text-2xl font-medium tracking-tight text-foreground">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="list-inside list-disc space-y-2 text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "code":
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-xl border border-border/60 bg-card p-5 font-mono text-sm leading-relaxed text-foreground/90"
              >
                <code>{block.text}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
