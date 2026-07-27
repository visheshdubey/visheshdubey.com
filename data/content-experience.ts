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
    };
  }[];
}

export const experienceData: Experience = {
  title: "EXPERIENCE",
  data: [
    {
      id: 0,
      role: "Software Engineer",
      company: "LendAPI Inc.",
      period: "April 2025 - present",
      description: `LendAPI sells APIs that let companies launch and run digital lending products without building the whole stack themselves. Onboarding, KYC, disbursal, repayments, collections. I work on the frontend replatform from Django templates to React.`,
      avatar: {
        src: "/images/experience/lendapi-logo.png",
        fallback: "LA",
      },
    },
    {
      id: 1,
      role: "Software Engineer",
      company: "PrashantAdvait Foundation",
      period: "May 2024 - April 2025",
      description: `PAF runs courses on Vedanta and related topics, with a big online presence. I built and maintained the SvelteKit frontend: LMS, admin dashboards, checkout, and a GPT-powered chatbot used by a large user base. Also spent time on Core Web Vitals and exam-day reliability.`,
      avatar: {
        src: "/images/experience/advait-logo.png",
        fallback: "PA",
      },
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Accenture",
      period: "Feb 2022 - May 2024",
      description: `Built Azure Function Apps handling millions of requests a month for a major retail client. Added caching, batching, and parallel processing where it mattered. Also worked on utility-first ASP pages for internal tooling.`,
      avatar: {
        src: "/images/experience/accenture-logo.png",
        fallback: "AC",
      },
    },
    {
      id: 3,
      role: "FullStack Engineer",
      company: "Campusmonk",
      period: "June 2021 - Feb 2022 (Part-time)",
      description: `Campusmonk helps students prep for placement exams. I built landing pages and coding mock tests from scratch, part-time while finishing college.`,
      avatar: {
        src: "/images/experience/cm-logo.png",
        fallback: "CM",
      },
    },
  ],
};
