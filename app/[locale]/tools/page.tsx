import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
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
    path: "/tools",
    title: isZh
      ? "免费工具 | 电子发票检查、截止日期、名称查询 | XCG"
      : "Free Tools: E-Invoice Check, Deadlines & Name Search | XCG",
    description: isZh
      ? "马来西亚中小企业免费工具：电子发票就绪度检查、税务截止日期日历生成器及公司名称预查。"
      : "Free tools for Malaysian SMEs — e-invoicing readiness checker, tax deadline calendar builder and company name pre-checker. By XCG.",
  });
}

const tools = [
  {
    slug: "e-invoicing-readiness",
    name: "E-Invoicing Readiness Checker",
    nameZh: "电子发票就绪度检查",
    desc: "Answer 4 questions to see whether the LHDN mandate covers you and how ready your business is — with a personalised implementation checklist.",
    descZh: "回答4个问题，了解LHDN强制要求是否覆盖您，以及您的企业就绪程度——并获取个性化实施清单。",
  },
  {
    slug: "deadline-calendar",
    name: "Compliance Deadline Calendar",
    nameZh: "合规截止日期日历",
    desc: "Enter your financial year-end and get a personalised calendar of CP204, Form C, SST, payroll and EA form deadlines.",
    descZh: "输入您的财政年度结束月份，获取CP204、Form C、SST、薪资及EA表格的个性化截止日期日历。",
  },
  {
    slug: "company-name-checker",
    name: "Company Name Pre-Checker",
    nameZh: "公司名称预查",
    desc: "Pre-check your proposed Sdn Bhd name against common SSM formatting and restricted-word rules before you apply.",
    descZh: "在申请前，根据SSM常见格式和受管制字词规则预查您的Sdn Bhd名称。",
  },
];

export default async function ToolsPage({ params }: { params: Promise<{ locale: string }> }) {
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
          ],
          locale
        )}
      />
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <div className="rise">
            <p className="eyebrow-light !text-gold-400">{t.nav.tools}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.tools.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.tools.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8">
        <div className="grid gap-px bg-ink-200 md:grid-cols-3">
          {tools.map((tool, i) => (
            <Link key={tool.slug} href={`/${locale}/tools/${tool.slug}`} className="group bg-white p-10 transition-colors hover:bg-ink-50">
              <p className="font-display text-sm font-bold text-gold-500">0{i + 1}</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-950">
                {isZh ? tool.nameZh : tool.name}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{isZh ? tool.descZh : tool.desc}</p>
              <span className="link-arrow mt-8">
                {t.common.getStarted}
                <span className="arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
