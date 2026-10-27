import {
  Atom,
  Braces,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Server,
  Sparkles,
  Terminal,
  Wind,
  type LucideIcon,
} from "lucide-react";

/**
 * TechMarquee — infinite horizontal ticker of the core stack.
 * Decorative reinforcement of the Expertise section; the track is a
 * duplicated list so translateX(-50%) loops seamlessly.
 */

type Tech = { icon: LucideIcon; label: string };

const STACK: Tech[] = [
  { icon: Atom, label: "React" },
  { icon: Braces, label: "JavaScript" },
  { icon: FileCode2, label: "TypeScript" },
  { icon: Server, label: "Node.js" },
  { icon: Layers, label: "Express.js" },
  { icon: Database, label: "MySQL" },
  { icon: Container, label: "Docker" },
  { icon: Globe, label: "Nginx" },
  { icon: Terminal, label: "Linux" },
  { icon: Wind, label: "Tailwind CSS" },
  { icon: GitBranch, label: "Git" },
  { icon: Code2, label: "Python" },
  { icon: Sparkles, label: "AI Tooling" },
];

function TrackRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {STACK.map((t) => (
        <span key={t.label} className="flex items-center gap-2.5 pr-14">
          <t.icon className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
          <span className="whitespace-nowrap font-mono text-[0.76rem] uppercase tracking-[0.14em] text-ink-2">
            {t.label}
          </span>
        </span>
      ))}
    </span>
  );
}

export function TechMarquee() {
  return (
    <section
      aria-label="Core technologies"
      className="relative overflow-hidden border-y border-line bg-surface/60"
    >
      {/* Screen-reader summary (the animated track is decorative) */}
      <p className="sr-only">
        Core technologies: {STACK.map((t) => t.label).join(", ")}
      </p>

      <div className="marquee-wrap mask-fade-x overflow-hidden py-5">
        <div className="animate-marquee flex w-max">
          <TrackRow />
          <TrackRow hidden />
        </div>
      </div>
    </section>
  );
}
