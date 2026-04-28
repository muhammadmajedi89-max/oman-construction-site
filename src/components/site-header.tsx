import Link from "next/link";
import { company, navigation } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 text-white lg:px-8">
        <Link href="/" className="min-w-0">
          <p className="text-xs uppercase tracking-[0.28em] text-sand">Oman Construction</p>
          <p className="truncate text-lg font-semibold">{company.name}</p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={company.whatsappUrl}
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-sand hover:text-sand md:inline-flex"
          >
            WhatsApp
          </a>
          <Link
            href="/request-quote"
            className="rounded-full bg-ember px-4 py-2 text-sm font-medium text-white transition hover:bg-[#db7440]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
