/**
 * TechMarquee — infinite mono ticker of the core stack, framed by ink
 * hairlines. Purely typographic: INDEX — LABEL, set in DM Mono.
 * The track is duplicated so translateX(-50%) loops seamlessly.
 */

const STACK = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "Docker",
  "Nginx",
  "Linux",
  "Tailwind CSS",
  "Git",
  "Python",
  "AI Tooling",
];

function TrackRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {STACK.map((label, i) => (
        <span key={label} className="flex items-baseline gap-3 pr-12 sm:pr-16">
          <span className="mono-tag text-[0.6rem] text-ink-3">
            {String(i + 1).padStart(3, "0")}
          </span>
          <span className="whitespace-nowrap font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink">
            {label}
          </span>
          <span aria-hidden="true" className="ml-9 inline-block h-1.5 w-1.5 bg-ink/70" />
        </span>
      ))}
    </span>
  );
}

export function TechMarquee() {
  return (
    <section
      aria-label="Core technologies"
      className="rule-t rule-b relative overflow-hidden bg-bg"
    >
      {/* Screen-reader summary (the animated track is decorative) */}
      <p className="sr-only">Core technologies: {STACK.join(", ")}</p>

      <div className="marquee-wrap mask-fade-x overflow-hidden py-4">
        <div className="animate-marquee flex w-max">
          <TrackRow />
          <TrackRow hidden />
        </div>
      </div>
    </section>
  );
}
