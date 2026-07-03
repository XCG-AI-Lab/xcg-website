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

      {/* Article masthead */}
      <header className="border-b border-ink-200">
        <div className="mx-auto max-w-[900px] px-5 pb-12 pt-16 sm:px-8">
          <nav aria-label="Breadcrumb" className="eyebrow">
            <Link href={p("/resources")} className="hover:text-ink-950">{t.nav.resources}</Link>
            <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
            <Link href={p(`/resources/${article.cluster}`)} className="!text-gold-600 hover:text-ink-950">
              {isZh ? c.nameZh : c.name}
            </Link>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            {article.h1}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-500">
            <span className="font-bold text-ink-950">{t.resources.byline}</span>
            <span>
              {t.resources.published} {article.datePublished} · {t.resources.updated}{" "}
              <time dateTime={article.dateModified}>{article.dateModified}</time>
            </span>
            <span>{article.readMins} {t.resources.minRead}</span>
          </div>
          <p className="mt-3 text-[13px] text-ink-400">{t.resources.reviewedBy}</p>
        </div>
      </header>

      <article className="mx-auto max-w-[900px] px-5 py-12 sm:px-8">
        {/* Body */}
        <div className="article-body">
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
        <section className="mt-16" aria-labelledby="article-faq">
          <span className="beam" aria-hidden="true" />
          <h2 id="article-faq" className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {t.common.faqTitle}
          </h2>
          <div className="mt-8 border-b border-ink-200">
            {article.faqs.map((f, i) => (
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

        {/* Service CTA */}
        {service && (
          <div className="mt-16 bg-ink-950 p-10">
            <span className="beam" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white">
              {t.resources.ctaTitle}
            </h2>
            <p className="mt-2 text-[15px] text-ink-400">{t.resources.ctaSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={p(`/services/${service.slug}`)} className="btn-gold">
                {isZh ? service.nameZh : service.name} <span aria-hidden="true">→</span>
              </Link>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
                {t.nav.whatsapp}
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="mt-10 border-l-[3px] border-ink-200 pl-6 text-[13px] leading-relaxed text-ink-500">
          {t.resources.disclaimer}
        </p>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-title">
            <p id="related-title" className="eyebrow">
              {t.resources.relatedTitle}
            </p>
            <div className="mt-6">
              {related.map((r) => (
                <Link key={r!.slug} href={p(`/resources/${r!.cluster}/${r!.slug}`)} className="group flex items-baseline justify-between gap-6 border-t border-ink-200 py-5">
                  <span className="font-display text-lg font-bold tracking-tight text-ink-950 group-hover:underline group-hover:decoration-gold-400 group-hover:decoration-[3px] group-hover:underline-offset-4">
                    {r!.h1}
                  </span>
                  <span aria-hidden="true" className="text-gold-500 transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
