import { personal } from "@/data/personal";
import { aboutFacts } from "@/data/skills";
import { aboutSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function About() {
  return (
    <section id="about" aria-label="About" className="section-pad relative">
      <div className="container-editorial">
        {/* Catalogue header */}
        <Reveal>
          <div className="rule-t rule-b flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
            <span className="mono-tag text-[0.68rem] text-ink">01</span>
            <h2 className="display-section text-ink">Profile</h2>
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">The Operator</span>
          </div>
        </Reveal>

        {/* Statement */}
        <Reveal delay={0.06}>
          <p className="mt-14 max-w-4xl font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.18] text-ink md:mt-20">
            Technology is the tool.{" "}
            <span className="text-ink-3">Solving problems is the work.</span>
          </p>
        </Reveal>

        {/* Ledger + body */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.1} className="lg:col-span-4">
            <aside className="border border-ink bg-bg">
              <div className="rule-b flex items-center justify-between px-6 py-3">
                <span className="eyebrow text-ink-2">{aboutSection.meta.label}</span>
                <span className="mono-tag text-[0.6rem] text-ink-3">LED—01</span>
              </div>
              <ul>
                {aboutSection.meta.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 border-b border-ink/15 px-6 py-3.5 last:border-b-0"
                  >
                    <span className="mono-tag text-[0.6rem] text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-right text-[0.9rem] text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rule-t px-6 py-5">
                <span className="eyebrow text-ink-2">Direct</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="mt-2.5 block break-all font-mono text-[0.84rem] text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {personal.email}
                </a>
              </div>
            </aside>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={0.14}>
              <p className="text-lg leading-relaxed text-ink md:text-xl">
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

        {/* Fact strip — four hairline cells */}
        <Reveal delay={0.1}>
          <ul className="mt-16 grid grid-cols-1 border border-ink sm:grid-cols-2 lg:grid-cols-4">
            {aboutFacts.map((fact, i) => (
              <li
                key={fact}
                className="group flex items-center justify-between gap-4 border-b border-ink/20 px-6 py-5 transition-colors duration-200 last:border-b-0 hover:bg-surface-2 sm:border-r sm:last:border-r-0"
              >
                <span className="mono-tag text-[0.62rem] text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="mx-3 h-px flex-1 bg-ink/15" />
                <span className="text-right text-[0.88rem] text-ink">{fact}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
