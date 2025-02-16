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
  description: `👋 I’m a full-stack developer, a freelancer specializing in building modern, scalable web applications. I work with React, Next.js, SvelteKit, and backend frameworks like Hono.js and Express.js.`,
  socialLinks: [
    { href: "http://#", icon: Github, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Linkedin, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Twitter, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Mail, className: "w-5 stroke-muted-foreground" },
  ],
};
