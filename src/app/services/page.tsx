import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A service architecture that makes buyers feel oriented fast."
        description="The Services page should separate core offerings clearly, explain what each service includes, and guide visitors into a detailed quote request."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[30px] bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Service category</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-steel"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#efe5d7]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-xs uppercase tracking-[0.28em] text-ember">Recommended expansion</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-ink">
            In the next iteration, each service should have its own detail page.
          </h2>
          <div className="mt-8 grid gap-4 text-sm leading-7 text-steel md:grid-cols-2">
            <p>Civil Construction</p>
            <p>Building Construction</p>
            <p>Villa Construction</p>
            <p>Commercial Construction</p>
            <p>Industrial Construction</p>
            <p>Renovation & Fit-Out</p>
            <p>MEP Works</p>
            <p>Maintenance Services</p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Service pages should answer scope, suitability, and next action."
        description="That is usually enough to raise lead quality before the first sales call."
      />
    </>
  );
}
