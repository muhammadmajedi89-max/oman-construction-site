import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & news"
        title="A light content layer helps the site feel active and search-friendly."
        description="This section is ready for company updates, project milestones, safety posts, and Oman-specific construction insights."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[28px] bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-stone">{post.category}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="This section becomes much stronger when tied to real project milestones and market updates."
        description="It can stay small at launch and expand over time as part of SEO and trust-building."
      />
    </>
  );
}
