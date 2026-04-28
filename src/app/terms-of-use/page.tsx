import { PageHero } from "@/components/page-hero";

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of use"
        title="A placeholder terms page for the first project version."
        description="This page should be replaced with the company’s final legal terms before production release."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-[28px] bg-white p-8 text-sm leading-8 text-steel shadow-soft">
          Use this route for the final website terms, disclaimers, usage conditions, and other legal
          statements required for the live business site.
        </div>
      </section>
    </>
  );
}
