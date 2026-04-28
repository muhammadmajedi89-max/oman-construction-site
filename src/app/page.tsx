import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import {
  company,
  processSteps,
  projects,
  sectors,
  services,
  stats,
  trustSignals,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-end gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-sand">Construction company in Oman</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] md:text-7xl">
              Built to win trust before the first site visit.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              {company.tagline} This starter site is structured for leads, credibility, and clean
              project presentation across residential, commercial, and industrial work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition hover:bg-[#db7440]"
              >
                Request a Quote
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-sand hover:text-sand"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 self-center lg:justify-self-end">
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur">
              <p className="text-xs uppercase tracking-[0.26em] text-sand">Site focus</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/78">
                <li>Lead-generation layout with clear calls, quote flow, and WhatsApp entry points.</li>
                <li>Structured services, sectors, and proof pages for buyers comparing contractors.</li>
                <li>Trust-driven visual system built for Oman’s construction market.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-semibold text-ink">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-ember">Services</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink">
              A service structure that helps clients understand scope quickly.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-steel">
              The site organizes core offerings into simple, decision-ready categories so visitors
              can move from interest to inquiry without digging through vague marketing copy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="border-t border-ink/10 pt-5">
                <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-stone">
                  {service.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe5d7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-ember">Why this structure works</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink">
              Trust needs to be visible in the first few scrolls.
            </h2>
          </div>
          <div className="space-y-6">
            {trustSignals.map((signal) => (
              <div key={signal} className="border-t border-black/10 pt-4 text-base leading-8 text-steel">
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-ember">Featured projects</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink">
              Proof pages that make experience concrete.
            </h2>
          </div>
          <Link href="/projects" className="hidden text-sm text-ink underline-offset-4 hover:underline md:block">
            Browse all projects
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[28px] bg-white p-7 shadow-soft transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-stone">
                {project.category} · {project.location}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/75">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-xs uppercase tracking-[0.28em] text-ember">Delivery process</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-ink">
            The website mirrors how a strong contractor should feel to work with.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="border-t border-black/10 pt-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-4 lg:px-8">
        {sectors.map((sector) => (
          <div key={sector.title} className="border-t border-black/10 pt-5">
            <p className="text-xs uppercase tracking-[0.22em] text-stone">Sector</p>
            <h3 className="mt-3 text-2xl font-semibold text-ink">{sector.title}</h3>
            <p className="mt-3 text-sm leading-7 text-steel">{sector.description}</p>
          </div>
        ))}
      </section>

      <CtaBanner
        title="Ready to turn this starter into your actual company website?"
        description="The structure is in place. Next we can replace the placeholder brand, add real project media, connect forms, and prepare a deployment target."
      />
    </>
  );
}
