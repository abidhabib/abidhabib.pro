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

  return (
    <motion.article
      initial={useReducedMotion() ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Mockup — with hover glow + shine sweep */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(closest-side,rgb(152_109_78/0.2),transparent)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="relative overflow-hidden rounded-2xl border border-line bg-line/30 transition-transform duration-500 group-hover:-translate-y-1">
          <div className="aspect-[16/11]">
            <ProjectMockup type={project.mockup} />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className={flip ? "lg:pr-4" : "lg:pl-4"}>
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-accent">
          {project.number} — {project.category}
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-ink-2">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[0.66rem] text-ink-2"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3 text-[0.85rem] font-semibold text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
          aria-haspopup="dialog"
        >
          View Details
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </motion.article>
  );
}

export function ArchiveCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_44px_-28px_rgb(152_109_78/0.4)] md:p-7">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.66rem] tracking-[0.2em] text-accent">
          {project.number}
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-3">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-ink">
        {project.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-[0.86rem] leading-relaxed text-ink-2">
        {project.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <span className="truncate font-mono text-[0.64rem] text-ink-3">
          {project.tech.slice(0, 3).join(" · ")}
        </span>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex shrink-0 items-center gap-1.5 text-[0.8rem] font-semibold text-ink transition-colors hover:text-accent-strong"
          aria-haspopup="dialog"
        >
          Details
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
