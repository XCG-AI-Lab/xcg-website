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
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="beam" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.footer.newsletter}
            </h2>
            <p className="mt-2 text-[15px] text-ink-400">{t.footer.newsletterDesc}</p>
          </div>
          <div className="lg:justify-self-end lg:w-full lg:max-w-md">
            <NewsletterForm locale={locale} />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-gold-400 font-display text-xl font-extrabold text-ink-950">
              X
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight text-white">
              X Consultancy Group
            </span>
          </div>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-400">{t.footer.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {Object.entries(site.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-bold uppercase tracking-wider text-ink-400 transition-colors hover:text-gold-400"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <nav aria-label={t.footer.services}>
          <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-white">{t.footer.services}</h3>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={p(`/services/${s.slug}`)} className="text-[14px] text-ink-400 transition-colors hover:text-white">
                  {locale === "zh" ? s.nameZh : s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label={t.footer.company}>
          <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-white">{t.footer.company}</h3>
          <ul className="mt-5 space-y-2.5">
            <li><Link href={p("/about")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.about}</Link></li>
            <li><Link href={p("/pricing")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.pricing}</Link></li>
            <li><Link href={p("/faq")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.faq}</Link></li>
            <li><Link href={p("/careers")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.careers}</Link></li>
            <li><Link href={p("/contact")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.contact}</Link></li>
            <li><Link href={p("/resources")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.resources}</Link></li>
            <li><Link href={p("/tools")} className="text-[14px] text-ink-400 transition-colors hover:text-white">{t.nav.tools}</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-white">{t.nav.contact}</h3>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            <li>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="text-ink-400 transition-colors hover:text-white">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-ink-400 transition-colors hover:text-white">{site.email}</a>
            </li>
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-ink-400 transition-colors hover:text-white">
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li className="pt-3 text-[13px] leading-relaxed text-ink-500">
              {site.offices[0].street},<br />{site.offices[0].postcode} {site.offices[0].city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-5 py-6 text-xs text-ink-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} · {t.footer.reg} {site.registration}. {t.footer.rights}
          </p>
          <p className="font-bold uppercase tracking-[0.18em] text-ink-500">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
