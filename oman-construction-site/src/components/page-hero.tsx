type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-hero text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-sand">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
