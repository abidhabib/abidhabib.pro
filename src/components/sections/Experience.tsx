import { experience } from "@/data/experience";
import { experienceSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Experience() {
  return (
    <section id="experience" aria-label="Professional experience" className="section-pad relative">
      <div className="container-editorial">
        <Reveal>
          <div className="mb-12 flex items-center gap-4" aria-hidden="true">
            <span className="font-mono text-xs tracking-[0.22em] text-accent">04</span>
            <span className="h-px w-10 bg-accent/60" />
            <span className="eyebrow text-ink-3">Experience</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display-section mb-16 max-w-3xl text-ink md:mb-20">
            {experienceSection.heading}
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline spine — desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[calc(38%+1.5rem)] top-2 hidden w-px bg-line lg:block"
          />

          <ol className="space-y-16 lg:space-y-20">
            {experience.map((item, i) => (
              <li key={item.company} className="relative">
                <div className="grid gap-6 lg:grid-cols-[38%_3rem_1fr] lg:gap-0">
                  {/* Years */}
                  <Reveal delay={0.04}>
                    <p className="font-mono text-sm tracking-[0.14em] text-ink-2 lg:pt-1 lg:text-right">
                      {item.period}
                    </p>
                  </Reveal>

                  {/* Marker */}
                  <div aria-hidden="true" className="relative hidden lg:block">
                    <Reveal delay={0.1} y={8}>
                      <span className="absolute left-[1.4375rem] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg" />
                    </Reveal>
                  </div>

                  {/* Role */}
                  <Reveal delay={0.1} className="lg:pl-10">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent">
                      {item.company}
                    </p>
                    <p className="mt-5 max-w-2xl leading-relaxed text-ink-2">{item.description}</p>

                    <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5">
                          <span
                            className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent"
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
                          className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[0.66rem] text-ink-2"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* Mobile marker line */}
                <span
                  aria-hidden="true"
                  className="absolute -left-4 top-2 h-full w-px bg-line lg:hidden"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
