import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Project pages turn claims into evidence."
        description="Construction buyers want to see proof. This section is designed for case studies, photos, location tags, and sector-specific examples that support conversion."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[28px] bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-stone">
                {project.category} · {project.location}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{project.summary}</p>
              <div className="mt-6 border-t border-black/10 pt-4 text-sm text-stone">
                Recommended next step: convert each one into a full case study page.
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink">Recommended project filters</h2>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-stone">
            <span>By service</span>
            <span>By sector</span>
            <span>By location</span>
            <span>By project size</span>
            <span>Completed / ongoing</span>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Real photography and scope summaries will make this one of the strongest pages on the site."
        description="This is usually where serious buyers decide whether the company feels proven enough to contact."
      />
    </>
  );
}
