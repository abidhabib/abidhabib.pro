"use client";

import { ArrowUp } from "lucide-react";
import { navLinks, personal } from "@/data/personal";
import { BrandIcon } from "@/components/ui-custom/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-deep text-[#f0ebde]">
      <div className="bg-graph-ink">
        <div className="container-editorial">
          {/* Upper */}
          <div className="grid gap-12 border-b border-[rgb(240_235_222/0.25)] py-14 md:py-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-[#f0ebde] font-display text-lg leading-none text-deep">
                  AH
                </span>
                <span className="mono-tag text-[0.66rem] uppercase tracking-[0.2em] text-[#f0ebde]/70">
                  {personal.name}
                </span>
              </p>
              <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-[#f0ebde]/65">
                {personal.tagline}
              </p>
            </div>

            <nav aria-label="Footer" className="lg:col-span-4">
              <p className="eyebrow text-[#f0ebde]/60">Navigate</p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-[0.88rem] text-[#f0ebde]/85 transition-colors hover:text-[#f0ebde] hover:underline hover:underline-offset-4"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-3">
              <p className="eyebrow text-[#f0ebde]/60">Connect</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {personal.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} profile`}
                      className="flex h-10 w-10 items-center justify-center border border-[rgb(240_235_222/0.35)] text-[#f0ebde]/75 transition-colors hover:bg-[#f0ebde] hover:text-deep"
                    >
                      <BrandIcon name={s.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${personal.email}`}
                className="mt-6 inline-block break-all font-mono text-[0.84rem] text-[#f0ebde]/85 transition-colors hover:text-[#f0ebde]"
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Colophon — the print's production note */}
          <div className="border-b border-[rgb(240_235_222/0.15)] py-6">
            <p className="mono-tag text-[0.66rem] leading-relaxed text-[#f0ebde]/55">
              COLOPHON — Set in Newsreader · Hanken Grotesk · DM Mono. Two inks only:
              ink #171512 on paper #F0EBDE. Graph-paper tone behind every frame.
              No gradients were harmed.
            </p>
          </div>

          {/* Lower */}
          <div className="flex flex-col items-start gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="mono-tag text-[0.68rem] text-[#f0ebde]/55">
              © {year} {personal.name}. All rights reserved.
            </p>

            <a
              href="#home"
              className="group inline-flex items-center gap-2.5 mono-tag uppercase text-[#f0ebde]/70 transition-colors hover:text-[#f0ebde]"
              aria-label="Back to top"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center border border-[rgb(240_235_222/0.35)] transition-colors group-hover:bg-[#f0ebde] group-hover:text-deep">
                <ArrowUp
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
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
