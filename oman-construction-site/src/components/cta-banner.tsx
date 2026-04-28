import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 text-white lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-sand">Next step</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{description}</p>
        </div>
        <div className="flex items-center justify-start lg:justify-end">
          <Link
            href="/request-quote"
            className="rounded-full bg-ember px-6 py-3 text-sm font-medium text-white transition hover:bg-[#db7440]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
