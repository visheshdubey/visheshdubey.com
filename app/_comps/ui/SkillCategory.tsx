import { Button } from "@/components/ui/button";
import { SkillCategory as SkillCategoryType } from "@/data/content-skills";
import React from "react";
import { HoverCardDemo } from "./SkillHoverCard";

type Props = {
  category: SkillCategoryType;
};

const SkillCategory = ({ category }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium text-muted-foreground text-sm">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <HoverCardDemo key={item.id + "sl"} data={item}>
            <Button variant={"outline"}>{item.name}</Button>
          </HoverCardDemo>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
