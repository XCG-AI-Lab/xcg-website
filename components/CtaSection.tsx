import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { site, type Locale } from "@/lib/site";

export default function CtaSection({
  locale,
  title,
  subtitle,
}: {
  locale: Locale;
  title?: string;
  subtitle?: string;
}) {
  const t = getDict(locale);
  return (
    <section className="bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {title ?? t.home.finalCtaTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink-300">{subtitle ?? t.home.finalCtaSubtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="rounded-lg bg-gold-400 px-6 py-3 font-bold text-ink-900 shadow hover:bg-gold-300"
          >
            {t.common.freeConsult}
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-ink-600 px-6 py-3 font-semibold text-white hover:border-gold-400 hover:text-gold-400"
          >
            {t.nav.whatsapp} · {site.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
