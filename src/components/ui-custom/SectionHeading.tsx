import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subheading?: string;
  aside?: ReactNode;
  id?: string;
};

/**
 * Editorial section header: mono eyebrow with rule, display title,
 * optional subheading and right-hand aside (metadata slot).
 */
export function SectionHeading({ eyebrow, title, subheading, aside, id }: SectionHeadingProps) {
  const [num, ...rest] = eyebrow.split("/");
  const label = rest.join("/").trim();

  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="font-mono text-xs tracking-[0.22em] text-accent">{num.trim()}</span>
          <span className="h-px w-10 bg-accent/60" />
          {label && (
            <span className="eyebrow text-ink-3">{label}</span>
          )}
        </div>
      </Reveal>

      <div
        className={`mt-6 grid gap-8 ${
          aside ? "lg:grid-cols-12 lg:items-end" : ""
        }`}
      >
        <Reveal delay={0.08} className={aside ? "lg:col-span-8" : undefined}>
          <h2 id={id} className="display-section text-ink">
            {title}
          </h2>
        </Reveal>
        {(subheading || aside) && (
          <Reveal delay={0.16} className={aside ? "lg:col-span-4" : undefined}>
            <div className="lg:pl-8 lg:border-l lg:border-line">
              {aside}
              {subheading && (
                <p className="text-ink-2 text-[0.975rem] leading-relaxed max-w-md">
                  {subheading}
                </p>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
