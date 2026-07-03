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
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{t.pricing.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-300">{t.pricing.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                pkg.popular ? "border-gold-400 shadow-lg shadow-gold-100" : "border-ink-100"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold-400 px-3 py-0.5 text-xs font-bold text-ink-900">
                  {isZh ? "最受欢迎" : "Most popular"}
                </span>
              )}
              <h2 className="font-display text-lg font-bold">{isZh ? pkg.nameZh : pkg.name}</h2>
              <p className="mt-3">
                <span className="text-sm text-ink-500">{t.pricing.from} </span>
                <span className="font-display text-3xl font-extrabold text-ink-900">{pkg.price}</span>
                <span className="text-sm text-ink-500">
                  {pkg.unit === "month" ? t.pricing.month : pkg.unit === "year" ? t.pricing.year : ` ${t.pricing.oneTime}`}
                  {"perEmployee" in pkg && pkg.perEmployee ? (isZh ? "/员工" : "/employee") : ""}
                </span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-ink-100 pt-5">
                {(isZh ? pkg.featuresZh : pkg.features).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <span aria-hidden="true" className="mt-0.5 text-gold-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-bold ${
                  pkg.popular
                    ? "bg-gold-400 text-ink-900 hover:bg-gold-300"
                    : "border border-ink-200 text-ink-800 hover:border-gold-400"
                }`}
              >
                {t.pricing.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-ink-500">{t.pricing.note}</p>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
