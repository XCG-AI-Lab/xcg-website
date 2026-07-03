import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import DeadlineCalendar from "@/components/tools/DeadlineCalendar";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
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
    path: "/tools/deadline-calendar",
    title: isZh
      ? "马来西亚合规截止日期日历生成器（免费）| XCG"
      : "Malaysia Compliance Deadline Calendar Builder | XCG",
    description: isZh
      ? "输入财政年度结束月份，获取个性化的CP204、Form C、SST、薪资及EA表格截止日期日历。"
      : "Enter your financial year-end and get a personalised calendar of CP204, Form C, SST, payroll & EA form deadlines. Free from XCG.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = getDict(locale);
  const isZh = locale === "zh";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.common.breadcrumbHome, path: "" },
            { name: t.nav.tools, path: "/tools" },
            { name: isZh ? "合规截止日期日历" : "Compliance Deadline Calendar", path: "/tools/deadline-calendar" },
          ],
          locale
        )}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          {isZh ? "合规截止日期日历" : "Compliance Deadline Calendar"}
        </h1>
        <p className="mt-3 text-ink-600">
          {isZh
            ? "三个问题，生成您公司的年度合规日历——涵盖LHDN、SSM、KWSP和PERKESO。"
            : "Three questions to generate your company's annual compliance calendar — across LHDN, SSM, KWSP and PERKESO."}
        </p>
        <DeadlineCalendar locale={locale} />
      </div>
    </>
  );
}
