import { education } from "@/data/education";
import { educationSection } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Education() {
  return (
    <section id="education" aria-label="Education" className="section-pad relative">
      <div className="container-editorial">
        <Reveal>
          <div className="mb-12 flex items-center gap-4" aria-hidden="true">
            <span className="font-mono text-xs tracking-[0.22em] text-accent">05</span>
            <span className="h-px w-10 bg-accent/60" />
            <span className="eyebrow text-ink-3">Education</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display-section mb-14 max-w-3xl text-ink md:mb-20">
            {educationSection.heading}
          </h2>
        </Reveal>

        <ol className="border-t border-line">
          {education.map((item, i) => (
            <li key={item.degree}>
              <Reveal delay={i * 0.05}>
                <article className="group grid gap-5 border-b border-line py-9 transition-colors duration-300 hover:bg-surface/60 md:grid-cols-12 md:gap-8 md:py-11">
                  <div className="md:col-span-3">
                    <p className="font-mono text-sm tracking-[0.14em] text-ink-2">{item.period}</p>
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-3">
                      {String(i + 1).padStart(2, "0")} / education
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-ink">
                      {item.degree}
                    </h3>
                    {item.institution && (
                      <p className="mt-2 text-[0.88rem] font-medium text-accent-strong">
                        {item.institution}
                      </p>
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
