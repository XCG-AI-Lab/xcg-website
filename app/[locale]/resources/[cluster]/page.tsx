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
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Link href={p("/resources")} className="text-sm font-semibold text-gold-400 hover:text-gold-300">
            ← {t.nav.resources}
          </Link>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
            {isZh ? c.nameZh : c.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">{isZh ? c.descZh : c.desc}</p>
          <p className="mt-2 text-sm text-ink-500">
            {clusterArticles.length} {t.resources.inThisCluster}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clusterArticles.map((a) => (
            <Link
              key={a.slug}
              href={p(`/resources/${a.cluster}/${a.slug}`)}
              className="group flex flex-col rounded-2xl border border-ink-100 p-6 transition-all hover:border-gold-300 hover:shadow-md"
            >
              <h2 className="font-display text-lg font-bold leading-snug group-hover:text-gold-700">{a.h1}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-600">{a.excerpt}</p>
              <p className="mt-4 text-xs text-ink-400">
                {t.resources.updated} {a.dateModified} · {a.readMins} {t.resources.minRead}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection locale={locale} title={t.resources.ctaTitle} subtitle={t.resources.ctaSubtitle} />
    </>
  );
}
