"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { personal } from "@/data/personal";

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

export function Hero() {
  const reduced = useReducedMotion();
  const headingLines = personal.hero.heading;

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      {/* Blueprint grid backdrop, radially faded */}
      <div
        aria-hidden="true"
        className="bg-blueprint pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="container-editorial relative pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.75fr_1fr] lg:gap-16">
          {/* ------------------------------ Content ------------------------------ */}
          <div>
            <Fade delay={0.05}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 py-1.5 pl-2 pr-4">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent-strong">
                    Open to work
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-2">
                    {personal.hero.eyebrow}
                  </span>
                </span>
              </div>
            </Fade>

            <h1 className="display-hero mt-8 text-ink">
              {headingLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  {reduced ? (
                    <span className="block">{line}</span>
                  ) : (
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.85, ease: EASE, delay: 0.12 + i * 0.1 }}
                    >
                      {line}
                      {i === personal.hero.heading.length - 1 && (
                        <span className="text-accent">.</span>
                      )}
                    </motion.span>
                  )}
                </span>
              ))}
            </h1>

            <Fade delay={0.34} className="mt-7 max-w-xl">
              <p className="text-[1.02rem] leading-relaxed text-ink-2 md:text-lg">
                {personal.hero.description}
              </p>
            </Fade>

            <Fade delay={0.42} className="mt-7">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-3">
                {personal.hero.specialization}
              </p>
            </Fade>

            <Fade delay={0.5} className="mt-10">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bg transition-colors duration-300 hover:bg-accent-strong"
                >
                  Explore My Work
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent hover:text-accent-strong"
                >
                  Get in Touch
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personal.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-2 transition-colors hover:border-ink hover:text-ink"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={personal.socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-2 transition-colors hover:border-ink hover:text-ink"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Fade>

            <Fade delay={0.58} className="mt-10">
              <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {personal.hero.location}
              </p>
            </Fade>
          </div>

          {/* ------------------------------ Portrait ----------------------------- */}
          <Fade delay={0.4} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Offset architectural frame */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl border border-accent/35 sm:block lg:-right-6 lg:-top-6"
              />
              <div className="relative overflow-hidden rounded-3xl border border-line bg-surface">
                <div
                  aria-hidden="true"
                  className="bg-blueprint absolute inset-0"
                  style={{ opacity: 0.6 }}
                />
                <div className="relative aspect-square">
                  <Image
                    src={personal.portrait}
                    alt="Portrait of Abid Habib, Full-Stack Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
                {/* Bottom metadata bar */}
                <div className="relative flex items-center justify-between border-t border-line bg-surface/90 px-5 py-3.5 backdrop-blur">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-2">
                    Islamabad, PK
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.14em] text-ink-3">
                    est. 2022 — engineering
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Scroll hint */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          className="group mt-16 hidden w-fit items-center gap-3 md:mt-20 md:flex"
          {...(reduced
            ? {}
            : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.1, duration: 0.6 } })}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-3 transition-colors group-hover:border-accent group-hover:text-accent">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink-3">
            Scroll
          </span>
          <span className="h-px w-16 overflow-hidden bg-line">
            {reduced ? null : (
              <motion.span
                className="block h-px w-8 bg-accent"
                animate={{ x: [-32, 64] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
              />
            )}
          </span>
        </motion.a>
      </div>
    </section>
  );
}
