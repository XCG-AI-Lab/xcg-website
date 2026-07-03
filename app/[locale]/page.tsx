import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import { getDict } from "@/lib/i18n";
import { pageMetadata, aggregateRatingJsonLd } from "@/lib/seo";
import { services, stages } from "@/lib/services";
import { articles } from "@/content/articles";
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
    path: "",
    title: isZh
      ? "马来西亚一站式商业咨询 | 公司秘书·会计·税务 | XCG"
      : "Business Advisory Malaysia: Cosec, Tax & Accounting | XCG",
    description: isZh
      ? "XCG——吉隆坡一站式商业咨询公司：公司注册、公司秘书、会计、税务、电子发票及薪资服务。武吉加里尔及甲洞办事处。立即免费咨询。"
      : "One-stop business advisory in KL — incorporation, company secretary, accounting, tax, e-invoicing & payroll. Offices in Bukit Jalil & Kepong. Free consult.",
  });
}

const stageOrder = ["start", "run", "grow"] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = getDict(locale);
  const isZh = locale === "zh";
  const p = (path: string) => `/${locale}${path}`;
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      <JsonLd data={aggregateRatingJsonLd()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 20%, rgba(255,192,0,0.14) 0%, transparent 60%), radial-gradient(40% 60% at 10% 90%, rgba(255,192,0,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="mb-4 inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold-400">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={p("/contact")}
              className="rounded-lg bg-gold-400 px-6 py-3.5 font-bold text-ink-900 shadow-lg shadow-gold-400/20 hover:bg-gold-300"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href={p("/services")}
              className="rounded-lg border border-ink-600 px-6 py-3.5 font-semibold text-white hover:border-gold-400 hover:text-gold-400"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Trust bar — awards high on the page */}
          <div className="mt-14 border-t border-ink-800 pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-500">
              {t.hero.trustLine}
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {site.awards.map((a) => (
                <li key={a.name} className="flex items-center gap-2 text-sm text-ink-300">
                  <span aria-hidden="true" className="text-gold-400">★</span>
                  <span>
                    <strong className="text-white">{a.year} {a.name}</strong> — {a.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Journey navigation */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="journey-title">
        <h2 id="journey-title" className="text-center font-display text-3xl font-bold sm:text-4xl">
          {t.home.journeyTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink-600">{t.home.journeySubtitle}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stageOrder.map((stage, i) => {
            const stageServices = services.filter((s) => s.stage === stage);
            return (
              <div
                key={stage}
                className="rounded-2xl border border-ink-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 font-display text-lg font-extrabold text-gold-700">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-bold">
                  {isZh ? stages[stage].labelZh : stages[stage].label}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{isZh ? stages[stage].descZh : stages[stage].desc}</p>
                <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5">
                  {stageServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={p(`/services/${s.slug}`)}
                        className="group flex items-center justify-between text-sm font-medium text-ink-800 hover:text-gold-700"
                      >
                        {isZh ? s.nameZh : s.name}
                        <span aria-hidden="true" className="text-gold-500 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why XCG */}
      <section className="bg-ink-50" aria-labelledby="why-title">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 id="why-title" className="text-center font-display text-3xl font-bold sm:text-4xl">
            {t.home.whyTitle}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.why.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — de-duplicated, 5 unique */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title" className="text-center font-display text-3xl font-bold sm:text-4xl">
          {t.home.testimonialsTitle}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((tm) => (
            <figure key={tm.name} className="flex flex-col justify-between rounded-2xl border border-ink-100 p-6">
              <div>
                <div aria-label="5 out of 5 stars" className="text-gold-500">★★★★★</div>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink-700">“{tm.quote}”</blockquote>
              </div>
              <figcaption className="mt-4 border-t border-ink-100 pt-4 text-sm">
                <span className="font-bold text-ink-900">{tm.name}</span>
                <span className="block text-ink-500">{tm.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Latest resources */}
      <section className="bg-ink-50" aria-labelledby="resources-title">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="resources-title" className="font-display text-3xl font-bold sm:text-4xl">
                {t.home.resourcesTitle}
              </h2>
              <p className="mt-2 max-w-xl text-ink-600">{t.home.resourcesSubtitle}</p>
            </div>
            <Link href={p("/resources")} className="font-semibold text-gold-700 hover:text-gold-800">
              {t.home.resourcesCta} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestArticles.map((a) => (
              <Link
                key={a.slug}
                href={p(`/resources/${a.cluster}/${a.slug}`)}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  {a.cluster === "tax" ? "Tax & Compliance" : a.cluster === "company-secretarial" ? "Company & Secretarial" : "Payroll & HR"}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-gold-700">
                  {a.h1}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{a.excerpt}</p>
                <p className="mt-4 text-xs text-ink-400">{a.readMins} {t.resources.minRead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
