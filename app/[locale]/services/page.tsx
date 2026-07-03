import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { services, stages } from "@/lib/services";
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
    path: "/services",
    title: isZh
      ? "服务项目 | 九大专业商业服务 | XCG"
      : "Our Services: 9 Professional Business Services | XCG",
    description: isZh
      ? "XCG九大专业服务：公司秘书、会计、税务、电子发票、薪资、人力资源、法律、执照及企业估值——一站式解决。"
      : "Company secretarial, accounting, tax, e-invoicing, payroll, HR, legal, licensing & business valuation — nine services, one accountable partner. XCG.",
  });
}

const stageOrder = ["start", "run", "grow"] as const;

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
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
            { name: t.nav.services, path: "/services" },
          ],
          locale
        )}
      />
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
            {t.home.servicesTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">{t.home.journeySubtitle}</p>
        </div>
      </section>

      {stageOrder.map((stage) => (
        <section key={stage} className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-labelledby={`stage-${stage}`}>
          <h2 id={`stage-${stage}`} className="font-display text-2xl font-bold">
            {isZh ? stages[stage].labelZh : stages[stage].label}
          </h2>
          <p className="mt-1 text-ink-600">{isZh ? stages[stage].descZh : stages[stage].desc}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.stage === stage)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={p(`/services/${s.slug}`)}
                  className="group rounded-2xl border border-ink-100 p-6 transition-all hover:border-gold-300 hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-bold group-hover:text-gold-700">
                    {isZh ? s.nameZh : s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {isZh ? s.shortDescZh : s.shortDesc}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-gold-600">
                    {t.common.learnMore} →
                  </span>
                </Link>
              ))}
          </div>
        </section>
      ))}

      <CtaSection locale={locale} />
    </>
  );
}
