"use client";

import { useState } from "react";
import Link from "next/link";
import LeadGate from "@/components/LeadGate";
import type { Locale } from "@/lib/site";

const restricted = [
  "bank", "insurance", "takaful", "university", "college", "royal", "king", "queen",
  "government", "federal", "state", "national", "malaysia", "bumiputera", "asean",
  "international", "chartered", "trust", "foundation", "cooperative", "koperasi",
];

export default function NameChecker({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  const trimmed = name.trim();
  const issues: string[] = [];
  if (checked && trimmed) {
    const lower = trimmed.toLowerCase();
    const hits = restricted.filter((w) => new RegExp(`\\b${w}\\b`, "i").test(lower));
    if (hits.length > 0) {
      issues.push(
        isZh
          ? `包含受管制/需批准的字词：${hits.join(", ")}——可能需要相关部门批准或被SSM拒绝。`
          : `Contains restricted/controlled words: ${hits.join(", ")} — these may require ministerial approval or be rejected by SSM.`
      );
    }
    if (trimmed.length < 3) {
      issues.push(isZh ? "名称过短。" : "Name is too short.");
    }
    if (/sdn\.?\s*bhd\.?/i.test(lower)) {
      issues.push(
        isZh
          ? "无需输入 “Sdn Bhd”——注册时会自动附加。"
          : "You don't need to type “Sdn Bhd” — it's appended automatically at registration."
      );
    }
    if (/[^a-zA-Z0-9\s&\-.()']/.test(trimmed)) {
      issues.push(
        isZh
          ? "包含特殊字符——SSM通常只接受字母、数字及少数标点符号。"
          : "Contains special characters — SSM generally accepts letters, numbers and limited punctuation only."
      );
    }
  }

  return (
    <div>
      <label htmlFor="name-input" className="font-semibold text-ink-900">
        {isZh ? "输入您想要的公司名称" : "Enter your proposed company name"}
      </label>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="name-input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setChecked(false);
          }}
          placeholder={isZh ? "例如：Tech Ventures" : "e.g. Tech Ventures"}
          maxLength={120}
          className="w-full rounded-lg border border-ink-200 px-4 py-3 text-sm"
        />
        <button
          type="button"
          disabled={!trimmed}
          onClick={() => setChecked(true)}
          className="shrink-0 rounded-lg bg-gold-400 px-6 py-3 text-sm font-bold text-ink-900 hover:bg-gold-300 disabled:opacity-50"
        >
          {isZh ? "预检名称" : "Pre-check name"}
        </button>
      </div>

      {checked && trimmed && (
        <div className="mt-8 space-y-6">
          {issues.length === 0 ? (
            <div className="rounded-2xl bg-green-100 p-6 text-green-900">
              <p className="font-display font-bold">
                {isZh ? "初步检查通过 ✓" : "Passes the preliminary checks ✓"}
              </p>
              <p className="mt-2 text-sm">
                “{trimmed} Sdn. Bhd.”{" "}
                {isZh
                  ? "未触发常见的格式或受管制字词问题。下一步：确认SSM登记册中没有相同或过于相似的名称。"
                  : "doesn't trigger common formatting or restricted-word issues. Next step: confirm no identical or confusingly similar name exists on the SSM register."}
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-gold-100 p-6 text-ink-900">
              <p className="font-display font-bold">
                {isZh ? "发现潜在问题" : "Potential issues found"}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {issues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          <LeadGate
            locale={locale}
            tool="name-checker"
            payload={{ name: trimmed, issues: issues.length }}
            title={
              isZh
                ? "让XCG免费为您进行正式SSM名称查询"
                : "Get a free official SSM name search from XCG"
            }
            buttonLabel={isZh ? "为我查询这个名称" : "Run the official search for me"}
          >
            <div className="rounded-2xl border border-gold-300 bg-white p-6 text-sm text-ink-700">
              <p className="font-display font-bold text-ink-900">
                {isZh ? "请求已收到！" : "Request received!"}
              </p>
              <p className="mt-2">
                {isZh
                  ? `我们将针对 “${trimmed}” 进行正式SSM名称查询，并在一个工作日内回复结果——包括名称保留选项。`
                  : `We'll run an official SSM search for “${trimmed}” and reply within one working day — including your name-reservation options.`}{" "}
                <Link href={`/${locale}/services/company-secretarial`} className="font-bold text-gold-700 hover:text-gold-800">
                  {isZh ? "了解公司注册服务 →" : "See our incorporation service →"}
                </Link>
              </p>
            </div>
          </LeadGate>
        </div>
      )}

      <p className="mt-8 text-xs leading-relaxed text-ink-500">
        {isZh
          ? "此工具进行初步格式检查，不能替代SSM的正式名称查询。名称的最终批准由SSM决定。"
          : "This tool performs preliminary formatting checks and is not a substitute for SSM's official name search. Final name approval rests with SSM."}
      </p>
    </div>
  );
}
