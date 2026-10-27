export const personal = {
  name: "Abid Habib",
  initials: "AH",
  title: "Full-Stack Software Engineer",
  location: "Islamabad, Pakistan",
  email: "abid.habib@outlook.com",
  phone: "+92 344 4292 065",
  phoneHref: "+923444292065",
  website: "https://abidhabib.pro",
  portrait: "/dp.webp",
  portraitPng: "/dp.png",
  tagline: "Full-Stack Software Engineer focused on thoughtful digital systems.",
  hero: {
    eyebrow: "Full-Stack Software Engineer",
    heading: ["Full-Stack Development", "digital", "experiences", "with purpose"],
    description:
      "I'm Abid Habib, a Full-Stack Software Engineer building scalable web applications, reliable backend systems, and thoughtful digital experiences using modern JavaScript technologies.",
    specialization: "React · Node.js · MySQL · Linux Infrastructure",
    location: "Based in Islamabad, Pakistan",
  },
  socials: [
    { label: "GitHub", short: "GH", href: "https://github.com/abidhabib", icon: "github" },
    {
      label: "LinkedIn",
      short: "LI",
      href: "https://www.linkedin.com/in/abid-h-b8056a242",
      icon: "linkedin",
    },
    { label: "WhatsApp", short: "WA", href: "https://wa.me/923444292065", icon: "whatsapp" },
    {
      label: "Instagram",
      short: "IG",
      href: "https://instagram.com/abid._.habib",
      icon: "instagram",
    },
    { label: "Fiverr", short: "FV", href: "https://www.fiverr.com/hammad43", icon: "fiverr" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
