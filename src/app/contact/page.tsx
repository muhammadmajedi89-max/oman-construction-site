import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { company, faqItems } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Make the contact path obvious, fast, and mobile-friendly."
        description="For a business website in this category, the contact page should reduce friction. Phone, WhatsApp, email, office details, and a simple inquiry form should all be visible."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">Office</p>
            <p className="mt-2 text-lg font-semibold text-ink">{company.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">Phone</p>
            <a href={`tel:${company.phone}`} className="mt-2 block text-lg font-semibold text-ink">
              {company.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">Email</p>
            <a href={`mailto:${company.email}`} className="mt-2 block text-lg font-semibold text-ink">
              {company.email}
            </a>
          </div>
        </div>

        <form className="rounded-[30px] bg-white p-8 shadow-soft">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm text-steel">
              <span>Name</span>
              <input className="w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Company</span>
              <input className="w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Phone</span>
              <input className="w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-steel">
              <span>Email</span>
              <input className="w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none" />
            </label>
          </div>
          <label className="mt-5 block space-y-2 text-sm text-steel">
            <span>Message</span>
            <textarea
              rows={6}
              className="w-full rounded-[24px] border border-black/10 bg-transparent px-4 py-3 outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition hover:bg-[#db7440]"
          >
            Send inquiry
          </button>
        </form>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink">Quick FAQs</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="border-t border-black/10 pt-4">
                <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="The contact flow is ready for a form backend once you choose the lead handling method."
        description="That could be email delivery, CRM capture, WhatsApp routing, or a custom quote pipeline."
      />
    </>
  );
}
