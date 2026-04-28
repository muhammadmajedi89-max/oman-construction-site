import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { sectors } from "@/lib/site-data";

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Different buyers need different proof."
        description="The sectors page helps the website speak to residential, commercial, industrial, and hospitality audiences without forcing them through one generic message."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {sectors.map((sector) => (
            <article key={sector.title} className="border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Sector page</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">{sector.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-steel">{sector.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Sector pages are especially helpful when you serve both homeowners and professional buyers."
        description="They let the same company feel relevant to multiple audiences without diluting the positioning."
      />
    </>
  );
}
