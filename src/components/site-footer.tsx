import Link from "next/link";
import { company, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#10171d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-sand">Build with clarity</p>
          <h2 className="max-w-md text-2xl font-semibold leading-tight">
            Construction websites should earn trust before the first phone call.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/70">{company.description}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Pages</p>
          <div className="space-y-3 text-sm text-white/75">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
            <div>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
            </div>
            <div>
              <Link href="/faq" className="transition hover:text-white">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/75">
          <p className="font-semibold uppercase tracking-[0.2em] text-white/60">Contact</p>
          <p>{company.location}</p>
          <a href={`tel:${company.phone}`} className="block transition hover:text-white">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="block transition hover:text-white">
            {company.email}
          </a>
          <Link href="/contact" className="inline-flex pt-3 text-sand transition hover:text-white">
            Visit contact page
          </Link>
          <div className="pt-4 text-white/45">
            <Link href="/privacy-policy" className="mr-4 transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
