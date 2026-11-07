import { experience } from "@/data/experience";
import { experienceSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Experience() {
  return (
    <section id="experience" aria-label="Professional experience" className="section-pad relative">
      <div className="container-editorial">
        {/* Catalogue header */}
        <Reveal>
          <div className="rule-t rule-b flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
            <span className="mono-tag text-[0.68rem] text-ink">04</span>
            <h2 className="display-section text-ink">Record</h2>
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">
              Experience — N={experience.length}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mb-14 mt-12 max-w-3xl font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.2] text-ink md:mb-16">
            {experienceSection.heading}
          </p>
        </Reveal>

        <ol>
          {experience.map((item, i) => {
            const current = i === 0;
            return (
              <li key={item.company}>
                <Reveal delay={0.04}>
                  <article className="group rule-t relative py-10 md:py-12">
                    <div className="grid gap-6 lg:grid-cols-[10rem_1fr] lg:gap-14">
                      {/* Period column */}
                      <div>
                        <p
                          className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.1em] ${
                            current
                              ? "border-ink bg-ink text-bg"
                              : "border-ink/40 text-ink-2"
                          }`}
                        >
                          {current && (
                            <span
                              aria-hidden="true"
                              className="square-blink inline-block h-1.5 w-1.5 bg-bg"
                            />
                          )}
                          {item.period}
                        </p>
                        <p className="mono-tag mt-3 hidden text-[0.6rem] uppercase tracking-[0.16em] text-ink-3 lg:block">
                          REC—{String(i + 1).padStart(3, "0")}
                          {current && " · ↑ CURRENT"}
                        </p>
                      </div>

                      {/* Role column */}
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                          <h3 className="font-display text-[1.75rem] leading-tight text-ink md:text-[2rem]">
                            {item.role}
                          </h3>
                          <p className="mono-tag uppercase text-ink">{item.company}</p>
                        </div>

                        <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
                          {item.description}
                        </p>

                        <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                          {item.responsibilities.map((r) => (
                            <li key={r} className="flex items-start gap-2.5">
                              <span
                                className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-ink/70"
                                aria-hidden="true"
                              />
                              <span className="text-[0.88rem] leading-relaxed text-ink-2">{r}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 flex flex-wrap gap-1.5">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="border border-ink/30 px-2.5 py-1 font-mono text-[0.66rem] text-ink-2"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
          <li aria-hidden="true" className="rule-t" />
        </ol>
      </div>
    </section>
  );
}
