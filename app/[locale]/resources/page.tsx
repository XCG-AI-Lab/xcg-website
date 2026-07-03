import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <div className="rise">
            <p className="eyebrow-light !text-gold-400">{t.nav.resources}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.resources.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.resources.subtitle}</p>
          </div>
        </div>
      </section>

      {clusterOrder.map((clusterSlug, ci) => {
        const cluster = clusters[clusterSlug];
        const clusterArticles = articles.filter((a) => a.cluster === clusterSlug);
        return (
          <section key={clusterSlug} className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8" aria-labelledby={`cluster-${clusterSlug}`}>
            <Reveal>
              <div className="grid gap-6 border-t border-ink-200 pt-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                <div>
                  <p className="font-display text-sm font-bold text-gold-500">0{ci + 1}</p>
                  <h2 id={`cluster-${clusterSlug}`} className="mt-2 display-3">
                    {isZh ? cluster.nameZh : cluster.name}
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
                    {isZh ? cluster.descZh : cluster.desc}
                  </p>
                  <Link href={p(`/resources/${clusterSlug}`)} className="link-arrow mt-6">
                    {t.common.viewAll} ({clusterArticles.length})
                    <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="divide-y divide-ink-100">
                  {clusterArticles.slice(0, 4).map((a) => (
                    <Link key={a.slug} href={p(`/resources/${a.cluster}/${a.slug}`)} className="group flex items-baseline justify-between gap-6 py-5">
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-ink-950 group-hover:underline group-hover:decoration-gold-400 group-hover:decoration-[3px] group-hover:underline-offset-4">
                          {a.h1}
                        </h3>
                        <p className="mt-1.5 text-[14px] text-ink-500">{a.excerpt}</p>
                      </div>
                      <span className="text-[13px] text-ink-400 whitespace-nowrap">{a.readMins} {t.resources.minRead}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        );
      })}

      <CtaSection locale={locale} title={t.resources.ctaTitle} subtitle={t.resources.ctaSubtitle} />
    </>
  );
}
