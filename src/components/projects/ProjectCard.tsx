"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectMockup } from "./ProjectMockup";

type CardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export function FeaturedCard({ project, index, onOpen }: CardProps) {
  const flip = index % 2 === 1;
  const reduced = useReducedMotion();
  const M = reduced ? "div" : motion.article;

  return (
    <M
      {...(reduced
        ? {}
        : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-64px" },
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          })}
      className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Plate — mockup in a hairline frame with figure caption */}
      <div className="relative">
        <div className="border border-ink bg-bg transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-hard">
          <div className="aspect-[16/11] border-b border-ink/20">
            <ProjectMockup type={project.mockup} />
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-2.5">
            <span className="mono-tag text-[0.62rem] uppercase tracking-[0.14em] text-ink">
              Fig. {String(index + 2).padStart(2, "0")} — {project.category}
            </span>
            <span className="mono-tag text-[0.6rem] text-ink-3">16:11</span>
          </div>
        </div>
      </div>

      {/* Case file */}
      <div className={flip ? "lg:pr-4" : "lg:pl-4"}>
        <p className="mono-tag uppercase text-ink">
          PRJ—{project.number} · {project.category}
        </p>
        <h3 className="mt-4 font-display text-[1.9rem] leading-[1.12] text-ink md:text-[2.15rem]">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-ink-2">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-ink/30 px-2.5 py-1 font-mono text-[0.66rem] text-ink-2"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="group/btn mt-8 inline-flex items-center gap-2.5 bg-ink px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-sm"
          aria-haspopup="dialog"
        >
          Open Case File
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </M>
  );
}

/* Archive entry — one line in the index ledger */
export function ArchiveCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-haspopup="dialog"
      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink/20 px-2 py-5 text-left transition-colors duration-150 hover:bg-surface-2 sm:px-4 md:grid-cols-[3rem_1fr_10rem_6rem] md:gap-6"
    >
      <span className="mono-tag text-[0.66rem] text-ink-3 group-hover:text-ink">
        {project.number}
      </span>

      <span className="min-w-0">
        <span className="block truncate font-display text-lg leading-snug text-ink">
          {project.title}
        </span>
        <span className="mt-1 hidden truncate pl-0.5 font-mono text-[0.64rem] text-ink-3 md:block">
          {project.tech.slice(0, 4).join(" · ")}
        </span>
      </span>

      <span className="mono-tag hidden text-[0.6rem] uppercase tracking-[0.1em] text-ink-3 md:block">
        {project.category}
      </span>

      <span className="flex h-9 w-9 items-center justify-center border border-ink/40 text-ink transition-all duration-150 group-hover:bg-ink group-hover:text-bg">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </button>
  );
}
