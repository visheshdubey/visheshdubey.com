import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  meta?: string;
};

export default function SectionHeading({ index, title, meta }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between border-t border-border/60 pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-brand">{index}</span>
          <span className="mx-3 text-border">·</span>
          {title}
        </p>
        {meta && <span className="font-mono text-xs text-muted-foreground/70">{meta}</span>}
      </div>
    </Reveal>
  );
}
