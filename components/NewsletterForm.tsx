"use client";

import { useState } from "react";
import { getDict } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

export default function NewsletterForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, source: "footer" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="text-sm font-medium text-gold-400">{t.footer.newsletterSuccess}</p>;
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        {t.footer.newsletterPlaceholder}
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.footer.newsletterPlaceholder}
        className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-gold-400"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="shrink-0 rounded-lg bg-gold-400 px-4 py-2.5 text-sm font-bold text-ink-900 hover:bg-gold-300 disabled:opacity-60"
      >
        {status === "sending" ? "…" : t.footer.newsletterButton}
      </button>
      {status === "error" && <span className="sr-only">Error</span>}
    </form>
  );
}
