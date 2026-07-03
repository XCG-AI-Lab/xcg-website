import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { faqCategories } from "@/lib/faq";
import { getService } from "@/lib/services";
import type { Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";
  return pageMetadata({
    locale: locale as Locale,
    path: "/faq",
    title: isZh
      ? "常见问题 | 公司秘书、税务、薪资解答 | XCG"
      : "FAQ: Cosec, Tax, Payroll & E-Invoicing Answers | XCG",
    description: isZh
      ? "关于马来西亚公司秘书、会计、税务、电子发票、薪资、人力资源、法律及执照的常见问题解答。"
      : "Answers to the questions Malaysian SMEs ask most — company secretary, accounting, tax, e-invoicing, payroll, HR, legal & licensing. Ask XCG more.",
  });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = getDict(locale);
  const isZh = locale === "zh";

  const allFaqs = faqCategories.flatMap((c) =>
    c.items.map((i) => (isZh ? { q: i.qZh, a: i.aZh } : { q: i.q, a: i.a }))
  );

  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(allFaqs),
          breadcrumbJsonLd(
            [
              { name: t.common.breadcrumbHome, path: "" },
              { name: t.nav.faq, path: "/faq" },
            ],
            locale
          ),
        ]}
      />

      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{t.faqPage.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">{t.faqPage.subtitle}</p>
        </div>
      </section>

      {/* Category quick nav */}
      <nav aria-label="FAQ categories" className="sticky top-16 z-30 border-b border-ink-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {faqCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="shrink-0 rounded-full border border-ink-200 px-4 py-1.5 text-sm font-medium text-ink-700 hover:border-gold-400 hover:text-ink-900"
            >
              {isZh ? c.nameZh : c.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {faqCategories.map((cat) => {
          const service = getService(cat.serviceSlug);
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-32 py-8" aria-labelledby={`h-${cat.id}`}>
              <h2 id={`h-${cat.id}`} className="font-display text-2xl font-bold">
                {isZh ? cat.nameZh : cat.name}
              </h2>
              <div className="mt-4 space-y-3">
                {cat.items.map((item, i) => (
                  <details key={i} className="group rounded-2xl border border-ink-100 open:border-gold-300 open:bg-gold-50/40">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                      {isZh ? item.qZh : item.q}
                      <span aria-hidden="true" className="text-gold-600 transition-transform group-open:rotate-45">＋</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700">{isZh ? item.aZh : item.a}</p>
                  </details>
                ))}
              </div>
              {service && (
                <p className="mt-4 text-sm">
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="font-semibold text-gold-700 hover:text-gold-800"
                  >
                    {t.common.learnMore}: {isZh ? service.nameZh : service.name} →
                  </Link>
                </p>
              )}
            </section>
          );
        })}
      </div>

      <CtaSection locale={locale} />
    </>
  );
}
