import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { services, getService, stages } from "@/lib/services";
import { getArticle } from "@/content/articles";
import { locales, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const isZh = locale === "zh";
  return pageMetadata({
    locale: locale as Locale,
    path: `/services/${slug}`,
    title: isZh ? `${service.nameZh} | 马来西亚 | XCG` : service.seoTitle,
    description: isZh ? service.shortDescZh : service.metaDescription,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const service = getService(slug);
  if (!service) notFound();
  const t = getDict(locale);
  const isZh = locale === "zh";
  const p = (path: string) => `/${locale}${path}`;
  const name = isZh ? service.nameZh : service.name;
  const faqs = service.faqs.map((f) => (isZh ? { q: f.qZh, a: f.aZh } : { q: f.q, a: f.a }));
  const related = service.relatedSlugs.map(getService).filter(Boolean);
  const relatedArticles = service.relatedArticles.map(getArticle).filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${slug}`,
            locale,
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd(
            [
              { name: t.common.breadcrumbHome, path: "" },
              { name: t.nav.services, path: "/services" },
              { name, path: `/services/${slug}` },
            ],
            locale
          ),
        ]}
      />

      {/* Hero */}
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-wider text-gold-400">
            {isZh ? stages[service.stage].labelZh : stages[service.stage].label}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            {isZh ? service.nameZh : service.h1}
          </h1>
          <div className="mt-6 max-w-3xl space-y-4">
            {(isZh ? service.introZh : service.intro).map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-300">{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={p("/contact")} className="rounded-lg bg-gold-400 px-6 py-3 font-bold text-ink-900 hover:bg-gold-300">
              {t.common.freeConsult}
            </Link>
            <Link href={p("/pricing")} className="rounded-lg border border-ink-600 px-6 py-3 font-semibold text-white hover:border-gold-400 hover:text-gold-400">
              {t.nav.pricing}
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="included-title">
        <h2 id="included-title" className="font-display text-3xl font-bold">{t.common.whatsIncluded}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((d) => (
            <div key={d.title} className="rounded-2xl border border-ink-100 p-6">
              <h3 className="font-display font-bold">{isZh ? d.titleZh : d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{isZh ? d.descZh : d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why XCG */}
      <section className="bg-ink-50" aria-labelledby="why-title">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 id="why-title" className="font-display text-3xl font-bold">{t.common.whyXcg}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {(isZh ? service.whyXcgZh : service.whyXcg).map((reason) => (
              <li key={reason} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <span aria-hidden="true" className="mt-0.5 font-bold text-gold-500">✓</span>
                <span className="text-sm leading-relaxed text-ink-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6" aria-labelledby="faq-title">
        <h2 id="faq-title" className="font-display text-3xl font-bold">{t.common.faqTitle}</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-ink-100 open:border-gold-300 open:bg-gold-50/40">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-gold-600 transition-transform group-open:rotate-45">＋</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related articles + services */}
      {(relatedArticles.length > 0 || related.length > 0) && (
        <section className="bg-ink-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            {relatedArticles.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold">{t.common.fromTheBlog}</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {relatedArticles.map((a) => (
                    <Link
                      key={a!.slug}
                      href={p(`/resources/${a!.cluster}/${a!.slug}`)}
                      className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
                    >
                      <h3 className="font-display font-bold leading-snug group-hover:text-gold-700">{a!.h1}</h3>
                      <p className="mt-2 text-sm text-ink-600">{a!.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {related.length > 0 && (
              <>
                <h2 className="mt-12 font-display text-2xl font-bold">{t.common.relatedServices}</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {related.map((r) => (
                    <Link
                      key={r!.slug}
                      href={p(`/services/${r!.slug}`)}
                      className="rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 hover:border-gold-400 hover:text-gold-700"
                    >
                      {isZh ? r!.nameZh : r!.name} →
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      <CtaSection locale={locale} />
    </>
  );
}
