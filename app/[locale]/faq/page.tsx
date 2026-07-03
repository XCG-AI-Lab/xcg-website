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

      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <div className="rise">
            <p className="eyebrow-light !text-gold-400">{t.nav.faq}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.faqPage.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.faqPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Category quick nav */}
      <nav aria-label="FAQ categories" className="sticky top-[76px] z-30 border-b border-ink-200 bg-white">
        <div className="mx-auto flex max-w-[1320px] gap-7 overflow-x-auto px-5 py-4 sm:px-8">
          {faqCategories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="nav-link shrink-0 whitespace-nowrap">
              {isZh ? c.nameZh : c.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8">
        {faqCategories.map((cat) => {
          const service = getService(cat.serviceSlug);
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-40 py-10" aria-labelledby={`h-${cat.id}`}>
              <span className="beam" aria-hidden="true" />
              <h2 id={`h-${cat.id}`} className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {isZh ? cat.nameZh : cat.name}
              </h2>
              <div className="mt-6 border-b border-ink-200">
                {cat.items.map((item, i) => (
                  <details key={i} className="accordion">
                    <summary>
                      {isZh ? item.qZh : item.q}
                      <span className="acc-icon" aria-hidden="true">＋</span>
                    </summary>
                    <p className="acc-body">{isZh ? item.aZh : item.a}</p>
                  </details>
                ))}
              </div>
              {service && (
                <Link href={`/${locale}/services/${service.slug}`} className="link-arrow mt-6">
                  {t.common.learnMore}: {isZh ? service.nameZh : service.name}
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              )}
            </section>
          );
        })}
      </div>

      <CtaSection locale={locale} />
    </>
  );
}
