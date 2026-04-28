import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";

const hiringTracks = [
  "Site engineers and supervisors",
  "Project managers and coordinators",
  "MEP specialists",
  "Skilled trade roles",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="A careers page signals that the company is organized, growing, and serious."
        description="This route is ready for hiring content, open roles, application details, and a stronger employer profile once the company wants recruitment support on the site."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">
              Suggested structure for hiring and employer branding.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {hiringTracks.map((track) => (
              <div key={track} className="border-t border-black/10 pt-4 text-sm leading-7 text-steel">
                {track}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="This page can stay simple until active hiring becomes a priority."
        description="A clean role list and basic application flow are enough for the first release."
      />
    </>
  );
}
