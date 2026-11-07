import { education } from "@/data/education";
import { educationSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Education() {
  return (
    <section id="education" aria-label="Education" className="section-pad relative">
      <div className="container-editorial">
        {/* Catalogue header */}
        <Reveal>
          <div className="rule-t rule-b flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
            <span className="mono-tag text-[0.68rem] text-ink">05</span>
            <h2 className="display-section text-ink">Foundation</h2>
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">Education</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mb-12 mt-12 max-w-3xl font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.2] text-ink md:mb-16">
            {educationSection.heading}
          </p>
        </Reveal>

        <ol>
          {education.map((item, i) => (
            <li key={item.degree}>
              <Reveal delay={i * 0.05}>
                <article className="group grid gap-4 border-t border-ink/25 py-9 transition-colors duration-150 last:border-b hover:bg-surface-2/60 md:grid-cols-12 md:gap-8 md:py-10">
                  <div className="md:col-span-3">
                    <p className="font-mono text-sm tracking-[0.1em] text-ink">{item.period}</p>
                    <p className="mono-tag mt-2 text-[0.6rem] uppercase tracking-[0.16em] text-ink-3">
                      EDU—{String(i + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-display text-[1.35rem] leading-snug text-ink">
                      {item.degree}
                    </h3>
                    {item.institution && (
                      <p className="mt-2 text-[0.88rem] text-ink-2">{item.institution}</p>
                    )}
                  </div>

                  <div className="md:col-span-5">
                    <p className="max-w-xl leading-relaxed text-ink-2">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
