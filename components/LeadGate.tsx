"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site";

/** Email opt-in gate wrapped around advanced tool results. Stores the lead via /api/lead. */
export default function LeadGate({
  locale,
  tool,
  payload,
  children,
  title,
  buttonLabel,
}: {
  locale: Locale;
  tool: string;
  payload: Record<string, unknown>;
  children: React.ReactNode;
  title: string;
  buttonLabel: string;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, tool, payload, locale }),
      });
      if (!res.ok) throw new Error();
      setUnlocked(true);
    } catch {
      // Unlock anyway — never hold a user's result hostage to an API failure
      setUnlocked(true);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="border-l-[3px] border-gold-400 bg-ink-50 p-8">
      <p className="font-display text-lg font-bold tracking-tight text-ink-950">{title}</p>
      <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor={`lg-name-${tool}`}>Name</label>
        <input
          id={`lg-name-${tool}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={locale === "zh" ? "您的姓名" : "Your name"}
          required
          className="field"
        />
        <label className="sr-only" htmlFor={`lg-email-${tool}`}>Email</label>
        <input
          id={`lg-email-${tool}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={locale === "zh" ? "您的电子邮箱" : "Your email address"}
          required
          className="field"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold justify-center disabled:opacity-60 sm:col-span-2"
        >
          {status === "sending" ? "…" : buttonLabel} <span aria-hidden="true">→</span>
        </button>
      </form>
      <p className="mt-3 text-[13px] text-ink-500">
        {locale === "zh"
          ? "我们仅用您的邮箱发送结果和相关更新，绝无垃圾邮件。"
          : "We'll only use your email to send your results and relevant updates. No spam, ever."}
      </p>
    </div>
  );
}
