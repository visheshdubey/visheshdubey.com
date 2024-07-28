import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-w-7xl w-full mx-auto flex flex-wrap p-8 justify-center md:justify-between gap-8 items-center ">
      <div className="flex gap-8 justify-center md:justify-between items-center flex-wrap">
        <span className="flex gap-2 items-center text-sm">© visheshdubey, 2023</span>
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
      </div>
      <span className="text-muted-foreground">Iterate.Innovate.Inspire!</span>
    </footer>
  );
};

export default Footer;
