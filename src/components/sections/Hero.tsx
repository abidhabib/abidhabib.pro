"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Container,
  Database,
  Github,
  Hexagon,
  Linkedin,
  MapPin,
  Terminal,
} from "lucide-react";
import { personal } from "@/data/personal";
import { CodeTerminal } from "@/components/ui-custom/CodeTerminal";

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

      {/* Aurora glows — warm copper atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[min(760px,100vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(152_109_78/0.17),transparent)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-44 hidden h-[440px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgb(152_109_78/0.12),transparent)] blur-3xl lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 hidden h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgb(32_35_35/0.09),transparent)] blur-3xl lg:block"
      />
      {/* Fine grain texture */}
      <div aria-hidden="true" className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply" />

      <div className="container-editorial relative pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.75fr_1fr] lg:gap-16">
          {/* ------------------------------ Content ------------------------------ */}
          <div>
            <Fade delay={0.05}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 py-1.5 pl-2 pr-4 shadow-[0_10px_30px_-18px_rgb(152_109_78/0.55)] backdrop-blur">
                  <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent-strong">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      {!reduced && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      )}
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
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
                      className={`block ${
                        i === personal.hero.heading.length - 1 ? "text-gradient-accent" : ""
                      }`}
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
              {/* Soft glow behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgb(152_109_78/0.16),transparent)] blur-2xl"
              />

              {/* Offset architectural frame */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl border border-accent/35 sm:block lg:-right-6 lg:-top-6"
              />
              <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgb(24_24_24/0.4)]">
                <div
                  aria-hidden="true"
                  className="bg-blueprint absolute inset-0"
                  style={{ opacity: 0.6 }}
                />
                <div className="relative aspect-square">
                  <Image
                    src={personal.portrait}
                    alt="Portrait of Abid Habib, Full-Stack Software Developer"
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
                    est. 2022 — full stack dev.
                  </span>
                </div>
              </div>

              {/* Floating tech chips */}
              <div
                aria-hidden="true"
                className="animate-float absolute -right-3 -top-6 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3.5 py-2 shadow-[0_14px_36px_-16px_rgb(24_24_24/0.35)] backdrop-blur sm:flex lg:-right-10"
                style={{ animationDuration: "7s" }}
              >
                <Atom className="h-4 w-4 text-accent" strokeWidth={1.75} />
                <span className="font-mono text-[0.66rem] font-medium tracking-[0.06em] text-ink">React</span>
              </div>
              <div
                aria-hidden="true"
                className="animate-float absolute -left-4 top-20 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3.5 py-2 shadow-[0_14px_36px_-16px_rgb(24_24_24/0.35)] backdrop-blur sm:flex lg:-left-12"
                style={{ animationDuration: "5.6s", animationDelay: "0.8s" }}
              >
                <Hexagon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                <span className="font-mono text-[0.66rem] font-medium tracking-[0.06em] text-ink">Node.js</span>
              </div>
              <div
                aria-hidden="true"
                className="animate-float absolute -right-5 top-1/2 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3.5 py-2 shadow-[0_14px_36px_-16px_rgb(24_24_24/0.35)] backdrop-blur sm:flex lg:-right-14"
                style={{ animationDuration: "6.4s", animationDelay: "1.6s" }}
              >
                <Container className="h-4 w-4 text-accent" strokeWidth={1.75} />
                <span className="font-mono text-[0.66rem] font-medium tracking-[0.06em] text-ink">Docker</span>
              </div>
              <div
                aria-hidden="true"
                className="animate-float absolute -right-4 bottom-10 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3.5 py-2 shadow-[0_14px_36px_-16px_rgb(24_24_24/0.35)] backdrop-blur sm:flex lg:-right-12"
                style={{ animationDuration: "6s", animationDelay: "2.4s" }}
              >
                <Database className="h-4 w-4 text-accent" strokeWidth={1.75} />
                <span className="font-mono text-[0.66rem] font-medium tracking-[0.06em] text-ink">MySQL</span>
              </div>

              {/* Live terminal card */}
              <CodeTerminal className="absolute -bottom-12 left-1/2 w-[268px] -translate-x-1/2 sm:-bottom-14 sm:left-2 sm:w-[300px] sm:translate-x-0 lg:-left-16" />
              <span
                aria-hidden="true"
                className="absolute -bottom-16 right-6 hidden font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-3 lg:block"
              >
                <Terminal className="mr-1.5 inline h-3 w-3 text-accent" />
                always building
              </span>
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
