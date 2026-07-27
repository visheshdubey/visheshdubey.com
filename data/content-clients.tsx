export type Clients = {
  title: string;
  works: Work[];
};

export type Work = {
  id: number;
  title: string;
  cover_image: string;
  description: string;
  footerText: string;
  url: string;
  tw_color: string;
  tw_color_weight: string;
  githubUrl?: string;
  isClient: boolean;
  techStack: string[];
};

export const workData = {
  title: "PROJECTS",
  works: [
    {
      id: 1,
      title: "Polka fi ",
      cover_image: "/images/work/polka-fi.jpg",
      description:
        "Side project. Talk your expenses out loud and let AI sort them into categories. Less spreadsheet, more speaking.",
      footerText: "polkafi-app",
      url: "https://polkafi-app.vercel.app/",
      githubUrl: "https://github.com/visheshdubey/polkafi.app",
      tw_color: "purple",
      tw_color_weight: "600",
      isClient: false,
      techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "OpenAI"],
    },
    {
      id: 2,
      title: "TRNR Fitness",
      cover_image: "/images/work/trnr-work-isometric.jpg",
      description:
        "Sydney fitness brand making portable training and recovery gear. I helped on the app and backend stack.",
      footerText: "trnr.com",
      url: "https://trnr.com",
      tw_color: "purple",
      tw_color_weight: "600",
      isClient: true,
      techStack: ["Strapi", "React Native", "Tailwind CSS", "TypeScript", "Shopify", "OpenAI", "Docker", "Nginx"],
    },
    {
      id: 3,
      title: "TOP IMAGE",
      cover_image: "/images/work/tis-isometric.jpg",
      description:
        "Post-production studio in NYC. Quiet retouching, careful client service. I built their marketing site and deployment pipeline.",
      footerText: "topimageservices.com",
      url: "https://topimageservices.com",
      tw_color: "neutral",
      tw_color_weight: "900",
      isClient: true,
      techStack: ["CircleCI", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Docker"],
    },
    {
      id: 1,
      title: "Campusmonk",
      cover_image: "/images/work/cm-isometric.jpg",
      description: "Ed-tech platform for placement prep. Mock tests, courses, the works.",
      footerText: "campusmonk.in",
      url: "https://campusmonk.in",
      tw_color: "orange",
      tw_color_weight: "500",
      isClient: true,
      techStack: ["CircleCI", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Docker", "Nginx"],
    },
  ],
};
