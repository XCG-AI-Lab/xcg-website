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
    <section className="bg-gold-400">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="display-2 max-w-3xl text-ink-950">{title ?? t.home.finalCtaTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-900/80">
            {subtitle ?? t.home.finalCtaSubtitle}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <Link href={`/${locale}/contact`} className="btn-dark justify-center whitespace-nowrap">
            {t.common.freeConsult} <span aria-hidden="true">→</span>
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-ink-950 px-7 py-4 text-sm font-bold text-ink-950 transition-colors hover:bg-ink-950 hover:text-white"
          >
            {t.nav.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
