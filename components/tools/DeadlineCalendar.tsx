"use client";

import { useState } from "react";
import Link from "next/link";
import LeadGate from "@/components/LeadGate";
import type { Locale } from "@/lib/site";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const monthsZh = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

function addMonths(monthIdx: number, add: number) {
  return (monthIdx + add) % 12;
}

export default function DeadlineCalendar({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const [fye, setFye] = useState<number | null>(null);
  const [hasEmployees, setHasEmployees] = useState<boolean | null>(null);
  const [sstRegistered, setSstRegistered] = useState<boolean | null>(null);

  const complete = fye !== null && hasEmployees !== null && sstRegistered !== null;
  const mName = (i: number) => (isZh ? monthsZh[i] : months[i]);

  const deadlines: { when: string; what: string; whatZh: string }[] = [];
  if (fye !== null) {
    deadlines.push(
      {
        when: mName(addMonths(fye, 7)),
        what: `Form C due — 7 months after your ${mName(fye)} year-end`,
        whatZh: `Form C截止——${mName(fye)}财年结束后7个月`,
      },
      {
        when: mName(addMonths(fye, 11)),
        what: "CP204 estimate due 30 days before the new basis period",
        whatZh: "CP204估税须在新基期开始前30天提交",
      },
      {
        when: mName(addMonths(fye, 6)),
        what: `Audited financial statements circulated within 6 months of year-end`,
        whatZh: "经审计财务报表须在财年结束后6个月内分发",
      },
      {
        when: isZh ? "每月" : "Monthly",
        what: "CP204 instalments by the 15th",
        whatZh: "CP204分期付款——每月15日前",
      }
    );
    if (hasEmployees) {
      deadlines.push(
        {
          when: isZh ? "每月15日" : "15th monthly",
          what: "EPF, SOCSO, EIS & PCB remittance for the previous month",
          whatZh: "上月EPF、SOCSO、EIS及PCB缴纳",
        },
        {
          when: mName(1),
          what: "Form EA to every employee by end of February",
          whatZh: "二月底前向每位员工发出EA表格",
        },
        {
          when: mName(2),
          what: "Form E to LHDN (grace periods for e-Filing may apply)",
          whatZh: "向LHDN提交Form E（电子申报或有宽限期）",
        }
      );
    }
    if (sstRegistered) {
      deadlines.push({
        when: isZh ? "双月" : "Bi-monthly",
        what: "SST-02 return and payment after each taxable period",
        whatZh: "每个应税期后提交SST-02申报及缴款",
      });
    }
  }

  const btn = (active: boolean) =>
    `rounded-lg border px-4 py-2 text-sm ${
      active ? "border-gold-500 bg-gold-50 font-semibold text-ink-900" : "border-ink-200 text-ink-700 hover:border-gold-300"
    }`;

  return (
    <div>
      <fieldset className="mt-6">
        <legend className="font-semibold text-ink-900">
          1. {isZh ? "您的财政年度结束月份？" : "When does your financial year end?"}
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {months.map((m, i) => (
            <button key={m} type="button" onClick={() => setFye(i)} className={btn(fye === i)}>
              {mName(i)}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="font-semibold text-ink-900">2. {isZh ? "您有员工吗？" : "Do you have employees?"}</legend>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => setHasEmployees(true)} className={btn(hasEmployees === true)}>
            {isZh ? "有" : "Yes"}
          </button>
          <button type="button" onClick={() => setHasEmployees(false)} className={btn(hasEmployees === false)}>
            {isZh ? "没有" : "No"}
          </button>
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="font-semibold text-ink-900">
          3. {isZh ? "您已注册SST吗？" : "Are you SST-registered?"}
        </legend>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => setSstRegistered(true)} className={btn(sstRegistered === true)}>
            {isZh ? "是" : "Yes"}
          </button>
          <button type="button" onClick={() => setSstRegistered(false)} className={btn(sstRegistered === false)}>
            {isZh ? "否" : "No"}
          </button>
        </div>
      </fieldset>

      {complete && (
        <div className="mt-10 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-ink-100">
            <table className="w-full text-sm">
              <caption className="sr-only">Your compliance deadlines</caption>
              <thead>
                <tr className="bg-ink-900 text-left text-white">
                  <th scope="col" className="px-4 py-3">{isZh ? "时间" : "When"}</th>
                  <th scope="col" className="px-4 py-3">{isZh ? "事项" : "Obligation"}</th>
                </tr>
              </thead>
              <tbody>
                {deadlines.map((d, i) => (
                  <tr key={i} className={i % 2 ? "bg-ink-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-ink-900">{d.when}</td>
                    <td className="px-4 py-3 text-ink-700">{isZh ? d.whatZh : d.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-500">
            {isZh
              ? "以上为一般指引，具体日期取决于您的类别和当年规定——请以官方门户为准。"
              : "General guidance only — exact dates depend on your category and the current year's rules. Always verify against the official portals."}
          </p>

          <LeadGate
            locale={locale}
            tool="deadline-calendar"
            payload={{ fye: months[fye!], hasEmployees, sstRegistered }}
            title={
              isZh
                ? "把这份日历发到您的邮箱 + 截止日期提醒（免费）"
                : "Email me this calendar + deadline reminders (free)"
            }
            buttonLabel={isZh ? "发送我的合规日历" : "Send my compliance calendar"}
          >
            <div className="rounded-2xl border border-gold-300 bg-white p-6 text-sm text-ink-700">
              <p className="font-display font-bold text-ink-900">
                {isZh ? "已登记！" : "You're on the list!"}
              </p>
              <p className="mt-2">
                {isZh
                  ? "我们会在每个关键截止日期前向您发送提醒。想要有人为您全程跟踪？"
                  : "We'll send you a reminder ahead of each key deadline. Want someone to track all of this for you?"}{" "}
                <Link href={`/${locale}/services/taxation`} className="font-bold text-gold-700 hover:text-gold-800">
                  {isZh ? "了解XCG税务服务 →" : "See XCG's Taxation Services →"}
                </Link>
              </p>
            </div>
          </LeadGate>
        </div>
      )}
    </div>
  );
}
