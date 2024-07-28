export type Skills = {
  title: string;
  categories: SkillCategory[];
};

export type SkillCategory = {
  title: string;
  items: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
};

export const skillData = {
  title: "SKILLS",
  categories: [
    {
      title: "LANGUAGES",
      items: [
        {
          id: 1,
          name: "Typescript",
          description: "A superset of JavaScript for static typing.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          id: 0,
          name: "Javascript",
          description: "A scripting language used for web development.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          id: 3,
          name: "Java",
          description: "A popular object-oriented programming language.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          id: 2,
          name: "C#",
          description: "A versatile programming language developed by Microsoft.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          id: 6,
          name: "HTML/CSS",
          description: "Markup language for creating web pages and stylesheets.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
      ],
    },
    {
      title: "FRAMEWORKS",
      items: [
        {
          id: 0,
          name: "Next.Js",
          description: "A React framework for server-side rendering.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          id: 1,
          name: "React.Js",
          description: "A JavaScript library for building user interfaces.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          id: 10,
          name: "Svelte/Kit",
          description: "A user interface framework.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        },
        {
          id: 2,
          name: "Express.Js",
          description: "A flexible and minimalist Node.js web application framework.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          id: 3,
          name: "React Native",
          description: "A framework for building mobile applications with React.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          id: 4,
          name: "Expo",
          description: "A platform for building React Native applications.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
        },
        {
          id: 5,
          name: "TailwindCSS",
          description: "A utility-first CSS framework for rapid web development.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          id: 6,
          name: "Strapi.Js",
          description: "An open-source headless CMS for managing content.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg",
        },
        {
          id: 7,
          name: "Framer Motion",
          description: "A library for adding animations to web applications.",
          image: "https://www.framer.com/images/meta/motion/motion-og-image.png",
        },
        {
          id: 8,
          name: "Radix UI",
          description: "A set of UI components for building web interfaces.",
          image: "https://radix-ui.com/images/radix-ui-og-image.png",
        },
        {
          id: 9,
          name: "Chakra UI",
          description: "A user interface library for React applications.",
          image: "",
        },
      ],
    },
    {
      title: "TOOLS",
      items: [
        {
          id: 0,
          name: "Git",
          description: "A distributed version control system for tracking changes in source code.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          id: 1,
          name: "Docker",
          description: "A platform for creating, deploying, and running applications in containers.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          id: 2,
          name: "Storybook",
          description: "A development environment for UI components.",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        },
        {
          id: 3,
          name: "Vitest",
          description: "A blazing fast unit test framework powered by Vite.",
          image: "https://vitest.dev/logo.svg",
        },
        {
          id: 4,
          name: "Jest",
          description: "A delightful JavaScript Testing Framework with a focus on simplicity.",
          image: "https://jestjs.io/img/jest.png",
        },
        {
          id: 5,
          name: "Prisma (ORM)",
          description: "An Object-Relational Mapping tool for databases.",
          image: "https://www.prisma.io/images/prisma-logo.svg",
        },
        {
          id: 6,
          name: "Azure Cloud",
          description: "Microsoft's public cloud computing platform.",
          image: "https://azure.microsoft.com/svghandler/azure-logo.svg",
        },
        {
          id: 7,
          name: "Serverless Apps",
          description: "Serverless computing in Microsoft Azure/AWS/GCP.",
          image: "https://www.serverless.com/img/serverless-logo.png",
        },
        {
          id: 8,
          name: "Figma",
          description: "A collaborative design and prototyping tool.",
          image: "https://www.figma.com/favicon.ico",
        },
        {
          id: 9,
          name: "CircleCI",
          description: "A continuous integration and continuous delivery platform.",
          image: "https://circleci.com/favicon.ico",
        },
        {
          id: 10,
          name: "Jenkins",
          description:
            "An open source automation server which enables developers to reliably build, test, and deploy their software.",
          image: "https://www.jenkins.io/images/logos/jenkins.svg",
        },
      ],
    },
  ],
};
