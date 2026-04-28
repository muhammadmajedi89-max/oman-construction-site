import { PageHero } from "@/components/page-hero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="A placeholder legal page for the initial website structure."
        description="Replace this with the company’s real privacy policy before launch, especially if forms, analytics, or file uploads are enabled."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-[28px] bg-white p-8 text-sm leading-8 text-steel shadow-soft">
          This placeholder page is here so the footer and legal structure can be completed early in
          the build. Real policy text should be added before production deployment.
        </div>
      </section>
    </>
  );
}
