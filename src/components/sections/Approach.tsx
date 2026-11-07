import { philosophy } from "@/data/philosophy";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Approach() {
  return (
    <section id="approach" aria-label="Engineering philosophy" className="relative">
      {/* Ink block — solid ink plate with paper drafting grid */}
      <div className="relative overflow-hidden bg-deep text-[#f0ebde]">
        <div aria-hidden="true" className="bg-graph-ink pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />

        <div className="container-editorial section-pad relative">
          {/* Catalogue header — paper rules */}
          <Reveal>
            <div
              className="flex items-baseline gap-5 pb-4 pt-3 sm:gap-8"
              style={{ borderTop: "1.5px solid rgb(240 235 222 / 0.9)", borderBottom: "1.5px solid rgb(240 235 222 / 0.9)" }}
            >
              <span className="mono-tag text-[0.68rem] text-[#f0ebde]/70">06</span>
              <h2 className="display-section text-[#f0ebde]">Approach</h2>
              <span className="eyebrow ml-auto hidden text-[#f0ebde]/60 sm:block">
                Principles — Flat
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mb-14 mt-14 max-w-3xl font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.18] text-[#f0ebde] md:mb-16">
              {philosophy.heading}
            </p>
          </Reveal>

          <ul className="grid border border-[rgb(240_235_222/0.35)] sm:grid-cols-2">
            {philosophy.principles.map((p, i) => (
              <li
                key={p.index}
                className={`group p-8 transition-colors duration-200 hover:bg-[rgb(240_235_222/0.06)] md:p-10 ${
                  i % 2 === 0 ? "sm:border-r sm:border-[rgb(240_235_222/0.3)]" : ""
                } ${i < 2 ? "border-b border-[rgb(240_235_222/0.3)]" : ""} ${
                  i === 1 ? "sm:border-r-0" : ""
                } ${i >= 2 ? "sm:border-b-0" : ""} ${i === 2 ? "sm:border-r sm:border-[rgb(240_235_222/0.3)]" : ""}`}
              >
                <Reveal delay={(i % 2) * 0.07} y={14}>
                  <div className="flex h-full flex-col">
                    <div className="flex items-baseline justify-between">
                      <span className="mono-tag text-[0.68rem] text-[#f0ebde]/70">{p.index}</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-[rgb(240_235_222/0.3)] transition-colors duration-200 group-hover:bg-[#f0ebde]"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-[1.45rem] leading-tight text-[#f0ebde]">
                      {p.title}
                    </h3>
                    <p className="mt-3.5 text-[0.9rem] leading-relaxed text-[#f0ebde]/65">
                      {p.body}
                    </p>
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
