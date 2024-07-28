import React from "react";
import SkillCategory from "../ui/SkillCategory";
import { Skills } from "@/data/content-skills";

type Props = {
  skills: Skills;
};

const SkillSection = ({ skills }: Props) => {
  return (
    <section id="skills" className="flex w-full justify-center flex-col gap-8 pt-28">
      <h2 className="text-3xl font-medium">{skills.title}</h2>
      {skills.categories.map((category, index) => (
        <SkillCategory key={index} category={category} />
      ))}
    </section>
  );
};

export default SkillSection;
