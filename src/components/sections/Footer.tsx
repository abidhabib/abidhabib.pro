"use client";

import { ArrowUp } from "lucide-react";
import { navLinks, personal } from "@/data/personal";
import { BrandIcon } from "@/components/ui-custom/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();

  const topSocials = personal.socials.filter((s) =>
    ["github", "linkedin"].includes(s.icon)
  );

  return (
    <footer className="mt-auto bg-deep text-[#f2f2ef]">
      <div className="container-editorial">
        {/* Upper */}
        <div className="grid gap-12 border-b border-[#303330] py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-extrabold tracking-tight">
              AH<span className="text-accent">.</span>
            </p>
            <p className="mt-1.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[#a3a5a1]">
              {personal.name}
            </p>
            <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-[#a3a5a1]">
              {personal.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#a3a5a1]">
              Navigate
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.88rem] text-[#f2f2ef]/85 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#a3a5a1]">
              Connect
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {personal.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} profile`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#303330] text-[#a3a5a1] transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <BrandIcon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${personal.email}`}
              className="mt-6 inline-block break-all text-[0.88rem] text-[#f2f2ef]/85 transition-colors hover:text-accent"
            >
              {personal.email}
            </a>
          </div>
        </div>

        {/* Lower */}
        <div className="flex flex-col items-start gap-6 border-t border-[#303330]/60 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.68rem] text-[#a3a5a1]">
            © {year} {personal.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-4">
              {topSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.68rem] text-[#a3a5a1] transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#a3a5a1] transition-colors hover:text-accent"
              aria-label="Back to top"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#303330] transition-colors group-hover:border-accent/60">
                <ArrowUp
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
