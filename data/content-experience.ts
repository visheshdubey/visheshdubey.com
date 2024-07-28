export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  avatar: {
    src: string;
    fallback: string;
  };
}

export const experienceData: Experience[] = [
  {
    id: 0,
    role: "Software Engineer",
    company: "PrashantAdvait Foundation",
    period: "May 2024 - present",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    avatar: {
      src: "https://avatars.githubusercontent.com/u/19987590?v=4",
      fallback: "VD.",
    },
  },
  {
    id: 1,
    role: "Software Engineer",
    company: "Accenture",
    period: "Feb 2022 - May 2024",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    avatar: {
      src: "https://avatars.githubusercontent.com/u/19987590?v=4",
      fallback: "VD.",
    },
  },
  {
    id: 2,
    role: "FullStack Engineer",
    company: "Campusmonk",
    period: "June 2021 - Feb 2022",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    avatar: {
      src: "https://avatars.githubusercontent.com/u/19987590?v=4",
      fallback: "VD.",
    },
  },
];
