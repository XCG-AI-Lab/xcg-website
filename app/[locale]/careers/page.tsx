import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";
  return pageMetadata({
    locale: locale as Locale,
    path: "/careers",
    title: isZh
      ? "加入我们 | 会计与咨询职业机会 | XCG"
      : "Careers at XCG: Accounting & Advisory Jobs in KL | XCG",
    description: isZh
      ? "加入吉隆坡屡获殊荣的商业咨询公司。会计、税务、公司秘书及咨询职位——真正的导师指导与成长空间。"
      : "Join an award-winning advisory firm in KL. Roles in accounting, tax, company secretarial & advisory — with real mentorship and room to grow.",
  });
}

const openings = [
  {
    title: "Audit / Accounts Executive",
    titleZh: "审计/会计执行员",
    type: "Full-time · Bukit Jalil",
    desc: "Prepare full sets of accounts and management reports for a portfolio of SME clients. Partial/full qualification (LCCI, CAT, ACCA in progress) welcome.",
    descZh: "为中小企业客户组合编制全套账目和管理报告。欢迎持有LCCI、CAT或ACCA（在读）资格者。",
  },
  {
    title: "Company Secretarial Executive",
    titleZh: "公司秘书执行员",
    type: "Full-time · Bukit Jalil",
    desc: "Handle SSM filings, statutory registers, resolutions and client advisory. MAICSA/ICSA candidates or experienced cosec assistants encouraged to apply.",
    descZh: "处理SSM备案、法定登记册、决议及客户咨询。欢迎MAICSA/ICSA考生或有经验的秘书助理申请。",
  },
  {
    title: "Tax Associate",
    titleZh: "税务助理",
    type: "Full-time · Bukit Jalil",
    desc: "Prepare corporate and personal tax computations, CP204 estimates and SST returns under chartered-accountant supervision.",
    descZh: "在特许会计师指导下编制公司及个人税务计算、CP204估税和SST申报。",
  },
  {
    title: "Internship — Accounting / Cosec / Tax",
    titleZh: "实习生——会计/公司秘书/税务",
    type: "Internship · Bukit Jalil or Kepong",
    desc: "Structured internship with real client exposure and a named mentor. Accounting, finance or business students welcome.",
    descZh: "结构化实习，接触真实客户并配有专属导师。欢迎会计、金融或商科学生。",
  },
];

const perks = [
  { en: "Named mentor for every team member — Mentorship is the M in PRIME", zh: "每位团队成员配有专属导师——PRIME中的M代表传承" },
  { en: "Exam support and study leave for professional qualifications", zh: "专业资格考试支持及学习假期" },
  { en: "Exposure across 9 service lines, not one narrow lane", zh: "接触九大服务领域，而非单一狭窄赛道" },
  { en: "Award-winning, growing firm — 100% client growth in one year", zh: "屡获殊荣的成长型公司——客户一年增长100%" },
];

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
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
            { name: t.nav.careers, path: "/careers" },
          ],
          locale
        )}
      />
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{t.careers.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">{t.careers.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold">{t.careers.whyTitle}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {perks.map((p) => (
            <li key={p.en} className="flex items-start gap-3 rounded-2xl border border-ink-100 p-5">
              <span aria-hidden="true" className="mt-0.5 text-gold-500">✦</span>
              <span className="text-sm leading-relaxed text-ink-700">{isZh ? p.zh : p.en}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-2xl font-bold">{t.careers.openingsTitle}</h2>
        <div className="mt-6 space-y-4">
          {openings.map((o) => (
            <article key={o.title} className="rounded-2xl border border-ink-100 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-display text-lg font-bold">{isZh ? o.titleZh : o.title}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gold-600">{o.type}</p>
                <p className="mt-2 text-sm text-ink-600">{isZh ? o.descZh : o.desc}</p>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Job Application: ${o.title}`)}`}
                className="mt-4 inline-block shrink-0 rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-ink-800 sm:mt-0"
              >
                {t.careers.applyCta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl bg-ink-50 p-6 text-sm text-ink-700">
          {t.careers.noRole}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-gold-700 hover:text-gold-800">
            {t.careers.applyEmail} {site.email}
          </a>
        </p>
      </section>
    </>
  );
}
