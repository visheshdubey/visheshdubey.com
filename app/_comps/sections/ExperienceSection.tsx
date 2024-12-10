import { Experience } from "@/data/content-experience";
import ExperienceCard from "../ui/ExperienceCard";
import { cn } from "@/lib/utils";

type Props = { experiences: Experience; className?: string };

const ExperienceSection = ({ experiences, className }: Props) => {
  return (
    <section id="work" className={cn(`flex w-full items-center justify-center flex-col gap-8 lg:gap-16`, className)}>
      <h2 className="text-lg tracking-wider text-neutral-400">{experiences.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        {experiences.data.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
