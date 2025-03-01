import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Experience } from "@/data/content-experience";

type Props = {
  experience: Experience["data"][number];
  className?: string;
};

const ExperienceCard = ({ experience, className }: Props) => {
  return (
    // <div className="flex flex-col gap-8 rounded-xl border bg-card text-card-foreground p-8">
    //   <div className="flex flex-wrap w-full gap-8 items-center">
    //     <Avatar className="z-10 w-16 aspect-square h-fit">
    //       <AvatarImage className="dark:grayscale" src={experience.avatar.src} />
    //       <AvatarFallback>{experience.avatar.fallback}</AvatarFallback>
    //     </Avatar>
    //     <div className="flex flex-wrap w-full justify-between">
    //       <div className="flex flex-col gap-2 justify-center">
    //         <span className="text-xl font-medium">{experience.role}</span>
    //         <span className="text-muted-foreground">{experience.company}</span>
    //       </div>
    //       <span className="text-muted-foreground italic">{experience.period}</span>
    //     </div>
    //   </div>
    //   <span>{experience.description}</span>
    // </div>

    <div
      className={`rounded-xl bg-secondary/10 backdrop-blur-2xl lg:rounded-2xl shadow-none overflow-hidden p-4 lg:p-6 ${className}`}
    >
      <div className="flex gap-4">
        <Avatar className="z-10 w-16 aspect-square h-fit">
          <AvatarImage className="dark:grayscale" src={experience.avatar.src} />
          <AvatarFallback>{experience.avatar.fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <div className="flex font-poppins font-medium gap-2 text-xl w-fit hover:gap-3 transition-all ease-in-out">
            {experience.role}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">{experience.company}</span>
            <span className="text-muted-foreground/60 italic text-sm">{experience.period}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 gap-4 items-start">
        <p className="text-neutral-500 text-sm tracking-wide leading-relaxed">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">React</p>
          </div>
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">Next.js</p>
          </div>
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">Tailwind CSS</p>
          </div>
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">TypeScript</p>
          </div>
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">Node.js</p>
          </div>
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">Express</p>
          </div>
          <div className="rounded-full border border-secondary px-2 py-1">
            <p className="text-sm text-primary/90">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
