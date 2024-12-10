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
};

export const workData = {
  title: "PROJECTS",
  works: [
    {
      id: 1,
      title: "Polka fi ",
      cover_image: "/images/work/trnr-work-isometric.jpg",
      description:
        "Sydney, AU based fitness brand which designs portable fitness and recovery tools that support every step of your journey.",
      footerText: "trnr.com",
      url: "https://trnr.com",
      tw_color: "purple",
      tw_color_weight: "600",
    },
    {
      id: 2,
      title: "TRNR Fitness",
      cover_image: "/images/work/trnr-work-isometric.jpg",
      description:
        "Sydney, AU based fitness brand which designs portable fitness and recovery tools that support every step of your journey.",
      footerText: "trnr.com",
      url: "https://trnr.com",
      tw_color: "purple",
      tw_color_weight: "600",
    },
    {
      id: 3,
      title: "TOP IMAGE",
      cover_image: "/images/work/tis-isometric.jpg",
      description:
        "A boutique post-production studio rooted in the art of subtle, elevated retouching and white-glove client services.",
      footerText: "topimageservices.com",
      url: "https://topimageservices.com",
      tw_color: "neutral",
      tw_color_weight: "900",
    },
    {
      id: 1,
      title: "Campusmonk",
      cover_image: "/images/work/cm-isometric.jpg",
      description: "An e-Learning platform, helping students to upskill and earn their dream jobs.",
      footerText: "campusmonk.in",
      url: "https://campusmonk.in",
      tw_color: "orange",
      tw_color_weight: "500",
    },
  ],
};
