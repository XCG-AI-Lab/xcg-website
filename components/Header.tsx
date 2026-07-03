"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDict } from "@/lib/i18n";
import { services, stages } from "@/lib/services";
import type { Locale } from "@/lib/site";

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

  const stageOrder = ["start", "run", "grow"] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href={p("")} className="flex items-center gap-2" aria-label="X Consultancy Group — Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 font-display text-xl font-extrabold text-gold-400">
            X
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-wide text-ink-900">
              X CONSULTANCY GROUP
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-gold-600">
              {t.footer.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav — visible, not hidden behind hamburger */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Services mega-dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
            >
              {t.nav.services}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 rounded-2xl border border-ink-100 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  {stageOrder.map((stage) => (
                    <div key={stage}>
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gold-600">
                        {locale === "zh" ? stages[stage].labelZh : stages[stage].label}
                      </p>
                      <ul className="space-y-1">
                        {services
                          .filter((s) => s.stage === stage)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={p(`/services/${s.slug}`)}
                                className="block rounded-lg px-2 py-1.5 text-sm text-ink-700 hover:bg-gold-50 hover:text-ink-900"
                              >
                                {locale === "zh" ? s.nameZh : s.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-ink-100 pt-3">
                  <Link href={p("/services")} className="text-sm font-semibold text-gold-600 hover:text-gold-700">
                    {t.common.viewAll} →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-ink-50 hover:text-ink-900 ${
                pathname === link.href ? "text-ink-900" : "text-ink-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {/* Language switcher */}
          <Link
            href={switchPath}
            className="rounded-lg border border-ink-200 px-2.5 py-1.5 text-xs font-semibold text-ink-600 hover:border-gold-400 hover:text-ink-900"
            aria-label={otherLocale === "zh" ? "切换到中文" : "Switch to English"}
          >
            {otherLocale === "zh" ? "中文" : "EN"}
          </Link>
          <Link
            href={p("/contact")}
            className="rounded-lg bg-gold-400 px-4 py-2 text-sm font-bold text-ink-900 shadow-sm hover:bg-gold-300"
          >
            {t.nav.getQuote}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M3 1l14 12M17 1L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <p className="px-2 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-gold-600">
            {t.nav.services}
          </p>
          <ul className="grid grid-cols-2 gap-x-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={p(`/services/${s.slug}`)}
                  className="block rounded-lg px-2 py-2 text-sm text-ink-700 hover:bg-gold-50"
                >
                  {locale === "zh" ? s.nameZh : s.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-2 border-t border-ink-100 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3">
            <Link
              href={p("/contact")}
              className="flex-1 rounded-lg bg-gold-400 px-4 py-2.5 text-center text-sm font-bold text-ink-900"
            >
              {t.nav.getQuote}
            </Link>
            <Link
              href={switchPath}
              className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm font-semibold text-ink-600"
            >
              {otherLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
