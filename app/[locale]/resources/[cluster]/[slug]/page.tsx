import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { articles, getArticle, clusters } from "@/content/articles";
import { getService } from "@/lib/services";
import { site, locales, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles.map((a) => ({ locale, cluster: a.cluster, slug: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; cluster: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, cluster, slug } = await params;
  const article = getArticle(slug);
  if (!article || article.cluster !== cluster) return {};
  return pageMetadata({
    locale: locale as Locale,
    path: `/resources/${cluster}/${slug}`,
    title: article.seoTitle,
    description: article.metaDescription,
    ogType: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; cluster: string; slug: string }>;
}) {
  const { locale: rawLocale, cluster, slug } = await params;
  const locale = rawLocale as Locale;
  const article = getArticle(slug);
  if (!article || article.cluster !== cluster) notFound();
  const t = getDict(locale);
  const isZh = locale === "zh";
  const c = clusters[article.cluster];
  const service = getService(article.serviceSlug);
  const related = article.related.map(getArticle).filter(Boolean);
  const p = (path: string) => `/${locale}${path}`;
  const path = `/resources/${article.cluster}/${article.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: article.seoTitle,
            description: article.metaDescription,
            path,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            locale,
          }),
          faqJsonLd(article.faqs),
          breadcrumbJsonLd(
            [
              { name: t.common.breadcrumbHome, path: "" },
              { name: t.nav.resources, path: "/resources" },
              { name: isZh ? c.nameZh : c.name, path: `/resources/${article.cluster}` },
              { name: article.h1, path },
            ],
            locale
          ),
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
          <Link href={p("/resources")} className="hover:text-gold-700">{t.nav.resources}</Link>
          {" / "}
          <Link href={p(`/resources/${article.cluster}`)} className="hover:text-gold-700">
            {isZh ? c.nameZh : c.name}
          </Link>
        </nav>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">{article.h1}</h1>

        {/* Byline */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-ink-100 pb-5 text-sm text-ink-500">
          <span className="font-semibold text-ink-800">{t.resources.byline}</span>
          <span>
            {t.resources.published} {article.datePublished} · {t.resources.updated}{" "}
            <time dateTime={article.dateModified}>{article.dateModified}</time>
          </span>
          <span>{article.readMins} {t.resources.minRead}</span>
        </div>
        <p className="mt-3 text-xs text-ink-500">{t.resources.reviewedBy}</p>

        {/* Body */}
        <div className="article-body mt-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              <h2>{section.h2}</h2>
              {section.paragraphs?.map((para, j) => <p key={j}>{para}</p>)}
              {section.list && (
                <ul>
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <table>
                  <thead>
                    <tr>
                      {section.table.headers.map((h) => (
                        <th key={h} scope="col">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          ))}
        </div>

        {/* FAQ */}
        <section className="mt-12" aria-labelledby="article-faq">
          <h2 id="article-faq" className="font-display text-2xl font-bold">{t.common.faqTitle}</h2>
          <div className="mt-4 space-y-3">
            {article.faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-ink-100 open:border-gold-300 open:bg-gold-50/40">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-gold-600 transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Service link CTA */}
        {service && (
          <div className="mt-12 rounded-2xl bg-ink-950 p-8 text-center">
            <h2 className="font-display text-xl font-bold text-white">{t.resources.ctaTitle}</h2>
            <p className="mt-2 text-sm text-ink-300">{t.resources.ctaSubtitle}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
              >
                {t.nav.whatsapp}
              </a>
              <Link
                href={p(`/services/${service.slug}`)}
                className="rounded-lg bg-gold-400 px-5 py-2.5 text-sm font-bold text-ink-900 hover:bg-gold-300"
              >
                {isZh ? service.nameZh : service.name} →
              </Link>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="mt-8 rounded-xl bg-ink-50 p-5 text-xs leading-relaxed text-ink-500">
          {t.resources.disclaimer}
        </p>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12" aria-labelledby="related-title">
            <h2 id="related-title" className="font-display text-xl font-bold">{t.resources.relatedTitle}</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r!.slug}>
                  <Link
                    href={p(`/resources/${r!.cluster}/${r!.slug}`)}
                    className="font-semibold text-gold-700 hover:text-gold-800"
                  >
                    {r!.h1} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  );
}
