import { PageHero } from "@/components/page-hero";

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="A better quote form usually means better leads."
        description="This page is designed to capture more useful project information than a basic contact form, which makes follow-up faster and more qualified."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <form className="rounded-[32px] bg-white p-8 shadow-soft md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm text-steel">
              <span>Name</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Company</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Phone</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Email</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Project Type</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Location</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Estimated Budget</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Expected Timeline</span>
              <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" />
            </label>
          </div>

          <label className="mt-5 block space-y-2 text-sm text-steel">
            <span>Project Description</span>
            <textarea
              rows={7}
              className="w-full rounded-[24px] border border-black/10 px-4 py-3 outline-none"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition hover:bg-[#db7440]"
            >
              Submit Quote Request
            </button>
            <p className="text-sm text-steel">Next improvement: add file upload and CRM routing.</p>
          </div>
        </form>
      </section>
    </>
  );
}
