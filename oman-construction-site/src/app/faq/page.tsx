import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/lib/site-data";

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answering common buyer questions reduces hesitation."
        description="This page helps pre-qualify inquiries, clarify coverage and process, and save time for both the client and the sales team."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-8">
          {faqItems.map((item) => (
            <div key={item.question} className="border-t border-black/10 pt-5">
              <h2 className="text-2xl font-semibold text-ink">{item.question}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="FAQ content works best when it mirrors real sales conversations."
        description="Once you share common client questions, this page can be tuned to improve conversion quality."
      />
    </>
  );
}
