import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import { contactSection } from "@/data/philosophy";
import { BrandIcon } from "@/components/ui-custom/BrandIcons";
import { Reveal } from "@/components/ui-custom/Reveal";
import { QRBlock } from "@/components/ui-custom/riso";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="section-pad relative overflow-hidden">
      {/* Oversized code watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-10 hidden select-none font-mono text-[11rem] leading-none text-ink/[0.045] xl:block"
      >
        {"</>"}
      </span>
      <div aria-hidden="true" className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply" />

      <div className="container-editorial relative">
        {/* Catalogue header */}
        <Reveal>
          <div className="rule-t rule-b flex items-baseline gap-5 pt-3 pb-4 sm:gap-8">
            <span className="mono-tag text-[0.68rem] text-ink">07</span>
            <h2 className="display-section text-ink">Contact</h2>
            <span className="eyebrow ml-auto hidden text-ink-2 sm:block">Open Channels</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-12 max-w-3xl font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.18] text-ink md:mt-16">
            {contactSection.heading.split("?")[0]}
            <span className="text-ink-3">?</span>
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-2">{contactSection.subheading}</p>
        </Reveal>

        {/* Primary CTA — case plate with hard offset */}
        <Reveal delay={0.16}>
          <div className="relative mt-12 border border-ink bg-bg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard md:mt-14">
            <div className="rule-b flex items-center justify-between px-6 py-3 md:px-10">
              <span className="eyebrow text-ink-2">{contactSection.cta}</span>
              <span className="mono-tag text-[0.6rem] uppercase tracking-[0.14em] text-ink-3">
                CH—07 · Direct
              </span>
            </div>
            <a
              href={contactSection.ctaHref}
              className="group flex flex-wrap items-end justify-between gap-6 break-all px-6 py-10 md:px-10 md:py-14"
              aria-label={`Email ${personal.name} at ${personal.email}`}
            >
              <span className="font-display text-[clamp(1.5rem,4.6vw,3.6rem)] leading-[1.08] text-ink transition-colors duration-200 group-hover:text-ink-2">
                {personal.email}
              </span>
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center bg-ink text-bg transition-transform duration-200 group-hover:rotate-45 md:h-16 md:w-16">
                <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              </span>
            </a>

            {/* Ledger of direct channels */}
            <div className="grid border-t border-ink/20 sm:grid-cols-3">
              {/* Phone */}
              <a
                href={`tel:${personal.phoneHref}`}
                className="group flex items-start gap-3.5 border-b border-ink/20 px-6 py-5 transition-colors hover:bg-surface-2 sm:border-b-0 sm:border-r sm:px-7"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/40 text-ink transition-colors group-hover:bg-ink group-hover:text-bg">
                  <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="mono-tag block text-[0.58rem] uppercase tracking-[0.16em] text-ink-3">
                    Phone
                  </span>
                  <span className="mt-1 block text-[0.92rem] text-ink">{personal.phone}</span>
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 border-b border-ink/20 px-6 py-5 sm:border-b-0 sm:border-r sm:px-7">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/40 text-ink">
                  <MapPin className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="mono-tag block text-[0.58rem] uppercase tracking-[0.16em] text-ink-3">
                    Location
                  </span>
                  <span className="mt-1 block text-[0.92rem] text-ink">{personal.location}</span>
                </span>
              </div>

              {/* Direct email */}
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-start gap-3.5 px-6 py-5 transition-colors hover:bg-surface-2 sm:px-7"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/40 text-ink transition-colors group-hover:bg-ink group-hover:text-bg">
                  <Mail className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="mono-tag block text-[0.58rem] uppercase tracking-[0.16em] text-ink-3">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-[0.92rem] text-ink">
                    {personal.email}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Elsewhere + mosaic patch */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex-1">
              <p className="eyebrow mb-6 text-ink-2">Elsewhere</p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {personal.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 border border-ink/40 bg-bg px-4 py-3.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-ink hover:shadow-hard-sm"
                    >
                      <span className="flex items-center gap-2.5">
                        <BrandIcon name={s.icon} className="h-4 w-4 text-ink" />
                        <span className="text-[0.86rem] text-ink">{s.label}</span>
                      </span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-ink-3 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden shrink-0 flex-col items-start gap-2.5 lg:flex">
              <QRBlock seed="abid-contact-mosaic" cell={8} gap={2} />
              <span className="mono-tag text-[0.56rem] uppercase tracking-[0.14em] text-ink-3">
                Mosaic — 08 · Print mark, not a code
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
