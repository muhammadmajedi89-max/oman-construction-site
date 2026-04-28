import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";

const qualityPoints = [
  "Quality assurance process and inspection checkpoints",
  "Health and safety commitments and site induction routines",
  "Training, supervision, and subcontractor control",
  "Documentation standards for handover and compliance",
  "Environmental and sustainability practices where relevant",
];

export default function QualitySafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Safety"
        title="This page is where operational discipline becomes visible."
        description="For a construction business, quality and safety are not side notes. They should be a major trust signal, especially for commercial, industrial, and institutional buyers."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {qualityPoints.map((point) => (
            <div key={point} className="rounded-[26px] bg-white p-7 shadow-soft">
              <p className="text-sm leading-7 text-steel">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Certifications, memberships, and safety records belong here."
        description="Once real company details are available, this page can become one of the most persuasive parts of the whole site."
      />
    </>
  );
}
