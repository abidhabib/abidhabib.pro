import { personal } from "@/data/personal";
import { aboutFacts } from "@/data/skills";
import { aboutSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function About() {
  return (
    <section id="about" aria-label="About" className="section-pad relative">
      <div className="container-editorial">
        {/* Section label */}
        <Reveal>
          <div className="mb-12 flex items-center gap-4" aria-hidden="true">
            <span className="font-mono text-xs tracking-[0.22em] text-accent">01</span>
            <span className="h-px w-10 bg-accent/60" />
            <span className="eyebrow text-ink-3">About</span>
          </div>
        </Reveal>

        {/* Editorial heading */}
        <Reveal delay={0.06}>
          <h2 className="display-section max-w-4xl text-ink">
            Technology is the tool.{" "}
            <span className="text-ink-3">Solving problems is the work.</span>
          </h2>
        </Reveal>

        {/* Two-column body with side metadata */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.1} className="lg:col-span-4">
            <aside className="rounded-2xl border border-line bg-surface p-7">
              <p className="eyebrow text-ink-3">{aboutSection.meta.label}</p>
              <ul className="mt-5 space-y-3.5">
                {aboutSection.meta.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.92rem] text-ink">
                    <span className="h-px w-5 bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-line pt-6">
                <p className="eyebrow text-ink-3">Direct</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="mt-3 block break-all text-[0.92rem] font-medium text-ink transition-colors hover:text-accent-strong"
                >
                  {personal.email}
                </a>
              </div>
            </aside>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={0.14}>
              <p className="text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
                {aboutSection.paragraphs[0]}
              </p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {aboutSection.paragraphs.slice(1).map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.04}>
                  <p className="leading-relaxed text-ink-2">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Fact strip */}
        <Reveal delay={0.1}>
          <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {aboutFacts.map((fact, i) => (
              <li
                key={fact}
                className="group flex items-center justify-between gap-4 bg-bg px-6 py-5 transition-colors duration-300 hover:bg-surface"
              >
                <span className="font-mono text-[0.62rem] tracking-[0.18em] text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-right text-[0.88rem] font-medium tracking-tight text-ink">
                  {fact}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
