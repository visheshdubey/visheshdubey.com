import { Experience } from "@/data/content-experience";
import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

type Props = { experiences: Experience[] };

const ExperienceSection = ({ experiences }: Props) => {
  return (
    <section id="experience" className="flex w-full justify-center flex-col gap-8 pt-28">
      <h2 className="text-3xl font-medium">EXPERIENCE</h2>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </section>
  );
};

export default ExperienceSection;
