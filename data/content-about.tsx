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
  title: "Product Developer",
  description: `I build web products with React, Next.js, SvelteKit, and backends like Hono and Express. I use AI-assisted coding when it saves real time.`,
  socialLinks: [
    { href: "http://#", icon: Github, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Linkedin, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Twitter, className: "w-5 stroke-muted-foreground" },
    { href: "http://#", icon: Mail, className: "w-5 stroke-muted-foreground" },
  ],
};
