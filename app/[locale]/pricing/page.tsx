import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
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
    path: "/pricing",
    title: isZh
      ? "价格方案 | 公司注册、秘书、会计配套 | XCG"
      : "Pricing: Incorporation, Cosec & Accounting Packages | XCG",
    description: isZh
      ? "透明的起始价格——公司注册配套、公司秘书年费、月度会计及薪资服务。开始前均提供固定书面报价。"
      : "Transparent starting prices — incorporation packages, cosec retainers, monthly accounting & payroll. Fixed written quotes before every engagement.",
  });
}

const packages = [
  {
    name: "Sdn Bhd Incorporation",
    nameZh: "Sdn Bhd公司注册配套",
    price: "RM1,988",
    unit: "oneTime",
    popular: true,
    features: [
      "SSM name search & reservation",
      "Complete MyCoID incorporation",
      "First-year company secretary retainer",
      "Registered office address (12 months)",
      "Bank account opening resolutions",
      "Post-incorporation compliance starter kit",
    ],
    featuresZh: [
      "SSM名称查询与保留",
      "完整MyCoID注册",
      "首年公司秘书服务",
      "注册办公地址（12个月）",
      "银行开户决议",
      "成立后合规入门指南",
    ],
    href: "/services/company-secretarial",
  },
  {
    name: "Company Secretary Retainer",
    nameZh: "公司秘书年度配套",
    price: "RM1,080",
    unit: "year",
    popular: false,
    features: [
      "Named licensed company secretary",
      "Registered office address",
      "Annual return preparation & lodgement",
      "Statutory registers maintenance",
      "Standard resolutions included",
      "Compliance calendar & reminders",
    ],
    featuresZh: [
      "指定持牌公司秘书",
      "注册办公地址",
      "周年申报表编制与提交",
      "法定登记册维护",
      "包含标准决议",
      "合规日历及提醒",
    ],
    href: "/services/company-secretarial",
  },
  {
    name: "Monthly Accounting",
    nameZh: "月度会计配套",
    price: "RM500",
    unit: "month",
    popular: false,
    features: [
      "Monthly bookkeeping & reconciliation",
      "Management reports (P&L, BS, cashflow)",
      "MPERS/MFRS financial statements",
      "Audit-ready schedules",
      "SST return support",
      "Dedicated account manager",
    ],
    featuresZh: [
      "每月簿记与对账",
      "管理报告（损益表、资产负债表、现金流）",
      "MPERS/MFRS财务报表",
      "审计就绪明细表",
      "SST申报支持",
      "专属客户经理",
    ],
    href: "/services/accounting",
  },
  {
    name: "Payroll Outsourcing",
    nameZh: "薪资外包配套",
    price: "RM25",
    unit: "month",
    perEmployee: true,
    popular: false,
    features: [
      "Gross-to-net salary computation",
      "EPF, SOCSO, EIS & PCB remittance",
      "Confidential e-payslips",
      "New-hire statutory registration",
      "Year-end EA forms & Form E",
      "Local & foreign employees",
    ],
    featuresZh: [
      "从总额到净额的工资计算",
      "EPF、SOCSO、EIS及PCB缴纳",
      "保密电子工资单",
      "新员工法定注册",
      "年终EA表格及Form E",
      "本地及外籍员工",
    ],
    href: "/services/payroll",
  },
];

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
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
            { name: t.nav.pricing, path: "/pricing" },
          ],
          locale
        )}
      />
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <div className="rise">
            <p className="eyebrow-light !text-gold-400">{t.nav.pricing}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.pricing.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.pricing.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8">
        <div className="grid gap-px bg-ink-200 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`relative flex flex-col bg-white p-8 ${pkg.popular ? "outline outline-[3px] -outline-offset-[3px] outline-gold-400" : ""}`}>
              {pkg.popular && (
                <span className="absolute right-0 top-0 bg-gold-400 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                  {isZh ? "最受欢迎" : "Most popular"}
                </span>
              )}
              <h2 className="font-display text-lg font-bold tracking-tight text-ink-950">
                {isZh ? pkg.nameZh : pkg.name}
              </h2>
              <p className="mt-5">
                <span className="block text-[12px] font-bold uppercase tracking-wider text-ink-400">{t.pricing.from}</span>
                <span className="font-display text-4xl font-bold tracking-tight text-ink-950">{pkg.price}</span>
                <span className="text-[14px] text-ink-500">
                  {pkg.unit === "month" ? t.pricing.month : pkg.unit === "year" ? t.pricing.year : ` ${t.pricing.oneTime}`}
                  {"perEmployee" in pkg && pkg.perEmployee ? (isZh ? "/员工" : "/employee") : ""}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-ink-200 pt-6">
                {(isZh ? pkg.featuresZh : pkg.features).map((f) => (
                  <li key={f} className="relative pl-6 text-[14px] leading-relaxed text-ink-600">
                    <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-[3px] w-3.5 bg-gold-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className={`mt-8 ${pkg.popular ? "btn-gold" : "btn-outline"} justify-center`}
              >
                {t.pricing.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-[13px] leading-relaxed text-ink-500">{t.pricing.note}</p>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
