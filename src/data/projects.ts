export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  features: string[];
  mockup: "dashboard" | "ledger" | "payments" | "branches" | "infra" | "analytics" | "desktop" | "catalog" | "terminal" | "ai";
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    architecture: string[];
    capabilities: string[];
    considerations: string[];
  };
};

export const featuredProjects: Project[] = [
  {
    id: "membership-platform",
    number: "01",
    title: "Membership & LMS Management Platform",
    category: "Full-Stack Web Application",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    description:
      "An end-to-end membership and transaction management system supporting user registration, subscription plans, hierarchical team structures, automated activity-based calculations, digital credits, administrative workflows, and reporting.",
    features: [
      "User registration and authentication",
      "Membership plans",
      "Referral hierarchy management",
      "Automated calculation workflows",
      "Credits management",
      "OutFlow processing",
      "Admin approval system",
      "Notifications",
      "Financial reporting",
      "SQL-backed data processing",
    ],
    mockup: "dashboard",
    caseStudy: {
      overview:
        "A complete membership platform that connects public-facing registration, subscription handling, and a hierarchical team structure with an administrative control center for approvals, credits, and reporting. The application covers the full lifecycle of a member: signup, plan selection, team growth, activity-based calculations, and outflow.",
      problem:
        "Membership-driven businesses need a single reliable system where member activity translates into accurate balances without manual bookkeeping. Managing hierarchical teams, automated calculations, and Outflow approvals by hand invites errors, disputes, and administrative overhead that grows with every new member.",
      approach:
        "The system was modeled around a relational core: members, plans, teams, activities, credits, and transactions as clearly separated tables with enforced foreign keys. Automated calculation workflows process activity records into credits movements, while every OutFlow passes through an explicit admin approval state before funds are released.",
      architecture: [
        "React.js frontend with protected routes and role-aware views",
        "Express.js REST API with JWT authentication and authorization middleware",
        "MySQL schema covering members, plans, hierarchies, credits, and transactions",
        "Automated calculation workflows for activity-based calculations",
        "Administrative approval queue for OutFlow and account actions",
      ],
      capabilities: [
        "Registration, authentication, and membership plan management",
        "Referral hierarchy tracking across team structures",
        "Credit management, OutFlow requests, and processing states",
        "Admin approvals, notifications, and financial reporting",
      ],
      considerations: [
        "Financial data is kept relational and constraint-backed so balances always reconcile with their transaction history",
        "Role-based access separates member-facing features from administrative operations",
        "Calculations are processed through a single consistent workflow to avoid duplicated or conflicting ledger entries",
      ],
    },
  },
  {
    id: "credits-engine",
    number: "02",
    title: "Financial Credits & Transaction Engine",
    category: "Backend Engineering",
    tech: ["Node.js", "Express.js", "MySQL"],
    description:
      "A backend transaction system designed to manage digital balances, internal credits, OutFlow requests, fee calculations, and administrative financial operations.",
    features: [
      "Ledger-style transaction records",
      "Balance processing",
      "OutFlow request lifecycle",
      "Fee calculations",
      "Approval and rejection handling",
      "Transaction history",
      "Financial reporting and reconciliation logic",
    ],
    mockup: "ledger",
    caseStudy: {
      overview:
        "A dedicated backend engine for financial operations, structured as a ledger rather than a simple balance field. Every credit, debit, fee, and adjustment is an immutable transaction record, and balances are the sum of their history — making reconciliation a query rather than an investigation.",
      problem:
        "Credits features fail quietly when balance is stored as a single mutable number. Without a ledger, there is no way to answer where a balance came from, reverse a mistaken operation, or audit a fee — and every bug becomes a data-integrity incident.",
      approach:
        "Transactions are written as append-only ledger entries with typed operations and references to the requests that caused them. OutFlow move through an explicit lifecycle — requested, calculated with fees, approved or rejected, and settled — with each transition recorded. Reporting and reconciliation logic runs over the ledger instead of trusting in-place balances.",
      architecture: [
        "Node.js and Express.js service layer dedicated to financial operations",
        "MySQL ledger schema with typed, append-only transaction records",
        "State-machine style OutFlow lifecycle with fee calculation steps",
        "Reconciliation queries that derive balances from transaction history",
      ],
      capabilities: [
        "Balance processing backed by ledger-style records",
        "OutFlow request lifecycle with approval and rejection handling",
        "Fee calculations applied as first-class transaction entries",
        "Transaction history and financial reporting for administration",
      ],
      considerations: [
        "Every mutation of value is expressed as a transaction record, never a silent balance edit",
        "Approval and rejection paths are explicit states, so no OutFlow exists in an ambiguous middle ground",
        "The engine deliberately avoids claims of formal banking compliance or independent audit status — it is engineering discipline, not a regulated financial product",
      ],
    },
  },
  {
    id: "crypto-payments",
    number: "03",
    title: "Cryptocurrency Payment Monitoring System",
    category: "Payment Integration",
    tech: ["Node.js", "Blockchain APIs", "MySQL"],
    description:
      "A cryptocurrency payment integration workflow for managing invoice records, transaction identifiers, address allocation, payment status monitoring, and blockchain confirmation checks.",
    features: [
      "Crypto invoice records",
      "Blockchain transaction lookup",
      "Transaction hash handling",
      "Payment confirmation workflows",
      "Invoice expiration",
      "Payment status synchronization",
      "Error and timeout handling",
    ],
    mockup: "payments",
    caseStudy: {
      overview:
        "An integration layer that connects invoicing with blockchain reality. Invoices are issued with dedicated addresses and expected amounts, and the system tracks each one through lookup, confirmation, and settlement — with explicit handling for the cases where the blockchain does not cooperate.",
      problem:
        "Crypto payments are asynchronous and unforgiving: transactions can arrive late, under the expected amount, or not at all, and confirmations take variable time. A naive integration either marks invoices paid on a single broadcast or leaves them stuck in limbo, and both outcomes create manual cleanup work.",
      approach:
        "Each invoice carries its address, expected amount, and status as durable state. A monitoring workflow checks blockchain APIs for transactions against allocated addresses, records transaction hashes as evidence, and advances invoice status only as confirmations accumulate. Expiration and timeout paths are treated as normal business states rather than errors.",
      architecture: [
        "Node.js service orchestrating blockchain API lookups",
        "MySQL records for invoices, allocated addresses, and observed transactions",
        "Status synchronization workflow driven by confirmation counts",
        "Timeout and expiration handling for unpaid or partially paid invoices",
      ],
      capabilities: [
        "Invoice records with address allocation and expected amounts",
        "Blockchain transaction lookup and hash retention",
        "Confirmation-aware payment status workflows",
        "Structured expiration, error, and timeout handling",
      ],
      considerations: [
        "Payment status is derived from confirmation state, so a broadcast alone never settles an invoice",
        "Every observed transaction is stored with its hash, giving support staff evidence instead of guesswork",
        "External API failures are contained with retries and timeouts so monitoring degrades gracefully instead of stalling",
      ],
    },
  },
  {
    id: "multi-branch",
    number: "04",
    title: "Multi-Branch Business Management System",
    category: "Business Software",
    tech: ["Full-Stack Web Development", "SQL", "Role-Based Access"],
    description:
      "A multi-branch operations management system designed to centralize inventory, sales, supplier activity, stock transfers, expenses, payment tracking, and business reporting.",
    features: [
      "Branch management",
      "Inventory",
      "Sales",
      "Stock transfers",
      "Supplier records",
      "Expenses",
      "Payment tracking",
      "Role-based access",
      "Centralized reporting",
    ],
    mockup: "branches",
    caseStudy: {
      overview:
        "An operations platform for businesses running multiple physical locations. Each branch records its own sales, inventory movements, suppliers, and expenses, while ownership sees a consolidated picture — including stock moving between branches and payments owed in either direction.",
      problem:
        "Multi-branch operations usually live in spreadsheets and group chats. Stock sent between locations disappears, supplier payments are tracked inconsistently, and nobody can answer what a branch actually consumed or earned without reconciling files by hand.",
      approach:
        "Branches, inventory, suppliers, and transactions were modeled as centralized relational entities with branch ownership on every operational record. Stock transfers are first-class movements that decrement one branch and increment another, and role-based access scopes each user to their branch while reporting aggregates across the business.",
      architecture: [
        "Full-stack web application with branch-scoped data access",
        "SQL schema for inventory, sales, transfers, suppliers, and expenses",
        "Role-based access control separating branch operations from central administration",
        "Centralized reporting layer aggregating across branches",
      ],
      capabilities: [
        "Branch management with per-location operational records",
        "Inventory tracking including inter-branch stock transfers",
        "Supplier records with payment tracking",
        "Expense recording and centralized business reporting",
      ],
      considerations: [
        "Transfers are recorded as paired movements so total stock stays consistent across branches",
        "Access control is enforced at the data layer, not hidden behind UI state",
        "Reporting queries aggregate over operational records rather than maintaining separate summary tables that can drift",
      ],
    },
  },
  {
    id: "containerized-backend",
    number: "05",
    title: "Containerized Backend Infrastructure",
    category: "DevOps & Backend",
    tech: ["Docker", "Docker Compose", "Node.js", "Express.js", "MySQL", "Nginx"],
    description:
      "A containerized REST API infrastructure integrating an Express backend, MySQL database, persistent storage, environment configuration, reverse proxy routing, and HTTPS.",
    features: [
      "Multi-container services",
      "Database persistence",
      "Environment management",
      "API routing",
      "Reverse proxy",
      "SSL certificate management",
      "Production deployment",
      "Troubleshooting",
    ],
    mockup: "infra",
    caseStudy: {
      overview:
        "A production backend deployed as a set of cooperating containers: an Express API, a MySQL database with persistent volumes, and an Nginx reverse proxy terminating TLS. The stack is defined in Compose, configured through environment files, and deployed to an Ubuntu VPS.",
      problem:
        "Deploying a backend by hand onto a VPS — installing runtimes, starting processes, wiring certificates — produces servers that are impossible to reproduce and stressful to update. Configuration drifts, and a recovery becomes archaeology.",
      approach:
        "The entire runtime is expressed as Docker Compose services with named volumes for database persistence and environment files for configuration. Nginx routes domains to the API container and manages certificates, so redeploying the stack is a controlled sequence — pull, rebuild, restart — rather than live surgery.",
      architecture: [
        "Docker Compose defining API, database, and proxy services",
        "Persistent volumes for MySQL data survival across rebuilds",
        "Environment-based configuration separated per deployment",
        "Nginx reverse proxy with SSL/TLS certificate management",
      ],
      capabilities: [
        "Multi-container orchestration for API, database, and proxy",
        "Persistent storage and environment management",
        "Reverse proxy routing with HTTPS termination",
        "Repeatable production deployment and troubleshooting workflow",
      ],
      considerations: [
        "Database state lives in volumes, so container rebuilds never take data with them",
        "Secrets and environment-specific values stay out of images and inside environment configuration",
        "The proxy is the single TLS boundary, keeping certificate renewal in one predictable place",
      ],
    },
  },
  {
    id: "admin-analytics",
    number: "07",
    title: "Enterprise Admin & Analytics Dashboard",
    category: "Full-Stack Dashboard",
    tech: ["React.js", "Express.js", "MySQL"],
    description:
      "An administrative analytics interface designed to manage operational activity, users, approvals, transactions, notifications, and financial summaries.",
    features: [
      "User management",
      "Reporting",
      "Transaction tables",
      "Admin actions",
      "Search and filtering",
      "Activity metrics",
      "Financial aggregation",
      "Role-based administration",
    ],
    mockup: "analytics",
    caseStudy: {
      overview:
        "The administrative surface for a production platform: a dashboard where operators manage users, review transactions, act on approval queues, and read financial summaries. It is designed for daily operational use rather than demonstration — dense where it should be, quiet where it can be.",
      problem:
        "Admin tools are often afterthoughts — raw database clients or one-off scripts. Operations staff need safe, role-aware interfaces where actions are deliberate, records are searchable, and the state of the platform is visible at a glance without writing SQL.",
      approach:
        "The dashboard was built around its operational objects: users, transactions, approvals, and notifications, each with purpose-built tables, filters, and action flows. Financial summaries are aggregated through SQL, and every administrative action runs through role-based authorization on the API.",
      architecture: [
        "React.js dashboard with role-aware navigation and views",
        "Express.js admin API with authorization middleware on every action",
        "MySQL aggregation queries for activity metrics and financial summaries",
        "Searchable, filterable transaction and user tables",
      ],
      capabilities: [
        "User management with administrative actions",
        "Transaction tables with search and filtering",
        "Approval workflows and notifications",
        "Activity metrics and financial aggregation views",
      ],
      considerations: [
        "Destructive and sensitive actions are separated behind role checks rather than buried in general UI",
        "Tables are built for real volumes — server-side filtering and pagination instead of loading everything",
        "Aggregations are computed from the same records operators act on, so numbers and lists never disagree",
      ],
    },
  },
];

