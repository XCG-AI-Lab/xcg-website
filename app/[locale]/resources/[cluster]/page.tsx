import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { getArticlesByCluster, clusters } from "@/content/articles";
import type { ClusterSlug } from "@/content/types";
import { locales, type Locale } from "@/lib/site";

const clusterSlugs = Object.keys(clusters) as ClusterSlug[];

export function generateStaticParams() {
  return locales.flatMap((locale) => clusterSlugs.map((cluster) => ({ locale, cluster })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; cluster: string }>;
}): Promise<Metadata> {
  const { locale, cluster } = await params;
  if (!clusterSlugs.includes(cluster as ClusterSlug)) return {};
  const c = clusters[cluster as ClusterSlug];
  const isZh = locale === "zh";
  return pageMetadata({
    locale: locale as Locale,
    path: `/resources/${cluster}`,
    title: isZh ? `${c.nameZh}指南 | XCG资讯中心` : `${c.name} Guides for Malaysian SMEs | XCG`,
    description: isZh ? c.descZh : c.desc,
  });
}

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ locale: string; cluster: string }>;
}) {
  const { locale: rawLocale, cluster: rawCluster } = await params;
  if (!clusterSlugs.includes(rawCluster as ClusterSlug)) notFound();
  const locale = rawLocale as Locale;
  const cluster = rawCluster as ClusterSlug;
  const t = getDict(locale);
  const isZh = locale === "zh";
  const c = clusters[cluster];
  const clusterArticles = getArticlesByCluster(cluster);
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.common.breadcrumbHome, path: "" },
            { name: t.nav.resources, path: "/resources" },
            { name: isZh ? c.nameZh : c.name, path: `/resources/${cluster}` },
          ],
          locale
        )}
      />
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <div className="rise">
            <Link href={p("/resources")} className="eyebrow-light !text-gold-400 hover:underline">
              ← {t.nav.resources}
            </Link>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{isZh ? c.nameZh : c.name}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{isZh ? c.descZh : c.desc}</p>
            <p className="mt-4 text-[14px] text-ink-500">
              {clusterArticles.length} {t.resources.inThisCluster}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8">
        <div>
          {clusterArticles.map((a, i) => (
            <Link key={a.slug} href={p(`/resources/${a.cluster}/${a.slug}`)} className="group block">
              <article className="grid gap-2 border-t border-ink-200 py-8 transition-colors group-hover:bg-ink-50 sm:grid-cols-[80px_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2">
                <p aria-hidden="true" className="font-display text-sm font-bold text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink-950 group-hover:underline group-hover:decoration-gold-400 group-hover:decoration-[3px] group-hover:underline-offset-4 sm:text-2xl">
                    {a.h1}
                  </h2>
                  <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-500">{a.excerpt}</p>
                  <p className="mt-3 text-[13px] text-ink-400">
                    {t.resources.updated} {a.dateModified} · {a.readMins} {t.resources.minRead}
                  </p>
                </div>
                <span aria-hidden="true" className="hidden text-gold-500 transition-transform duration-200 group-hover:translate-x-1.5 sm:block">→</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection locale={locale} title={t.resources.ctaTitle} subtitle={t.resources.ctaSubtitle} />
    </>
  );
}
