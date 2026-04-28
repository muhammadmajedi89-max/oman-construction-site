import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { company, stats, trustSignals } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`A company story built for credibility in ${company.location}.`}
        description="This page gives space for the company profile, leadership story, milestones, and working principles that help buyers feel confident before they inquire."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ember">Company profile</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink">
            Replace the template story with your real company narrative, founding year, and market focus.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-steel">
          <p>
            The About page should explain how the company operates, what kinds of clients it serves,
            and why its execution style is dependable. For Oman, this page should also signal local
            familiarity, practical delivery, and strong supervision discipline.
          </p>
          <p>
            It is the right place for management profiles, regional presence, major milestones,
            equipment capability, and a short message on quality and safety culture.
          </p>
        </div>
      </section>

      <section className="bg-white/75">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-semibold text-ink">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {trustSignals.map((item) => (
            <div key={item} className="border-t border-black/10 pt-4 text-base leading-8 text-steel">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Use this page to make the company feel established and dependable."
        description="Real leadership photos, certifications, project counts, and market positioning will make this section much stronger."
      />
    </>
  );
}
