import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/data/content-social-links";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-w-7xl w-full mx-auto flex flex-wrap p-8 justify-center md:justify-between gap-8 items-center ">
      <div className="flex gap-8 justify-center md:justify-between items-center flex-wrap">
        <span className="flex gap-2 items-center text-sm">© visheshdubey, 2024</span>
        <div className="flex gap-4">
          <a
            href={socialLinks.github}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Github className={` w-5 stroke-muted-foreground`} />
          </a>
          <a
            href={socialLinks.linkedin}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Linkedin className="w-5 stroke-muted-foreground" />
          </a>
          <a
            href={socialLinks.twitter}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Twitter className="w-5 stroke-muted-foreground" />
          </a>
          <a
            href={socialLinks.email}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Mail className="w-5 stroke-muted-foreground" />
          </a>
        </div>
      </div>
      <span className="text-muted-foreground">Innovate.Iterate.Inspire!</span>
    </footer>
  );
};

export default Footer;
