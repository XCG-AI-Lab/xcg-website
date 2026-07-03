import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow-light !text-gold-400">{t.nav.careers}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.careers.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.careers.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <h2 className="mt-5 display-3">{t.careers.whyTitle}</h2>
        </Reveal>
        <ul className="mt-10 grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <li key={perk.en} className="bg-white p-7">
              <p className="font-display text-sm font-bold text-gold-500">0{i + 1}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-700">{isZh ? perk.zh : perk.en}</p>
            </li>
          ))}
        </ul>

        <Reveal>
          <span className="beam mt-20" aria-hidden="true" />
          <h2 className="mt-5 display-3">{t.careers.openingsTitle}</h2>
        </Reveal>
        <div className="mt-10">
          {openings.map((o) => (
            <article key={o.title} className="grid gap-4 border-t border-ink-200 py-8 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink-950">
                  {isZh ? o.titleZh : o.title}
                </h3>
                <p className="eyebrow mt-1.5 !text-gold-600">{o.type}</p>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-600">{isZh ? o.descZh : o.desc}</p>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Job Application: ${o.title}`)}`}
                className="btn-outline shrink-0"
              >
                {t.careers.applyCta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-12 border-l-[3px] border-gold-400 bg-ink-50 p-6 text-[15px] text-ink-700">
          {t.careers.noRole}{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-ink-950 underline decoration-gold-400 decoration-2 underline-offset-4">
            {t.careers.applyEmail} {site.email}
          </a>
        </p>
      </section>
    </>
  );
}
