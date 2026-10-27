import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import { contactSection } from "@/data/philosophy";
import { BrandIcon } from "@/components/ui-custom/BrandIcons";
import { Reveal } from "@/components/ui-custom/Reveal";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="section-pad relative">
      <div className="container-editorial">
        <Reveal>
          <div className="mb-12 flex items-center gap-4" aria-hidden="true">
            <span className="font-mono text-xs tracking-[0.22em] text-accent">07</span>
            <span className="h-px w-10 bg-accent/60" />
            <span className="eyebrow text-ink-3">Contact</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display-section max-w-3xl text-ink">
            {contactSection.heading.split("?")[0]}
            <span className="text-accent">?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-2">{contactSection.subheading}</p>
        </Reveal>

        {/* Primary CTA — giant email */}
        <Reveal delay={0.16}>
          <div className="mt-14 rounded-3xl border border-line bg-surface p-8 md:mt-16 md:p-14">
            <p className="eyebrow text-ink-3">Start a Conversation</p>
            <a
              href={contactSection.ctaHref}
              className="group mt-6 flex flex-wrap items-end justify-between gap-6 break-all"
              aria-label={`Email ${personal.name} at ${personal.email}`}
            >
              <span className="font-display text-[clamp(1.4rem,4.6vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-accent-strong">
                {personal.email}
              </span>
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-all duration-300 group-hover:bg-accent-strong md:h-16 md:w-16">
                <ArrowUpRight
                  className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>

            <div className="mt-10 border-t border-line pt-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Phone */}
                <a
                  href={`tel:${personal.phoneHref}`}
                  className="group flex items-start gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-2 transition-colors group-hover:border-accent/50 group-hover:text-accent">
                    <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-3">
                      Phone
                    </span>
                    <span className="mt-1 block text-[0.92rem] font-medium text-ink transition-colors group-hover:text-accent-strong">
                      {personal.phone}
                    </span>
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-3">
                      Location
                    </span>
                    <span className="mt-1 block text-[0.92rem] font-medium text-ink">
                      {personal.location}
                    </span>
                  </span>
                </div>

                {/* Direct email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-start gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-2 transition-colors group-hover:border-accent/50 group-hover:text-accent">
                    <Mail className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-3">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-[0.92rem] font-medium text-ink transition-colors group-hover:text-accent-strong">
                      {personal.email}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Social channels */}
        <Reveal delay={0.2}>
          <div className="mt-10">
            <p className="eyebrow mb-6 text-ink-3">Elsewhere</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {personal.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-bg px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface"
                  >
                    <span className="flex items-center gap-3">
                      <BrandIcon name={s.icon} className="h-4 w-4 text-ink-2 transition-colors group-hover:text-accent" />
                      <span className="text-[0.88rem] font-medium text-ink">{s.label}</span>
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-ink-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
