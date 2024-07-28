import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Experience } from "@/data/content-experience";
import React from "react";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border bg-card text-card-foreground p-8">
      <div className="flex flex-wrap w-full gap-8 items-center">
        <Avatar className="z-10 w-16 aspect-square h-fit">
          <AvatarImage className="dark:grayscale" src={experience.avatar.src} />
          <AvatarFallback>{experience.avatar.fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-wrap w-full justify-between">
          <div className="flex flex-col gap-2 justify-center">
            <span className="text-xl font-medium">{experience.role}</span>
            <span className="text-muted-foreground">{experience.company}</span>
          </div>
          <span className="text-muted-foreground italic">{experience.period}</span>
        </div>
      </div>
      <span>{experience.description}</span>
    </div>
  );
};

export default ExperienceCard;
