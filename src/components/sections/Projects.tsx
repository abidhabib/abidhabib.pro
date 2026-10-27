"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { allProjects, archiveProjects, featuredProjects, projectSection, type Project } from "@/data/projects";
import { FeaturedCard, ArchiveCard } from "@/components/projects/ProjectCard";
import { CaseStudyModal } from "@/components/projects/CaseStudyModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showArchive, setShowArchive] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section id="work" aria-label="Selected work" className="section-pad relative">
      <div className="container-editorial">
        {/* Header */}
        <RevealHeader />

        {/* Featured case studies */}
        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>

        {/* Divider + archive toggle */}
        <div className="mt-20 border-t border-line pt-14 md:mt-28">
          <button
            type="button"
            onClick={() => setShowArchive((v) => !v)}
            aria-expanded={showArchive}
            aria-controls="project-archive"
            className="group flex w-full flex-wrap items-center justify-between gap-5 text-left"
          >
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                {projectSection.archiveHeading}
              </h3>
              <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-ink-2">
                {projectSection.archiveNote}
              </p>
            </div>
            <span className="inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-[0.8rem] font-semibold text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent-strong">
              {showArchive ? "Collapse" : "View All Projects"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${showArchive ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showArchive && (
              <motion.div
                id="project-archive"
                initial={reduced ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduced ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-5 pt-10 sm:grid-cols-2 md:gap-6">
                  {archiveProjects.map((project) => (
                    <ArchiveCard key={project.id} project={project} onOpen={setSelected} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function RevealHeader() {
  const reduced = useReducedMotion();
  const M = reduced ? "div" : motion.div;

  return (
    <div className="mb-16 md:mb-24">
      <M
        {...(reduced
          ? {}
          : {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-72px" },
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            })}
      >
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="font-mono text-xs tracking-[0.22em] text-accent">03</span>
          <span className="h-px w-10 bg-accent/60" />
          <span className="eyebrow text-ink-3">Selected Work</span>
        </div>
      </M>
      <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
        <M
          className="lg:col-span-7"
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-72px" },
                transition: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
              })}
        >
          <h2 className="display-section text-ink">{projectSection.heading}</h2>
        </M>
        <M
          className="lg:col-span-5"
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-72px" },
                transition: { duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] },
              })}
        >
          <div className="lg:pl-10 lg:border-l lg:border-line">
            <p className="max-w-md text-[0.975rem] leading-relaxed text-ink-2">
              {projectSection.subheading}
            </p>
            <p className="mt-4 font-mono text-[0.66rem] text-ink-3">
              {allProjects.length} projects · full-stack to infrastructure
            </p>
          </div>
        </M>
      </div>
    </div>
  );
}
