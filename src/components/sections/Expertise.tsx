import {
  Layout,
  Server,
  Database,
  Terminal,
  Workflow,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { additionalFamiliarity, skillCategories, type SkillCategory } from "@/data/skills";
import { expertiseSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";
import { PixelBars } from "@/components/ui-custom/riso";

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  terminal: Terminal,
  workflow: Workflow,
  cpu: Cpu,
};

/* Code-flavored watermark per discipline */
const glyphs: Record<string, string> = {
  layout: "</>",
  server: "{ }",
  database: "SQL",
  terminal: "$_",
  workflow: "=>",
  cpu: "0/1",
};

/* Short chart codes for the six disciplines */
const codes: Record<string, string> = {
  layout: "FE",
  server: "BE",
  database: "DB",
  terminal: "OPS",
  workflow: "API",
  cpu: "AI",
};

function CategoryCard({ category }: { category: SkillCategory }) {
  const Icon = icons[category.icon] ?? Layout;
  const glyph = glyphs[category.icon] ?? "</>";

  /* Honest metric: how many tools are indexed under this discipline */
  const indexed = category.primary.length + (category.additional?.length ?? 0);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-ink bg-bg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard">
      {/* Code watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 right-4 select-none font-mono text-[3.4rem] leading-none text-ink/[0.05] transition-colors duration-300 group-hover:text-ink/[0.1]"
      >
        {glyph}
      </span>

      <div className="flex items-center justify-between border-b border-ink/20 px-6 py-3 md:px-7">
        <span className="mono-tag text-[0.66rem] text-ink">{category.index}</span>
        <span className="flex items-center gap-2.5">
          <span className="mono-tag text-[0.58rem] uppercase tracking-[0.12em] text-ink-3">
            N={indexed}
          </span>
          <span className="flex h-9 w-9 items-center justify-center border border-ink/40 text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-bg">
            <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-5 md:px-7">
        <h3 className="font-display text-[1.45rem] leading-tight text-ink">{category.title}</h3>
        <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-2">{category.description}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {category.primary.map((skill) => (
            <span
              key={skill}
              className="border border-ink/30 bg-bg px-2.5 py-1 text-[0.72rem] text-ink transition-colors duration-150 hover:border-ink"
            >
              {skill}
            </span>
          ))}
        </div>

        {category.additional && (
          <p className="mt-auto border-t border-ink/15 pt-4 font-mono text-[0.68rem] leading-relaxed text-ink-3">
            <span className="text-ink-2">Also familiar — </span>
            {category.additional.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}

export function Expertise() {
  const chartValues = skillCategories.map(
    (c) => Math.ceil((c.primary.length + (c.additional?.length ?? 0)) / 5) // 5 rows max
  );
  const chartLabels = skillCategories.map((c) => codes[c.icon] ?? "—");
  const totalIndexed = skillCategories.reduce(
    (n, c) => n + c.primary.length + (c.additional?.length ?? 0),
    0
  );

  return (
    <section id="expertise" aria-label="Technical expertise" className="section-pad relative">
      <div className="container-editorial">
        {/* Catalogue header */}
        <Reveal>
          <div className="rule-t rule-b flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
            <span className="mono-tag text-[0.68rem] text-ink">02</span>
            <h2 className="display-section text-ink">Expertise</h2>
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">Six Disciplines</span>
          </div>
        </Reveal>

        <div className="mb-14 mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="max-w-2xl font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.2] text-ink">
              {expertiseSection.heading}
            </p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
              {expertiseSection.subheading}
            </p>
          </Reveal>

          {/* Pixel-stack chart — tools indexed per discipline */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <figure className="border border-ink/40 px-6 py-5">
              <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="eyebrow text-ink-2">Signal Strength</span>
                <span className="mono-tag text-[0.6rem] text-ink-3">
                  FIG. 02 — N={totalIndexed}
                </span>
              </figcaption>
              <PixelBars
                values={chartValues}
                labels={chartLabels}
                className="mt-5 overflow-x-auto"
              />
              <p className="mt-4 border-t border-ink/15 pt-3 font-mono text-[0.62rem] leading-relaxed text-ink-3">
                Tools indexed per discipline — primary + adjacent, from the stack ledger.
              </p>
            </figure>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {skillCategories.map((category, i) => (
            <Reveal key={category.index} delay={(i % 2) * 0.08} y={18}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>

        {/* Additional familiarity — quieter footnote */}
        <Reveal delay={0.08}>
          <div className="mt-10 border border-dashed border-ink/45 px-7 py-6 md:px-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="eyebrow text-ink-2">{additionalFamiliarity.label}</h3>
              <p className="mono-tag text-[0.64rem] text-ink-3">{additionalFamiliarity.note}</p>
            </div>
            <p className="mt-4 font-mono text-[0.78rem] leading-loose text-ink-3">
              {additionalFamiliarity.items.join(" · ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
