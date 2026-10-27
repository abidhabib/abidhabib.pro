export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "NEX TECH",
    period: "2024 — Present",
    description:
      "Building and maintaining full-stack web applications using React.js, Node.js, Express.js, and MySQL. Working across frontend interfaces, backend APIs, database operations, authentication, and production workflows.",
    responsibilities: [
      "Develop full-stack web applications",
      "Build administrative dashboards",
      "Implement RESTful APIs",
      "Design and manage MySQL databases",
      "Develop role-based access systems",
      "Implement authentication and session handling",
      "Work on attendance management systems",
      "Develop ROI-oriented platform workflows",
      "Integrate frontend and backend services",
      "Debug production issues",
      "Maintain responsive user experiences",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    role: "React JS Developer",
    company: "SIL Lahore",
    period: "2022 — 2023",
    description:
      "Developed responsive frontend applications using React.js, Redux, Tailwind CSS, and Material UI, with a focus on reusable components, application performance, maintainability, and API integration.",
    responsibilities: [
      "Develop reusable React components",
      "Implement responsive application interfaces",
      "Integrate frontend applications with REST APIs",
      "Manage application state",
      "Create interactive dashboards and UI components",
      "Improve frontend structure and maintainability",
      "Optimize rendering and user experience",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "REST APIs",
    ],
  },
];
