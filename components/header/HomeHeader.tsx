import React from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Separator } from "../ui/separator";

const HomeHeader = () => {
  return (
    <div className="sticky z-50 top-8 w-full flex items-center max-w-5xl mx-auto bg-background/20 backdrop-blur-md mt-4 py-4  px-8 rounded-full justify-between ">
      <div className="text font-medium">visheshdubey.</div>
      <div className="flex items-center gap-4">
        <ul className="text-sm font-medium flex gap-8">
          <li>Home</li>
          <li>WORK</li>
          <li>SKILLS</li>
          <li>Experience</li>
          <li>Blogs</li>
        </ul>
        <div className="h-5 w-[1px] bg-muted-foreground/80 ml-2"></div>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};

export default HomeHeader;
