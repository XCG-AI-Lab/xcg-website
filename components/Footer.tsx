import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { services } from "@/lib/services";
import { site, type Locale } from "@/lib/site";
import NewsletterForm from "./NewsletterForm";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = (path: string) => `/${locale}${path}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      {/* Newsletter band */}
      <div className="border-b border-ink-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-xl font-bold text-white">{t.footer.newsletter}</h2>
            <p className="mt-1 text-sm text-ink-400">{t.footer.newsletterDesc}</p>
          </div>
          <NewsletterForm locale={locale} />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 font-display text-xl font-extrabold text-ink-900">
              X
            </span>
            <span className="font-display text-sm font-bold tracking-wide text-white">
              X CONSULTANCY GROUP
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-400">{t.footer.description}</p>
          <div className="mt-4 flex gap-3">
            {Object.entries(site.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-ink-700 px-3 py-1.5 text-xs font-medium capitalize text-ink-300 hover:border-gold-400 hover:text-gold-400"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <nav aria-label={t.footer.services}>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{t.footer.services}</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={p(`/services/${s.slug}`)} className="text-sm hover:text-gold-400">
                  {locale === "zh" ? s.nameZh : s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label={t.footer.company}>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{t.footer.company}</h3>
          <ul className="space-y-2">
            <li><Link href={p("/about")} className="text-sm hover:text-gold-400">{t.nav.about}</Link></li>
            <li><Link href={p("/pricing")} className="text-sm hover:text-gold-400">{t.nav.pricing}</Link></li>
            <li><Link href={p("/faq")} className="text-sm hover:text-gold-400">{t.nav.faq}</Link></li>
            <li><Link href={p("/careers")} className="text-sm hover:text-gold-400">{t.nav.careers}</Link></li>
            <li><Link href={p("/contact")} className="text-sm hover:text-gold-400">{t.nav.contact}</Link></li>
          </ul>
        </nav>

        {/* Resources + contact */}
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{t.footer.resources}</h3>
          <ul className="space-y-2">
            <li><Link href={p("/resources")} className="text-sm hover:text-gold-400">{t.nav.resources}</Link></li>
            <li><Link href={p("/tools")} className="text-sm hover:text-gold-400">{t.nav.tools}</Link></li>
          </ul>
          <h3 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wider text-white">{t.nav.contact}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-gold-400">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-400">{site.email}</a>
            </li>
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
                WhatsApp: {site.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ink-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} · {t.footer.reg} {site.registration}. {t.footer.rights}
          </p>
          <p>{site.offices[0].street}, {site.offices[0].postcode} {site.offices[0].city}</p>
        </div>
      </div>
    </footer>
  );
}
