"use client";

import { useState } from "react";
import Link from "next/link";
import LeadGate from "@/components/LeadGate";
import type { Locale } from "@/lib/site";

interface Q {
  id: string;
  en: string;
  zh: string;
  options: { value: string; en: string; zh: string }[];
}

const questions: Q[] = [
  {
    id: "turnover",
    en: "What is your annual turnover / revenue?",
    zh: "您的年营业额/收入是多少？",
    options: [
      { value: "under1m", en: "Less than RM1 million", zh: "少于100万令吉" },
      { value: "1to5m", en: "RM1–5 million", zh: "100万–500万令吉" },
      { value: "5to25m", en: "RM5–25 million", zh: "500万–2500万令吉" },
      { value: "over25m", en: "More than RM25 million", zh: "超过2500万令吉" },
    ],
  },
  {
    id: "system",
    en: "How do you currently issue invoices?",
    zh: "您目前如何开具发票？",
    options: [
      { value: "manual", en: "Manually (Word/Excel/paper)", zh: "手工（Word/Excel/纸质）" },
      { value: "accounting", en: "Accounting software", zh: "会计软件" },
      { value: "erp", en: "ERP / POS system", zh: "ERP/POS系统" },
      { value: "already", en: "Already using MyInvois", zh: "已使用MyInvois" },
    ],
  },
  {
    id: "volume",
    en: "Roughly how many invoices do you issue monthly?",
    zh: "您每月大约开具多少张发票？",
    options: [
      { value: "low", en: "Under 20", zh: "少于20张" },
      { value: "mid", en: "20–200", zh: "20–200张" },
      { value: "high", en: "More than 200", zh: "超过200张" },
    ],
  },
  {
    id: "data",
    en: "Do you have complete buyer details (TIN, registration no., address) for your customers?",
    zh: "您是否掌握客户的完整资料（税号、注册号、地址）？",
    options: [
      { value: "yes", en: "Yes, mostly complete", zh: "是，大部分完整" },
      { value: "partial", en: "Some, but incomplete", zh: "部分，但不完整" },
      { value: "no", en: "No / not sure", zh: "没有/不确定" },
    ],
  },
];

