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

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  terminal: Terminal,
  workflow: Workflow,
  cpu: Cpu,
};

function CategoryCard({ category }: { category: SkillCategory }) {
  const Icon = icons[category.icon] ?? Layout;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong md:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.68rem] tracking-[0.2em] text-accent">
          {category.index}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
          <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink md:text-[1.35rem]">
        {category.title}
      </h3>
      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-2">{category.description}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {category.primary.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-line bg-bg px-2.5 py-1 text-[0.72rem] font-medium tracking-tight text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong"
          >
            {skill}
          </span>
        ))}
      </div>

      {category.additional && (
        <p className="mt-5 border-t border-line pt-4 font-mono text-[0.68rem] leading-relaxed text-ink-3">
          <span className="text-ink-2">Also familiar — </span>
          {category.additional.join(" · ")}
        </p>
      )}
    </article>
  );
}

export function Expertise() {
  return (
    <section id="expertise" aria-label="Technical expertise" className="section-pad relative">
      <div className="container-editorial">
        <Reveal>
          <div className="mb-12 flex items-center gap-4" aria-hidden="true">
            <span className="font-mono text-xs tracking-[0.22em] text-accent">02</span>
            <span className="h-px w-10 bg-accent/60" />
            <span className="eyebrow text-ink-3">Expertise</span>
          </div>
        </Reveal>

        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="display-section text-ink">{expertiseSection.heading}</h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="lg:pl-10 lg:border-l lg:border-line">
              <p className="max-w-md text-[0.975rem] leading-relaxed text-ink-2">
                {expertiseSection.subheading}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {skillCategories.map((category, i) => (
            <Reveal key={category.index} delay={(i % 2) * 0.08} y={18}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>

        {/* Additional familiarity — deliberately quieter */}
        <Reveal delay={0.08}>
          <div className="mt-10 rounded-2xl border border-dashed border-line-strong bg-transparent px-7 py-6 md:px-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-2">
                {additionalFamiliarity.label}
              </h3>
              <p className="font-mono text-[0.66rem] text-ink-3">{additionalFamiliarity.note}</p>
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
