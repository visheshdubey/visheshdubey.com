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
import ShootingStars from "@/components/animated-components/ShootingStars";

export default function Home() {
  return (
    <main
      className="flex relative min-h-screen h-fit max-w-5xl mx-auto flex-col items-center gap-8 p-8"
      id="home"
    >
      <div className="absolute max-w-5xl w-screen h-[90vh] -z-20 overflow-hidden">
        <ShootingStars
          initial={{ rotate: -45, x: 10, y: 10, opacity: 1 }}
          animate={{ rotate: -45, x: 100, y: 100, opacity: 0 }}
          repeatDelay={2}
        ></ShootingStars>
        <ShootingStars
          initial={{ rotate: -45, x: 180, y: 50, opacity: 1 }}
          animate={{ rotate: -45, x: 270, y: 140, opacity: 0 }}
          repeatDelay={4}
        ></ShootingStars>
        <ShootingStars
          initial={{ rotate: -45, x: 360, y: 30, opacity: 1 }}
          animate={{ rotate: -45, x: 450, y: 120, opacity: 0 }}
          repeatDelay={5}
        ></ShootingStars>
        <ShootingStars
          initial={{ rotate: -45, x: 560, y: 10, opacity: 1 }}
          animate={{ rotate: -45, x: 650, y: 100, opacity: 0 }}
          repeatDelay={6}
        ></ShootingStars>
        <ShootingStars
          initial={{ rotate: -45, x: 270, y: 240, opacity: 1 }}
          animate={{ rotate: -45, x: 360, y: 330, opacity: 0 }}
          repeatDelay={8}
        ></ShootingStars>
      </div>

      <section className="flex w-full justify-center flex-col gap-8 pt-4 md:pt-28">
        <div className="flex gap-8 flex-wrap">
          <Avatar className="z-10 w-32 aspect-square h-fit">
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
          {/* {`🌟 I'm a full-stack developer, and I absolutely love bringing apps and webapps to life! 
          From the pretty pixels on the front-end to the sneaky codes on the back-end,
           I dive into every detail with excitement. `} */}
          {`👋 I'm a passionate full-stack developer on a mission to craft exceptional web experiences. From front-end finesse to back-end wizardry, I love transforming ideas into captivating digital realities. Collaborating with clients and teams is the heartbeat of my process, driving success in every project. Let's connect and explore opportunities to create something extraordinary together! `}
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
      <section
        id="work"
        className="flex w-full justify-center flex-col gap-8 pt-28"
      >
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
        id="skills"
        className="flex w-full  justify-center flex-col gap-8 pt-28"
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
      >
        <h2 className="text-3xl font-medium">EXPERIENCE</h2>
        <div
          className={`flex flex-col gap-8 rounded-xl border bg-card text-card-foreground p-8`}
        >
          <div className="flex flex-wrap w-full gap-8 items-center ">
            <Avatar className="z-10 w-16 aspect-square h-fit">
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
            <Avatar className="z-10 w-16 aspect-square h-fit">
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
      <section className="flex w-full  justify-center items-center flex-col gap-8 md:gap-16  py-36">
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
