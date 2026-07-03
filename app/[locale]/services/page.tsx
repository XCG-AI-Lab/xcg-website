import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <div className="rise">
            <p className="eyebrow-light !text-gold-400">{t.nav.services}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.home.servicesTitle}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.home.journeySubtitle}</p>
          </div>
        </div>
      </section>

      {stageOrder.map((stage, i) => (
        <section key={stage} className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8" aria-labelledby={`stage-${stage}`}>
          <Reveal>
            <div className="border-t border-ink-200 pt-10">
              <p className="font-display text-sm font-bold text-gold-500">0{i + 1}</p>
              <h2 id={`stage-${stage}`} className="mt-2 display-3">
                {isZh ? stages[stage].labelZh : stages[stage].label}
              </h2>
              <p className="mt-2 max-w-2xl text-[16px] text-ink-500">
                {isZh ? stages[stage].descZh : stages[stage].desc}
              </p>
            </div>
            <div className="mt-10 grid gap-px bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.stage === stage)
                .map((s) => (
                  <Link key={s.slug} href={p(`/services/${s.slug}`)} className="group bg-white p-8 transition-colors hover:bg-ink-50">
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink-950">
                      {isZh ? s.nameZh : s.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                      {isZh ? s.shortDescZh : s.shortDesc}
                    </p>
                    <span className="link-arrow mt-6">
                      {t.common.learnMore}
                      <span className="arrow" aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
            </div>
          </Reveal>
        </section>
      ))}

      <CtaSection locale={locale} />
    </>
  );
}
