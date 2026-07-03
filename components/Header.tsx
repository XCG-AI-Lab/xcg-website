"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDict } from "@/lib/i18n";
import { services, stages } from "@/lib/services";
import type { Locale } from "@/lib/site";

const stageOrder = ["start", "run", "grow"] as const;

export default function Header({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const p = (path: string) => `/${locale}${path}`;
  const otherLocale: Locale = locale === "en" ? "zh" : "en";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  const navLinks = [
    { href: p("/about"), label: t.nav.about },
    { href: p("/resources"), label: t.nav.resources },
    { href: p("/tools"), label: t.nav.tools },
    { href: p("/pricing"), label: t.nav.pricing },
    { href: p("/faq"), label: t.nav.faq },
    { href: p("/contact"), label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white" onMouseLeave={() => setServicesOpen(false)}>
      {/* Top hairline of gold — subtle brand signature */}
      <div aria-hidden="true" className="h-[3px] w-full bg-gold-400" />
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Logo */}
        <Link href={p("")} className="flex items-center gap-3" aria-label="X Consultancy Group — Home">
          <span className="flex h-10 w-10 items-center justify-center bg-ink-950 font-display text-xl font-extrabold text-gold-400">
            X
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight text-ink-950">
              X Consultancy Group
            </span>
            <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-ink-500">
              {t.footer.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          <button
            type="button"
            className="nav-link flex items-center gap-1.5"
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            onMouseEnter={() => setServicesOpen(true)}
            onClick={() => setServicesOpen((v) => !v)}
            onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
          >
            {t.nav.services}
            <svg width="9" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href={switchPath}
            className="text-[13px] font-bold text-ink-500 transition-colors hover:text-ink-950"
            aria-label={otherLocale === "zh" ? "切换到中文" : "Switch to English"}
          >
            {otherLocale === "zh" ? "中文" : "EN"}
          </Link>
          <Link href={p("/contact")} className="btn-dark !px-5 !py-3 text-[13px]">
            {t.nav.getQuote}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-ink-200 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M3 1l14 12M17 1L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            ) : (
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            )}
          </svg>
        </button>
      </nav>
      <div className="h-px w-full bg-ink-200" aria-hidden="true" />

      {/* Full-width mega menu */}
      {servicesOpen && (
        <div className="absolute left-0 right-0 hidden border-b border-ink-200 bg-white shadow-[0_24px_48px_-24px_rgba(15,15,16,0.18)] lg:block">
          <div className="mx-auto grid max-w-[1320px] grid-cols-4 gap-10 px-8 py-10">
            <div>
              <span className="beam" aria-hidden="true" />
              <p className="mt-4 font-display text-xl font-bold text-ink-950">{t.home.servicesTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{t.home.journeySubtitle}</p>
              <Link href={p("/services")} className="link-arrow mt-5">
                {t.common.viewAll} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            {stageOrder.map((stage) => (
              <div key={stage}>
                <p className="eyebrow">{locale === "zh" ? stages[stage].labelZh : stages[stage].label}</p>
                <ul className="mt-4 space-y-2.5">
                  {services
                    .filter((s) => s.stage === stage)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={p(`/services/${s.slug}`)}
                          className="text-[15px] font-medium text-ink-700 transition-colors hover:text-ink-950 hover:underline hover:decoration-gold-400 hover:decoration-[3px] hover:underline-offset-4"
                        >
                          {locale === "zh" ? s.nameZh : s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-ink-200 bg-white px-5 pb-8 pt-4 lg:hidden">
          <p className="eyebrow pb-3">{t.nav.services}</p>
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={p(`/services/${s.slug}`)} className="block py-2 text-[15px] font-medium text-ink-700">
                  {locale === "zh" ? s.nameZh : s.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 border-t border-ink-200 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-2.5 font-display text-lg font-bold text-ink-950">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-4">
            <Link href={p("/contact")} className="btn-gold flex-1 justify-center">
              {t.nav.getQuote}
            </Link>
            <Link href={switchPath} className="border border-ink-200 px-4 py-4 text-sm font-bold text-ink-700">
              {otherLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
