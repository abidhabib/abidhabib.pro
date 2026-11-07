"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
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
        {/* Catalogue header */}
        <div className="mb-14 md:mb-20">
          <div className="rule-t rule-b flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
            <span className="mono-tag text-[0.68rem] text-ink">03</span>
            <h2 className="display-section text-ink">Index</h2>
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">
              Selected Work — N={allProjects.length}
            </span>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.2] text-ink lg:col-span-7">
              {projectSection.heading}
            </p>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-2 lg:col-span-5 lg:pl-10">
              {projectSection.subheading}
            </p>
          </div>
        </div>

        {/* Featured case files */}
        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>

        {/* Archive — index ledger */}
        <div className="mt-20 rule-t pt-10 md:mt-28">
          <button
            type="button"
            onClick={() => setShowArchive((v) => !v)}
            aria-expanded={showArchive}
            aria-controls="project-archive"
            className="group flex w-full flex-wrap items-center justify-between gap-5 text-left"
          >
            <div>
              <p className="mono-tag uppercase text-ink-3">Appendix — Full Catalogue</p>
              <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">
                {projectSection.archiveHeading}
              </h3>
              <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-ink-2">
                {projectSection.archiveNote}
              </p>
            </div>
            <span className="inline-flex h-12 items-center gap-3 border border-ink px-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-bg">
              {showArchive ? "Collapse" : "View All"}
              <Plus
                className={`h-4 w-4 transition-transform duration-300 ${showArchive ? "rotate-45" : ""}`}
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
                <div className="rule-b-soft mt-10 border-t border-ink/20">
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
