"use client";

import { useState } from "react";
import { getDict } from "@/lib/i18n";
import { services } from "@/lib/services";
import type { Locale } from "@/lib/site";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-gold-300 bg-gold-50 p-8 text-center" role="status">
        <p className="text-lg font-semibold text-ink-900">{t.contact.formSuccess}</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-ink-200 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-gold-500";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-sm font-semibold text-ink-800">
            {t.contact.formName} *
          </label>
          <input id="cf-name" name="name" required maxLength={120} className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1 block text-sm font-semibold text-ink-800">
            {t.contact.formPhone} *
          </label>
          <input id="cf-phone" name="phone" type="tel" required maxLength={30} className={inputCls} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className="mb-1 block text-sm font-semibold text-ink-800">
            {t.contact.formEmail} *
          </label>
          <input id="cf-email" name="email" type="email" required maxLength={200} className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-company" className="mb-1 block text-sm font-semibold text-ink-800">
            {t.contact.formCompany}
          </label>
          <input id="cf-company" name="company" maxLength={200} className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-service" className="mb-1 block text-sm font-semibold text-ink-800">
          {t.contact.formService}
        </label>
        <select id="cf-service" name="service" className={inputCls} defaultValue="">
          <option value="">—</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {locale === "zh" ? s.nameZh : s.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-semibold text-ink-800">
          {t.contact.formMessage} *
        </label>
        <textarea id="cf-message" name="message" required rows={5} maxLength={5000} className={inputCls} />
      </div>
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-gold-400 px-6 py-3.5 font-bold text-ink-900 shadow hover:bg-gold-300 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {t.contact.formError}
        </p>
      )}
    </form>
  );
}