export const archiveProjects: Project[] = [
  {
    id: "remote-desktop",
    number: "06",
    title: "Browser-Based Remote Linux Desktop",
    category: "Infrastructure & DevOps",
    tech: ["Ubuntu", "Docker", "XFCE", "Nginx", "SSL/TLS"],
    description:
      "A self-hosted remote desktop environment accessible through a web browser, configured with container isolation, custom domain routing, secure HTTPS, and resource optimization.",
    features: [
      "Browser-accessible Linux environment",
      "Container deployment",
      "Desktop application access",
      "Nginx reverse proxy",
      "HTTPS",
      "Memory optimization",
      "Service management",
    ],
    mockup: "desktop",
    caseStudy: {
      overview:
        "A full XFCE desktop running inside an isolated Docker container on an Ubuntu VPS, reachable from any browser over HTTPS through a custom domain — useful as a persistent, disposable Linux workspace.",
      problem:
        "Development and testing sometimes need a real Linux desktop that is not the machine you are sitting at. Spinning up a VPS per session is wasteful, and exposing raw desktop protocols directly to the internet is poor hygiene.",
      approach:
        "The desktop stack was containerized for isolation, placed behind Nginx for routing and TLS, and tuned for the VPS memory envelope. Resource limits and service management keep the environment stable as a long-running personal infrastructure service.",
      architecture: [
        "Dockerized XFCE desktop environment on Ubuntu",
        "Nginx reverse proxy with custom domain routing and SSL/TLS",
        "Container resource limits and memory optimization",
        "Service management for a persistent long-running setup",
      ],
      capabilities: [
        "Browser-accessible Linux desktop from anywhere",
        "Container isolation with controlled resource usage",
        "Secure HTTPS access through a custom domain",
      ],
      considerations: [
        "The container bounds memory and CPU so the desktop cannot starve sibling services on the same VPS",
        "TLS termination at Nginx keeps credentials and screen data encrypted in transit",
        "Isolation limits mean the environment is a workspace, not a replacement for a hardened multi-user server",
      ],
    },
  },
  {
    id: "product-catalog",
    number: "08",
    title: "Product Catalog Management Application",
    category: "Frontend Engineering",
    tech: ["React.js", "Vite", "Axios", "Material UI", "SCSS"],
    description:
      "A responsive product administration application supporting structured CRUD operations, reusable components, modal dialogs, API synchronization, and interactive data management.",
    features: [
      "Structured CRUD operations",
      "Reusable component library",
      "Modal-based editing flows",
      "API synchronization with Axios",
      "Responsive data tables and grids",
      "Form validation",
    ],
    mockup: "catalog",
    caseStudy: {
      overview:
        "A focused frontend application for managing product catalogs: creating and editing products through modal flows, synchronizing changes with a REST API, and presenting data in responsive, interactive views.",
      problem:
        "Catalog administration lives or dies on interaction quality. Slow feedback after saves, inconsistent modals, and unvalidated forms compound into a tool operators actively avoid using.",
      approach:
        "The application was composed from reusable components — form fields, table rows, dialog shells — so every screen behaves identically. Axios interceptors centralize API synchronization and error feedback, and validation runs before anything touches the network.",
      architecture: [
        "React.js with Vite tooling and a structured component library",
        "Axios-based API layer with centralized synchronization and error handling",
        "Material UI and SCSS for consistent interactive styling",
        "Modal-driven CRUD flows with client-side validation",
      ],
      capabilities: [
        "Full CRUD product management through modal workflows",
        "Reusable, consistent form and table components",
        "API synchronization with clear success and failure states",
      ],
      considerations: [
        "Components were extracted deliberately so screens stay visually and behaviorally consistent",
        "Validation precedes submission, keeping invalid payloads away from the API",
        "Interaction feedback — saving, saved, failed — is explicit in every mutating flow",
      ],
    },
  },
  {
    id: "linux-automation",
    number: "09",
    title: "Linux Automation & Backup System",
    category: "Infrastructure Automation",
    tech: ["Ubuntu", "Bash", "Cron", "MySQL", "Nginx"],
    description:
      "A collection of server administration and automation workflows covering scheduled database backups, file retention, resource cleanup, system monitoring, and operational maintenance.",
    features: [
      "Scheduled MySQL database backups",
      "File retention policies",
      "Resource cleanup routines",
      "System monitoring scripts",
      "Cron-based scheduling",
      "Operational maintenance workflows",
    ],
    mockup: "terminal",
    caseStudy: {
      overview:
        "A set of Bash scripts and cron schedules that keep Ubuntu servers maintained without constant attention: nightly MySQL dumps, retention-based cleanup, disk and service monitoring, and routine maintenance tasks.",
      problem:
        "A hand-maintained VPS accumulates risk quietly — backups that stopped running months ago, logs that filled a disk, services that died at 3am. Manual maintenance depends on memory, and memory fails.",
      approach:
        "Each maintenance concern became a small, composable script: one for database dumps, one for retention cleanup, one for health checks. Cron schedules encode the policy — when things run — and outputs are kept inspectable so failures are diagnosable from logs.",
      architecture: [
        "Bash scripts for backups, retention, and monitoring",
        "Cron schedules defining operational cadence",
        "MySQL dump-based backups with retention management",
        "Log-inspectable outputs for troubleshooting",
      ],
      capabilities: [
        "Scheduled, retention-managed database backups",
        "Automated cleanup of logs, files, and transient resources",
        "Basic system health monitoring routines",
      ],
      considerations: [
        "Retention policy lives in the cleanup script, so old backups expire on schedule instead of filling the disk",
        "Scripts are deliberately small and readable — automation you cannot audit is automation you cannot trust",
        "Failure surfaces through logs and monitoring rather than silent non-execution",
      ],
    },
  },
  {
    id: "local-ai",
    number: "10",
    title: "Local AI Development Environment",
    category: "AI & Developer Tools",
    tech: ["Ollama", "Open WebUI", "Local LLMs", "Linux"],
    description:
      "A self-hosted environment for testing and using local AI coding models, evaluating quantization, memory consumption, context sizes, inference speed, and developer integration.",
    features: [
      "Self-hosted Ollama runtime",
      "Open WebUI interface",
      "Quantized model evaluation",
      "Memory and context configuration",
      "CPU-based inference testing",
      "Developer workflow integration",
    ],
    mockup: "ai",
    caseStudy: {
      overview:
        "A self-hosted AI workspace built on Ollama and Open WebUI, used to run and evaluate local LLMs — particularly Qwen models — on CPU-only hardware, with attention to quantization levels, memory consumption, context windows, and inference speed.",
      problem:
        "Cloud AI services are convenient but unsuitable for everything — privacy, cost, and availability all bite eventually. The practical question is what a local, CPU-based setup can genuinely deliver for development work, and at which quantization the quality-versus-resource trade-off still makes sense.",
      approach:
        "The environment was assembled on Linux with Ollama as the model runtime and Open WebUI as the interface. Models were evaluated empirically — varying quantization, context size, and prompt structure while watching memory headroom and response latency — and the configuration was tuned for stable daily use rather than benchmarks.",
      architecture: [
        "Ollama runtime serving quantized local models",
        "Open WebUI as the interaction and management layer",
        "CPU-based inference with memory-aware model selection",
        "Context window and prompt configuration per workload",
      ],
      capabilities: [
        "Local LLM inference without external dependencies",
        "Quantization and context-size evaluation workflow",
        "Self-hosted alternative for AI-assisted development",
      ],
      considerations: [
        "Model selection is driven by available memory and realistic latency, not leaderboard claims",
        "Quantization choices balance output quality against CPU inference speed",
        "The stack remains private by design — prompts and code never leave the host",
      ],
    },
  },
];

export const allProjects: Project[] = [...featuredProjects, ...archiveProjects];

export const projectSection = {
  eyebrow: "03 / Selected Work",
  heading: "Systems built to solve real problems.",
  subheading:
    "A selection of applications, systems, and technical infrastructure spanning frontend engineering, backend development, databases, and deployment.",
  archiveHeading: "Further Infrastructure & Engineering Work",
  archiveNote:
    "Additional projects spanning infrastructure engineering, frontend systems, automation, and self-hosted AI tooling.",
};
