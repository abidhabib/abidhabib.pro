export type EducationItem = {
  degree: string;
  institution?: string;
  period: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    degree: "BS Information Technology",
    institution: "University of Sargodha",
    period: "2018 — 2022",
    description:
      "Studied core information technology and computer science concepts, including software development, database systems, programming, networking, and problem-solving.",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Govt High School",
    period: "2015 — 2017",
    description:
      "Developed foundational knowledge in computer science, programming concepts, logical thinking, and mathematics.",
  },
  {
    degree: "Web Development Course",
    period: "2020 — 2021",
    description:
      "Studied HTML, CSS, JavaScript, React.js, responsive web design, and API integration, with practical application development.",
  },
];
