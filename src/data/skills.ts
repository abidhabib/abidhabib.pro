export type SkillCategory = {
  index: string;
  title: string;
  description: string;
  icon: string;
  primary: string[];
  additional?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "Responsive, component-driven interfaces built with modern React — from interactive dashboards to complete application shells.",
    icon: "layout",
    primary: [
      "JavaScript (ES6+)",
      "React.js",
      "Vite",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Responsive Web Design",
      "React Hooks",
      "REST API Integration",
    ],
    additional: [
      "Redux Toolkit",
      "SCSS",
      "Framer Motion",
      "Component Architecture",
      "Client-Side Routing",
      "State Management",
      "Form Validation",
      "Performance Optimization",
    ],
  },
  {
    index: "02",
    title: "Backend Engineering",
    description:
      "Express-based services covering the full request lifecycle — routing, validation, authentication, business logic, and error handling.",
    icon: "server",
    primary: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "Authentication",
      "JWT",
      "Sessions & Cookies",
      "Authorization Middleware",
      "Role-Based Access Control",
      "CRUD Operations",
      "Business Logic Implementation",
    ],
    additional: [
      "API Validation",
      "Error Handling",
      "File Uploads",
      "Scheduled Jobs",
      "Payment Integration",
      "Third-Party APIs",
      "Webhooks",
    ],
  },
  {
    index: "03",
    title: "Database Engineering",
    description:
      "Relational schema design and disciplined SQL — constraints, joins, indexing, and query-level optimization on MySQL and MariaDB.",
    icon: "database",
    primary: [
      "MySQL",
      "MariaDB",
      "SQL",
      "phpMyAdmin",
      "Relational Database Design",
      "SQL JOINs",
      "Subqueries",
      "Aggregation Queries",
      "Database Constraints",
      "Foreign Keys",
      "Indexing",
      "Query Optimization",
      "Backup & Recovery",
    ],
    additional: ["PostgreSQL", "MongoDB", "Sequelize", "Knex"],
  },
  {
    index: "04",
    title: "DevOps & Infrastructure",
    description:
      "Production environments on Ubuntu Linux — Nginx reverse proxies, containerized services, process management, and TLS automation.",
    icon: "terminal",
    primary: [
      "Ubuntu Linux",
      "Linux CLI",
      "Bash",
      "SSH",
      "VPS Administration",
      "Nginx",
      "Reverse Proxy",
      "PM2",
      "Docker",
      "Docker Compose",
      "CloudPanel",
      "SSL/TLS",
      "Let's Encrypt / Certbot",
      "DNS Configuration",
      "Cron Jobs",
      "Git",
      "GitHub",
      "SCP",
      "rsync",
      "Server Troubleshooting",
    ],
    additional: [
      "Static Frontend Deployment",
      "Process Monitoring",
      "Resource Management",
      "Log Inspection",
      "Firewall Configuration",
      "Database Backups",
    ],
  },
  {
    index: "05",
    title: "Automation & API Tooling",
    description:
      "Scripted workflows and HTTP tooling for testing, retries, scheduled operations, and day-to-day server automation.",
    icon: "workflow",
    primary: [
      "Python",
      "Bash Scripting",
      "Python Requests",
      "curl",
      "HTTP/HTTPS",
      "JSON",
      "API Testing",
      "Automation Scripts",
      "Retry Handling",
      "Scheduled Operations",
      "Networking Fundamentals",
    ],
  },
  {
    index: "06",
    title: "AI & Developer Tooling",
    description:
      "Self-hosted AI environments — running and evaluating local LLMs, quantization trade-offs, and CPU-based inference setups.",
    icon: "cpu",
    primary: [
      "Ollama",
      "Open WebUI",
      "Local Large Language Models",
      "Qwen Models",
      "AI Coding Assistants",
      "OpenRouter",
      "Prompt Engineering",
      "Quantized Models",
      "CPU-Based Inference",
      "Context Window Configuration",
      "Self-Hosted AI Environments",
    ],
  },
];

export const additionalFamiliarity = {
  label: "Additional Technical Familiarity",
  note: "Working awareness rather than expert-level tooling.",
  items: [
    "TypeScript",
    "Next.js",
    "PHP",
    "Laravel",
    "WordPress",
    "Machine Learning Fundamentals",
    "Pandas",
    "scikit-learn",
    "TensorFlow",
    "PyTorch",
  ],
};

export const aboutFacts = [
  "Full-Stack Engineering",
  "Backend & Databases",
  "Linux Infrastructure",
  "AI & Automation",
];
