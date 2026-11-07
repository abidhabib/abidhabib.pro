"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, personal } from "@/data/personal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  /* Scroll state → header treatment */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Escape closes the mobile menu; lock body scroll while open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, closeMenu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-bg transition-colors duration-300 ${
        scrolled ? "rule-b bg-bg/95" : "border-b border-transparent"
      }`}
    >
      {/* Reading ruler — flat ink progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-ink"
      />

      <div className="container-editorial">
        <nav
          aria-label="Primary"
          className="flex h-[4.25rem] items-center justify-between gap-6"
        >
          {/* Monogram — serif plate */}
          <a href="#home" className="group flex items-center gap-3" aria-label={`${personal.name} — home`}>
            <span className="flex h-9 w-9 items-center justify-center bg-ink font-display text-lg leading-none text-bg transition-transform duration-200 group-hover:-translate-y-0.5">
              AH
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-2 sm:block">
              {personal.name}
            </span>
          </a>

          {/* Desktop links — mono index tabs */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-1.5 py-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-ink" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`inline-block h-1.5 w-1.5 transition-colors ${
                        isActive ? "bg-ink" : "bg-ink/25"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {/* CTA — solid ink plate with hard offset on hover */}
            <a
              href="#contact"
              className="group hidden items-center gap-2.5 bg-ink px-5 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-bg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-sm sm:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            {/* Mobile toggle — square plate */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => (open ? closeMenu() : setOpen(true))}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-ink bg-bg text-ink transition-colors hover:bg-ink hover:text-bg lg:hidden"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile navigation — ledger list */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="rule-b bg-bg lg:hidden"
          >
            <ul className="container-editorial flex flex-col py-4">
              {navLinks.map((link, i) => (
                <li key={link.href} className="rule-b-soft last:border-b-0">
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-4 text-ink transition-colors hover:text-ink-3"
                  >
                    <span className="font-display text-xl">{link.label}</span>
                    <span className="mono-tag text-[0.62rem] text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-ink px-5 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bg"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
