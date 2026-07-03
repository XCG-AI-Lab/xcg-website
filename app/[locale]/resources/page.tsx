import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { articles, clusters } from "@/content/articles";
import type { ClusterSlug } from "@/content/types";
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
    path: "/resources",
    title: isZh
      ? "资讯中心 | 马来西亚税务与合规指南 | XCG"
      : "Resources: Malaysia Tax, Cosec & Payroll Guides | XCG",
    description: isZh
      ? "30多篇关于马来西亚电子发票、SST、公司税、公司秘书及薪资的原创指南——由XCG咨询团队撰写并持续更新。"
      : "30+ original guides on Malaysian e-invoicing, SST, corporate tax, company secretarial & payroll — written and updated by the XCG advisory team.",
  });
}

const clusterOrder: ClusterSlug[] = ["tax", "company-secretarial", "payroll-hr"];

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = getDict(locale);
  const isZh = locale === "zh";
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.common.breadcrumbHome, path: "" },
            { name: t.nav.resources, path: "/resources" },
          ],
          locale
        )}
      />
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{t.resources.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">{t.resources.subtitle}</p>
        </div>
      </section>

      {clusterOrder.map((clusterSlug) => {
        const cluster = clusters[clusterSlug];
        const clusterArticles = articles.filter((a) => a.cluster === clusterSlug);
        return (
          <section key={clusterSlug} className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-labelledby={`cluster-${clusterSlug}`}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 id={`cluster-${clusterSlug}`} className="font-display text-2xl font-bold">
                  {isZh ? cluster.nameZh : cluster.name}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-ink-600">{isZh ? cluster.descZh : cluster.desc}</p>
              </div>
              <Link
                href={p(`/resources/${clusterSlug}`)}
                className="text-sm font-semibold text-gold-700 hover:text-gold-800"
              >
                {t.common.viewAll} ({clusterArticles.length}) →
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clusterArticles.slice(0, 3).map((a) => (
                <Link
                  key={a.slug}
                  href={p(`/resources/${a.cluster}/${a.slug}`)}
                  className="group rounded-2xl border border-ink-100 p-6 transition-all hover:border-gold-300 hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-bold leading-snug group-hover:text-gold-700">{a.h1}</h3>
                  <p className="mt-2 text-sm text-ink-600">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-ink-400">
                    {t.resources.updated} {a.dateModified} · {a.readMins} {t.resources.minRead}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <CtaSection locale={locale} title={t.resources.ctaTitle} subtitle={t.resources.ctaSubtitle} />
    </>
  );
}
