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
  description: `👋 I'm a passionate full-stack developer on a mission to craft exceptional web experiences. From front-end finesse to back-end wizardry, I love transforming ideas into captivating digital realities. Collaborating with clients and teams is the heartbeat of my process, driving success in every project. Let's connect and explore opportunities to create something extraordinary together!`,
  socialLinks: [
    { href: "http://#", icon: Github, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Linkedin, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Twitter, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Mail, className: "w-5 stroke-muted-foreground" },
  ],
};
