"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { personal } from "@/data/personal";
import { CodeTerminal } from "@/components/ui-custom/CodeTerminal";
import { Cross, PixelColumn, QRBlock, SpineLabel } from "@/components/ui-custom/riso";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Fade({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Flat chip — hairline plate, hard offset, gentle float */
function Chip({
  label,
  className = "",
  duration = 7,
  delay = 0,
}: {
  label: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className={`absolute hidden border border-ink bg-bg px-3 py-1.5 shadow-hard-sm sm:block ${className}`}
      style={
        reduced
          ? undefined
          : { animation: `float-y ${duration}s ease-in-out infinite`, animationDelay: `${delay}s` }
      }
    >
      <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink">{label}</span>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const coordsRef = useRef<HTMLSpanElement>(null);

  /* Live drafting coordinates — direct DOM write, no re-render */
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = coordsRef.current;
    if (!el || reduced) return;
    const x = String(Math.round(e.clientX)).padStart(4, "0");
    const y = String(Math.round(e.clientY)).padStart(4, "0");
    el.textContent = `X:${x} · Y:${y}`;
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden"
      onMouseMove={onMove}
    >
      {/* Riso grain */}
      <div aria-hidden="true" className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply" />

      <div className="container-editorial relative pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Frame header — mono metadata row */}
        <div className="rule-t rule-b flex items-center justify-between gap-4 py-2.5">
          <span className="mono-tag text-[0.62rem] uppercase tracking-[0.18em] text-ink">
            {personal.name} / Portfolio
          </span>
          <span
            ref={coordsRef}
            aria-hidden="true"
            className="mono-tag hidden text-[0.62rem] tracking-[0.12em] text-ink-3 md:block"
          >
            X:0000 · Y:0000
          </span>
          <span className="mono-tag text-[0.62rem] uppercase tracking-[0.18em] text-ink-2">
            Vol.02 — {new Date().getFullYear()}
          </span>
        </div>

        <div className="grid items-center gap-14 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
          {/* ------------------------------ Content ------------------------------ */}
          <div>
            <Fade delay={0.05}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2.5 border border-ink bg-bg py-1.5 pl-2.5 pr-4">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    {!reduced && (
                      <span className="square-blink absolute inline-flex h-full w-full bg-ink" />
                    )}
                    <span className="relative inline-flex h-2 w-2 bg-ink" />
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink">
                    Open to work
                  </span>
                </span>
                <span className="mono-tag text-[0.62rem] uppercase tracking-[0.18em] text-ink-2">
                  {personal.hero.eyebrow}
                </span>
              </div>
            </Fade>

            {/* Cover name — serif 400 with misregistration glitch */}
            <h1 className="display-hero mt-8 text-ink">
              <span className={reduced ? undefined : "glitch"} data-text={`${personal.name}.`}>
                {personal.name}.
              </span>
            </h1>

            <Fade delay={0.3}>
              <p className="mt-6 max-w-xl font-display text-xl italic leading-snug text-ink-2 md:text-2xl">
                {personal.hero.heading.join(" ")}.
              </p>
            </Fade>

            <Fade delay={0.38} className="mt-6 max-w-xl">
              <p className="text-[1rem] leading-relaxed text-ink-2 md:text-[1.05rem]">
                {personal.hero.description}
              </p>
            </Fade>

            <Fade delay={0.46} className="mt-7">
              <p className="mono-tag uppercase text-ink-3">{personal.hero.specialization}</p>
            </Fade>

            <Fade delay={0.54} className="mt-10">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
                >
                  View Selected Work
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 border border-ink bg-bg px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-ink hover:text-bg"
                >
                  Get in Touch
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personal.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-11 w-11 items-center justify-center border border-ink/50 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={personal.socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-11 w-11 items-center justify-center border border-ink/50 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Fade>

            <Fade delay={0.62} className="mt-10">
              <p className="flex items-center gap-2.5 mono-tag uppercase text-ink-3">
                <Cross className="h-3 w-3 text-ink" />
                {personal.hero.location} — 33.6844° N, 73.0479° E
              </p>
            </Fade>
          </div>

          {/* ------------------------------ Plate ------------------------------ */}
          <Fade delay={0.4} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Spine label down the right margin */}
              <SpineLabel className="absolute -right-9 top-2 hidden lg:block">
                Two-Color System — Ink on Paper — Catalogue
              </SpineLabel>

              {/* Pixel glitch column — stair-stepped scanlines */}
              <PixelColumn
                widths={[46, 72, 100, 84, 58, 34]}
                className="absolute -right-14 -top-16 hidden w-44 text-ink lg:block"
              />

              {/* Offset second pass of the plate */}
              <div aria-hidden="true" className="absolute -right-3.5 -top-3.5 h-full w-full border border-ink/60" />

              {/* Portrait plate */}
              <div className="relative border border-ink bg-bg">
                {/* Caption bar — plate header */}
                <div className="rule-b flex items-center justify-between gap-3 bg-bg px-4 py-2.5">
                  <span className="mono-tag text-[0.62rem] uppercase tracking-[0.16em] text-ink">
                    Fig. 01 — {personal.name}
                  </span>
                  <span className="mono-tag text-[0.62rem] uppercase tracking-[0.12em] text-ink-3">
                    ISB, PK — est. 2022
                  </span>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={personal.portrait}
                    alt="Portrait of Abid Habib, Full-Stack Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                  {/* registration crosses on the corners */}
                  <Cross className="absolute -left-1.5 -top-1.5 bg-bg text-ink" />
                  <Cross className="absolute -right-1.5 -top-1.5 bg-bg text-ink" />
                  <Cross className="absolute -bottom-1.5 -left-1.5 bg-bg text-ink" />
                  <Cross className="absolute -bottom-1.5 -right-1.5 bg-bg text-ink" />
                </div>
              </div>

              {/* QR mosaic patch */}
              <div className="absolute -bottom-16 -right-4 hidden items-end gap-2.5 sm:flex lg:-right-8">
                <QRBlock seed="abid-habib-portfolio" cell={7} gap={2} />
                <span className="mono-tag mb-0.5 text-[0.56rem] uppercase tracking-[0.14em] text-ink-3">
                  Mosaic — 08
                </span>
              </div>

              {/* Floating stack plates */}
              <Chip label="React" className="-left-6 top-12 lg:-left-12" duration={7} />
              <Chip label="Node.js" className="-left-8 top-1/2 lg:-left-14" duration={6} delay={0.9} />
              <Chip label="MySQL" className="-right-5 bottom-44 lg:-right-9" duration={6.4} delay={1.7} />

              {/* Live ink-block terminal — flows below the plate on mobile,
                  overlaps the plate's bottom-left corner from sm up */}
              <CodeTerminal className="mt-6 w-full max-w-[360px] sm:absolute sm:-bottom-28 sm:left-0 sm:mt-0 sm:w-[300px] lg:-left-14" />
            </div>
          </Fade>
        </div>

        {/* Frame footer — scroll cue + sheet number */}
        <div className="mt-28 flex items-center justify-between gap-6 md:mt-36">
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            className="group flex items-center gap-3"
            {...(reduced
              ? {}
              : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.1, duration: 0.6 } })}
          >
            <span className="flex h-10 w-10 items-center justify-center border border-ink/50 text-ink transition-colors group-hover:bg-ink group-hover:text-bg">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="mono-tag uppercase text-ink-3">Scroll — Index</span>
            <span className="hidden h-px w-16 overflow-hidden bg-ink/20 sm:block">
              {!reduced && (
                <motion.span
                  className="block h-px w-8 bg-ink"
                  animate={{ x: [-32, 64] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
                />
              )}
            </span>
          </motion.a>
          <span className="mono-tag text-[0.62rem] tracking-[0.14em] text-ink-3">01 / 07</span>
        </div>
      </div>
    </section>
  );
}
