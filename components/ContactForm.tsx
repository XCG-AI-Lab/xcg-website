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
      <div className="border-l-[3px] border-gold-400 bg-ink-50 p-8" role="status">
        <p className="font-display text-lg font-bold text-ink-950">{t.contact.formSuccess}</p>
      </div>
    );
  }

  const labelCls = "mb-2 block text-[13px] font-bold uppercase tracking-wider text-ink-700";

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            {t.contact.formName} *
          </label>
          <input id="cf-name" name="name" required maxLength={120} className="field" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>
            {t.contact.formPhone} *
          </label>
          <input id="cf-phone" name="phone" type="tel" required maxLength={30} className="field" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className={labelCls}>
            {t.contact.formEmail} *
          </label>
          <input id="cf-email" name="email" type="email" required maxLength={200} className="field" />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelCls}>
            {t.contact.formCompany}
          </label>
          <input id="cf-company" name="company" maxLength={200} className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-service" className={labelCls}>
          {t.contact.formService}
        </label>
        <select id="cf-service" name="service" className="field" defaultValue="">
          <option value="">—</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {locale === "zh" ? s.nameZh : s.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className={labelCls}>
          {t.contact.formMessage} *
        </label>
        <textarea id="cf-message" name="message" required rows={5} maxLength={5000} className="field" />
      </div>
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"} className="btn-gold disabled:opacity-60">
        {status === "sending" ? t.contact.formSending : t.contact.formSubmit}{" "}
        <span aria-hidden="true">→</span>
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm font-bold text-red-600">
          {t.contact.formError}
        </p>
      )}
    </form>
  );
}
