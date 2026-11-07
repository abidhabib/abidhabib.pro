import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** "01 / About" — index and label split on the slash. */
  eyebrow: string;
  title: ReactNode;
  subheading?: string;
  aside?: ReactNode;
  id?: string;
};

/**
 * Catalogue section header — small mono index, oversized serif headline,
 * full-width ink rule, right-aligned micro label.
 */
export function SectionHeading({ eyebrow, title, subheading, aside, id }: SectionHeadingProps) {
  const [num, ...rest] = eyebrow.split("/");
  const label = rest.join("/").trim();

  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="rule-t rule-b relative flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
          <span className="mono-tag text-[0.68rem] text-ink">{num.trim()}</span>
          <h2 id={id} className="display-section text-ink">
            {title}
          </h2>
          {label && (
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">{label}</span>
          )}
        </div>
      </Reveal>

      {(subheading || aside) && (
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {aside && (
            <Reveal delay={0.06} className="lg:col-span-5">
              {aside}
            </Reveal>
          )}
          {subheading && (
            <Reveal delay={0.12} className={aside ? "lg:col-span-7" : "lg:col-span-8"}>
              <p className="max-w-2xl text-[0.98rem] leading-relaxed text-ink-2">
                {subheading}
              </p>
            </Reveal>
          )}
        </div>
      )}
    </div>
  );
}
