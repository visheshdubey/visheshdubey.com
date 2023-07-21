export type Work = {
  id: number;
  title: string;
  description: string;
  footerText: string;
  url: string;
  tw_color: string;
  tw_color_weight: string;
};
export const work: Work[] = [
  {
    id: 1,
    title: "Campusmonk",
    description:
      "An e-Learning platform, helping students to upskill and earn their dream jobs.",
    footerText: "campusmonk.in",
    url: "https://campusmonk.in",
    tw_color: "orange",
    tw_color_weight: "500",
  },
  {
    id: 2,
    title: "OpenHiring.ai",
    description:
      "AI powered job search platfom, folks can find thier dream job.",
    footerText: "openhiring.ai",
    url: "https://openhiring.vercel.app",
    tw_color: "purple",
    tw_color_weight: "600",
  },
  {
    id: 3,
    title: "TRNR",
    description: "One app, which procides instruction on how to do workouts.",
    footerText: "TRNR.com",
    url: "https://trnr.com",
    tw_color: "neutral",
    tw_color_weight: "900",
  },
];
