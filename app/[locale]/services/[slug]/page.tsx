import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow-light !text-gold-400">
              {isZh ? stages[service.stage].labelZh : stages[service.stage].label}
            </p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{isZh ? service.nameZh : service.h1}</h1>
            <div className="mt-8 max-w-3xl space-y-5">
              {(isZh ? service.introZh : service.intro).map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink-300">{para}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href={p("/contact")} className="btn-gold">
                {t.common.freeConsult} <span aria-hidden="true">→</span>
              </Link>
              <Link href={p("/pricing")} className="btn-outline-light">
                {t.nav.pricing}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8" aria-labelledby="included-title">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <h2 id="included-title" className="display-2 mt-6">
            {t.common.whatsIncluded}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((d, i) => (
            <div key={d.title} className="bg-white p-8">
              <p className="font-display text-sm font-bold text-gold-500">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink-950">
                {isZh ? d.titleZh : d.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{isZh ? d.descZh : d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why XCG */}
      <section className="bg-ink-950" aria-labelledby="why-title">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <span className="beam" aria-hidden="true" />
            <h2 id="why-title" className="display-2 mt-6 text-white">
              {t.common.whyXcg}
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {(isZh ? service.whyXcgZh : service.whyXcg).map((reason) => (
              <li key={reason} className="border-t border-white/10 pt-6">
                <p className="text-[16px] leading-relaxed text-ink-300">
                  <span aria-hidden="true" className="mr-3 font-display font-bold text-gold-400">—</span>
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-[900px] px-5 py-24 sm:px-8" aria-labelledby="faq-title">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <h2 id="faq-title" className="display-2 mt-6">
            {t.common.faqTitle}
          </h2>
        </Reveal>
        <div className="mt-12 border-b border-ink-200">
          {faqs.map((f, i) => (
            <details key={i} className="accordion">
              <summary>
                {f.q}
                <span className="acc-icon" aria-hidden="true">＋</span>
              </summary>
              <p className="acc-body">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      {(relatedArticles.length > 0 || related.length > 0) && (
        <section className="border-t border-ink-200">
          <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
            {relatedArticles.length > 0 && (
              <>
                <p className="eyebrow">{t.common.fromTheBlog}</p>
                <div className="mt-8">
                  {relatedArticles.map((a) => (
                    <Link key={a!.slug} href={p(`/resources/${a!.cluster}/${a!.slug}`)} className="group block">
                      <article className="flex items-baseline justify-between gap-8 border-t border-ink-200 py-6 transition-colors group-hover:bg-ink-50 sm:px-2">
                        <div>
                          <h3 className="font-display text-lg font-bold tracking-tight text-ink-950 group-hover:underline group-hover:decoration-gold-400 group-hover:decoration-[3px] group-hover:underline-offset-4">
                            {a!.h1}
                          </h3>
                          <p className="mt-1.5 max-w-3xl text-[14px] text-ink-500">{a!.excerpt}</p>
                        </div>
                        <span aria-hidden="true" className="text-gold-500 transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                      </article>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {related.length > 0 && (
              <>
                <p className="eyebrow mt-16">{t.common.relatedServices}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {related.map((r) => (
                    <Link
                      key={r!.slug}
                      href={p(`/services/${r!.slug}`)}
                      className="border border-ink-300 px-5 py-3 text-[14px] font-bold text-ink-950 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white"
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