export default function EInvoicingChecker({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const complete = questions.every((q) => answers[q.id]);

  function score() {
    let s = 0;
    if (answers.turnover === "under1m") s += 3;
    else if (answers.system === "already") s += 3;
    if (answers.system === "erp" || answers.system === "accounting") s += 2;
    if (answers.data === "yes") s += 2;
    else if (answers.data === "partial") s += 1;
    if (answers.volume === "low") s += 1;
    return s;
  }

  const exempt = answers.turnover === "under1m";
  const s = score();
  const level = exempt ? "exempt" : s >= 6 ? "ready" : s >= 3 ? "partial" : "urgent";

  const verdicts = {
    exempt: {
      en: "Currently exempt — but stay watchful",
      zh: "目前豁免——但需保持关注",
      descEn:
        "With turnover below RM1 million you are currently exempt under LHDN's updated timeline (7 Dec 2025). Thresholds change — and voluntary adoption can still speed up your operations.",
      descZh: "营业额低于100万令吉，根据LHDN更新的时间表（2025年12月7日）目前可豁免。门槛会变化——自愿采用也能提升运营效率。",
      color: "bg-ink-100 text-ink-800",
    },
    ready: {
      en: "Nearly ready — final checks needed",
      zh: "基本就绪——需最后检查",
      descEn:
        "Your systems and data look promising. The remaining work is validation: master data quality, field mapping and staff training on rejections and consolidated e-invoices.",
      descZh: "您的系统和数据基础良好。剩余工作是验证：主数据质量、字段映射及员工培训。",
      color: "bg-green-100 text-green-800",
    },
    partial: {
      en: "Partially ready — gaps to close",
      zh: "部分就绪——存在缺口",
      descEn:
        "You're in scope and have some foundations, but data gaps or manual processes will cause validation failures at volume. A structured readiness plan is needed.",
      descZh: "您已在实施范围内并具备一定基础，但数据缺口或手工流程将导致验证失败。需要结构化的就绪计划。",
      color: "bg-gold-100 text-gold-800",
    },
    urgent: {
      en: "Action needed now",
      zh: "需立即行动",
      descEn:
        "You're in scope for mandatory e-invoicing and key foundations are missing. Non-compliance carries penalties under the Income Tax Act — start your implementation plan immediately.",
      descZh: "您已在强制实施范围内，且缺少关键基础。不合规将面临所得税法处罚——请立即启动实施计划。",
      color: "bg-red-100 text-red-800",
    },
  } as const;

  const v = verdicts[level];

  return (
    <div>
      {questions.map((q, qi) => (
        <fieldset key={q.id} className="mt-6">
          <legend className="font-semibold text-ink-900">
            {qi + 1}. {isZh ? q.zh : q.en}
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {q.options.map((o) => (
              <label
                key={o.value}
                className={`cursor-pointer rounded-lg border px-4 py-2.5 text-sm ${
                  answers[q.id] === o.value
                    ? "border-gold-500 bg-gold-50 font-semibold text-ink-900"
                    : "border-ink-200 text-ink-700 hover:border-gold-300"
                }`}
              >
                <input
                  type="radio"
                  name={q.id}
                  value={o.value}
                  checked={answers[q.id] === o.value}
                  onChange={() => {
                    setAnswers((a) => ({ ...a, [q.id]: o.value }));
                    setSubmitted(false);
                  }}
                  className="sr-only"
                />
                {isZh ? o.zh : o.en}
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <button
        type="button"
        disabled={!complete}
        onClick={() => setSubmitted(true)}
        className="mt-8 rounded-lg bg-gold-400 px-6 py-3 font-bold text-ink-900 hover:bg-gold-300 disabled:opacity-50"
      >
        {isZh ? "查看我的就绪度结果" : "Show my readiness result"}
      </button>

      {submitted && complete && (
        <div className="mt-8 space-y-6">
          <div className={`rounded-2xl p-6 ${v.color}`}>
            <p className="font-display text-xl font-bold">{isZh ? v.zh : v.en}</p>
            <p className="mt-2 text-sm leading-relaxed">{isZh ? v.descZh : v.descEn}</p>
          </div>

          <LeadGate
            locale={locale}
            tool="e-invoicing-readiness"
            payload={{ answers, level }}
            title={
              isZh
                ? "获取您的个性化电子发票实施清单（免费）"
                : "Get your personalised e-invoicing implementation checklist (free)"
            }
            buttonLabel={isZh ? "发送我的清单" : "Send my checklist"}
          >
            <div className="rounded-2xl border border-gold-300 bg-white p-6">
              <p className="font-display font-bold text-ink-900">
                {isZh ? "您的实施清单" : "Your implementation checklist"}
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-700">
                <li>{isZh ? "确认您的强制实施日期（按营业额分阶段）并倒排里程碑。" : "Confirm your mandate date against LHDN's turnover phases and work backwards with milestones."}</li>
                <li>{isZh ? answers.volume === "low" ? "低发票量：从免费MyInvois门户开始，规划手动流程。" : "根据发票量选择API/中间件集成方案，并评估现有系统兼容性。" : answers.volume === "low" ? "Low volume: start with the free MyInvois Portal and design your manual workflow." : "At your volume, scope API/middleware integration with your existing system."}</li>
                <li>{isZh ? "清理主数据：收集所有客户的TIN、注册号和地址；核对MSIC代码。" : "Clean master data: collect TINs, registration numbers and addresses for all buyers; verify your MSIC codes."}</li>
                <li>{isZh ? "定义合并电子发票政策（B2C）并测试拒绝/取消流程。" : "Define your consolidated e-invoice policy (B2C) and test the rejection/cancellation workflow."}</li>
                <li>{isZh ? "培训财务和销售团队；指定电子发票负责人。" : "Train finance and sales teams; appoint an e-invoicing owner."}</li>
                <li>{isZh ? "上线后设立月度合规检查。" : "Set a monthly compliance review after go-live."}</li>
              </ol>
              <p className="mt-4 text-sm text-ink-700">
                {isZh ? "想要专家代办？" : "Want experts to handle it end to end?"}{" "}
                <Link href={`/${locale}/services/e-invoicing`} className="font-bold text-gold-700 hover:text-gold-800">
                  {isZh ? "了解XCG电子发票服务 →" : "See XCG's E-Invoicing Services →"}
                </Link>
              </p>
            </div>
          </LeadGate>
        </div>
      )}
    </div>
  );
}
