import { philosophy } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Approach() {
  return (
    <section id="approach" aria-label="Engineering philosophy" className="relative">
      {/* Deep editorial band */}
      <div className="bg-deep text-[#f2f2ef]">
        <div className="container-editorial section-pad">
          <Reveal>
            <div className="mb-12 flex items-center gap-4" aria-hidden="true">
              <span className="font-mono text-xs tracking-[0.22em] text-accent">06</span>
              <span className="h-px w-10 bg-accent/60" />
              <span className="eyebrow text-[#a3a5a1]">Approach</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="display-section mb-14 max-w-3xl md:mb-20">
              {philosophy.heading}
            </h2>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-[#303330] bg-[#303330] sm:grid-cols-2">
            {philosophy.principles.map((p, i) => (
              <li key={p.index} className="group bg-deep p-8 transition-colors duration-300 hover:bg-deep-2 md:p-10">
                <Reveal delay={(i % 2) * 0.07} y={14}>
                  <div className="flex h-full flex-col">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[0.68rem] tracking-[0.2em] text-accent">
                        {p.index}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-[#303330] transition-colors duration-300 group-hover:bg-accent/50"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight md:text-[1.35rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3.5 text-[0.9rem] leading-relaxed text-[#a3a5a1]">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
