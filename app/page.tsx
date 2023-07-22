import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import WorkCards from "@/components/cards/WorkCards";
import { work } from "@/data/work";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/data/skills";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main
      className="flex min-h-screen h-fit max-w-5xl mx-auto flex-col items-center gap-8 p-8"
      id="home"
    >
      <section
        className="flex w-full justify-center flex-col gap-8 pt-4 md:pt-28"
        data-scrollspy
      >
        <div className="flex gap-8 flex-wrap">
          <Avatar className="z-0 w-32 aspect-square h-fit">
            <AvatarImage
              className="dark:grayscale transition-all ease-in-out duration-500"
              src="https://avatars.githubusercontent.com/u/19987590?v=4"
            />
            <AvatarFallback>VD.</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-2 justify-center">
            <span className="text-3xl font-medium">visheshdubey.</span>
            <span className="text-muted-foreground">Full-Stack Engineer</span>
          </div>
        </div>
        <span className="text-lg">
          {`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.`}
        </span>
        <div className="flex gap-4">
          <a
            href="http://#"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Github className={` w-5 stroke-muted-foreground`} />
          </a>
          <a
            href="http://#"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Linkedin className="w-5 stroke-muted-foreground" />
          </a>
          <a
            href="http://#"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Twitter className="w-5 stroke-muted-foreground" />
          </a>
          <a
            href="http://#"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Mail className="w-5 stroke-muted-foreground" />
          </a>
        </div>
      </section>
      <section className="flex w-full justify-center flex-col gap-8 pt-28">
        <h2 className="text-3xl font-medium">WORK</h2>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
          {work.map((w) => (
            <WorkCards
              key={w.id}
              className="w-full p-0"
              workData={w}
            ></WorkCards>
          ))}
        </div>
      </section>
      <section
        className="flex w-full  justify-center flex-col gap-8 pt-28"
        data-scrollspy
      >
        <h2 className="text-3xl font-medium">SKILLS</h2>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-muted-foreground text-sm">
            LANGUAGES
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((sl) => (
              <TooltipProvider key={sl.id + "sl"}>
                <Tooltip>
                  <TooltipTrigger
                    className={`${buttonVariants({
                      variant: "outline",
                    })}`}
                  >
                    {sl.name}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sl.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-muted-foreground text-sm">
            FRAMEWORKS
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.Frameworks.map((sl) => (
              <TooltipProvider key={sl.id + "sl"}>
                <Tooltip>
                  <TooltipTrigger
                    className={`${buttonVariants({
                      variant: "outline",
                    })}`}
                  >
                    {sl.name}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sl.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-muted-foreground text-sm">TOOLS</h3>
          <div className="flex flex-wrap gap-2">
            {skills.Tools.map((sl) => (
              <TooltipProvider key={sl.id + "sl"}>
                <Tooltip>
                  <TooltipTrigger
                    className={`${buttonVariants({
                      variant: "outline",
                    })}`}
                  >
                    {sl.name}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{sl.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="flex w-full  justify-center flex-col gap-8 pt-28"
        data-scrollspy
      >
        <h2 className="text-3xl font-medium">EXPERIENCE</h2>
        <div
          className={`flex flex-col gap-8 rounded-xl border bg-card text-card-foreground p-8`}
        >
          <div className="flex flex-wrap w-full gap-8 items-center ">
            <Avatar className="z-0 w-16 aspect-square h-fit">
              <AvatarImage
                className="dark:grayscale"
                src="https://avatars.githubusercontent.com/u/19987590?v=4"
              />
              <AvatarFallback>VD.</AvatarFallback>
            </Avatar>
            <div className="flex flex-wrap w-full justify-between">
              <div className="flex flex-col gap-2 justify-center ">
                <span className="text-xl font-medium">Software Engineer</span>
                <span className="text-muted-foreground">Accenture</span>
              </div>
              <span className="text-muted-foreground italic">
                Feb 2022 - present
              </span>
            </div>
          </div>
          <span className="">
            {`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.`}
          </span>
        </div>
        <div
          className={`flex flex-col gap-8 rounded-xl border bg-card text-card-foreground p-8`}
        >
          <div className="flex flex-wrap w-full gap-8 items-center ">
            <Avatar className="z-0 w-16 aspect-square h-fit">
              <AvatarImage
                className="dark:grayscale"
                src="https://avatars.githubusercontent.com/u/19987590?v=4"
              />
              <AvatarFallback>VD.</AvatarFallback>
            </Avatar>
            <div className="flex flex-wrap w-full justify-between">
              <div className="flex flex-col gap-2 justify-center ">
                <span className="text-xl font-medium">FullStack Engineer</span>
                <span className="text-muted-foreground">Campusmonk</span>
              </div>
              <span className="text-muted-foreground italic">
                June 2021 - Feb 2022
              </span>
            </div>
          </div>
          <span className="">
            {`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.`}
          </span>
        </div>
      </section>
      <section
        className="flex w-full  justify-center items-center flex-col gap-8 md:gap-16  py-36"
        data-scrollspy
      >
        <h3 className="text-3xl md:text-5xl text-center leading-relaxed font-medium">
          {`Got an Idea? Let's Make Magic Happen, Together!`}
        </h3>
        <div className="flex w-full items-center flex-wrap justify-center gap-4">
          <Input
            className="max-w-2xl px-8 h-16 rounded-full"
            type="email"
            placeholder="johndoe@example.com"
          />
          <Button className="h-16 rounded-full w-36 text-lg ">Submit</Button>
        </div>
      </section>
    </main>
  );
}
