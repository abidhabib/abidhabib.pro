"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectMockup } from "./ProjectMockup";

type ModalProps = {
  project: Project | null;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function CaseStudyModal({ project, onClose }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    openerRef.current = document.activeElement;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (el) => el.offsetParent !== null
        );
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-ink/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`case-${project.id}-title`}
            initial={reduced ? false : { opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 20, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-ink bg-bg shadow-hard sm:max-h-[86vh]"
          >
            {/* Header */}
            <div className="rule-b flex items-start justify-between gap-6 bg-bg px-6 py-5 md:px-8">
              <div>
                <p className="mono-tag uppercase text-ink">
                  {project.number} — {project.category}
                </p>
                <h3
                  id={`case-${project.id}-title`}
                  className="mt-2 font-display text-xl text-ink md:text-2xl"
                >
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-ink/50 bg-bg text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                <X className="h-4.5 w-4.5" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="scrollbar-fine min-h-0 flex-1 overflow-y-auto">
              {/* Mockup banner */}
              <div className="bg-surface-2/60 p-4 md:p-6">
                <div className="h-48 overflow-hidden border border-ink/40 md:h-60">
                  <ProjectMockup type={project.mockup} />
                </div>
              </div>

              <div className="space-y-9 px-6 py-8 md:px-8 md:py-9">
                <Block title="Overview">
                  <p className="leading-relaxed text-ink-2">{project.caseStudy.overview}</p>
                </Block>

                <Block title="Problem">
                  <p className="leading-relaxed text-ink-2">{project.caseStudy.problem}</p>
                </Block>

                <Block title="Approach">
                  <p className="leading-relaxed text-ink-2">{project.caseStudy.approach}</p>
                </Block>

                <Block title="Architecture">
                  <ol className="space-y-3">
                    {project.caseStudy.architecture.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="pt-0.5 font-mono text-[0.66rem] tracking-[0.12em] text-ink">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.92rem] leading-relaxed text-ink-2">{item}</span>
                      </li>
                    ))}
                  </ol>
                </Block>

                <Block title="Key Capabilities">
                  <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {project.caseStudy.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-ink" aria-hidden="true" />
                        <span className="text-[0.9rem] leading-relaxed text-ink-2">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block title="Technologies">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-ink/30 bg-bg px-2.5 py-1 font-mono text-[0.7rem] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Block>

                <Block title="Engineering Considerations">
                  <ul className="space-y-3.5">
                    {project.caseStudy.considerations.map((c, i) => (
                      <li key={i} className="border-l-2 border-ink pl-4">
                        <p className="text-[0.9rem] leading-relaxed text-ink-2">{c}</p>
                      </li>
                    ))}
                  </ul>
                </Block>

                {/* Features */}
                <Block title="Feature Set">
                  <p className="font-mono text-[0.74rem] leading-loose text-ink-3">
                    {project.features.join(" · ")}
                  </p>
                </Block>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-3.5 flex items-center gap-3">
        <span className="eyebrow text-ink-2">{title}</span>
        <span className="h-px flex-1 bg-ink/20" aria-hidden="true" />
      </h4>
      {children}
    </section>
  );
}
