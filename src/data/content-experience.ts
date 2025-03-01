export interface Experience {
  title: string;
  data: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    avatar: {
      src: string;
      fallback: string;
    }
  }[]
}

export const experienceData: Experience = {
  title: "EXPERIENCE",
  data: [
    {
      id: 0,
      role: "Software Engineer",
      company: "PrashantAdvait Foundation",
      period: "May 2024 - present",
      description: `PAF provides teachings on Vedanta, veganism & spirituality. As a SvelteKit developer at PrashantAdvait, I successfully integrated GPT Assistant API to enhance user interaction for millions of users through chatbots. I have worked on web-performance, Core web-vitals and developing new features and maintaining previous ones for LMS and Admin dashboard.
`,
      avatar: {
        src: "/images/experience/advait-logo.png",
        fallback: "PA",
      },
    },
    {
      id: 1,
      role: "Software Engineer",
      company: "Accenture",
      period: "Feb 2022 - May 2024",
      description: `Worked on developing several high-performance Azure function apps to handle millions of requests per month for a major client. Optimized the function app's performance by implementing caching, batching, and parallel processing techniques. I played a pivotal role in developing utility first ASP web pages.`,
      avatar: {
        src: "/images/experience/accenture-logo.png",
        fallback: "AC",
      },
    },
    {
      id: 2,
      role: "FullStack Engineer",
      company: "Campusmonk",
      period: "June 2021 - Feb 2022 (Part-time)",
      description: `Campusmonk is a eductaion technology platform which helps students to crack placement exams. I developed highly conversion friendly landing pages and Coding mocktests from scratch.`,
      avatar: {
        src: "/images/experience/cm-logo.png",
        fallback: "CM",
      },
    },
  ]
}
