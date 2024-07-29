import { Github, Linkedin, LucideIcon, Mail, Twitter } from "lucide-react";

export type ProfileData = {
  avatar: {
    src: string;
    fallback: string;
    className: string;
  };
  name: string;
  title: string;
  description: string;
  socialLinks: {
    href: string;
    icon: LucideIcon;
    className: string;
  }[];
};

export const profileData: ProfileData = {
  avatar: {
    src: "https://avatars.githubusercontent.com/u/19987590?v=4",
    fallback: "VD.",
    className: "z-10 w-32 aspect-square h-fit",
  },
  name: "visheshdubey.",
  title: "Full-Stack Engineer",
  description: `👋 I am a skilled full-stack developer dedicated to creating exceptional web experiences. With expertise in both front-end and back-end technologies, I transform ideas into robust applications. I value collaboration with clients and teams, believing it drives project success. Let’s connect to explore opportunities for crafting innovative digital solutions together.`,
  socialLinks: [
    { href: "http://#", icon: Github, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Linkedin, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Twitter, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Mail, className: "w-5 stroke-muted-foreground" },
  ],
};
