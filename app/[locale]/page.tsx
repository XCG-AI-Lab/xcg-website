import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { getDict } from "@/lib/i18n";
import { pageMetadata, aggregateRatingJsonLd } from "@/lib/seo";
import { services, stages } from "@/lib/services";
import { articles, clusters } from "@/content/articles";
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
  const latestArticles = articles.slice(0, 4);
  const [featured, ...restTestimonials] = site.testimonials;

  const statItems = [
    { n: "9", label: isZh ? "专业服务领域" : "professional service lines" },
    { n: "2", label: isZh ? "吉隆坡办事处" : "offices across Kuala Lumpur" },
    { n: "100%", label: isZh ? "一年客户增长" : "client-base growth in one year" },
    { n: "3", label: isZh ? "国家级奖项" : "national business awards" },
  ];

  return (
    <>
      <JsonLd data={aggregateRatingJsonLd()} />

      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden bg-ink-950">
        {/* Structural geometry: vertical hairlines + gold beam fragment */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="mx-auto grid h-full max-w-[1320px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            <div className="border-l border-white/[0.06]" />
            <div className="border-l border-white/[0.06]" />
            <div className="hidden border-l border-white/[0.06] lg:block" />
            <div className="hidden border-l border-r border-white/[0.06] lg:block" />
          </div>
          <div className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-36">
          <Reveal>
            <p className="eyebrow-light !text-gold-400">{t.hero.eyebrow}</p>
            <h1 className="display-1 mt-6 max-w-5xl text-white">{t.hero.title}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href={p("/contact")} className="btn-gold">
                {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
              </Link>
              <Link href={p("/services")} className="btn-outline-light">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>

          {/* Awards strip */}
          <Reveal delay={200}>
            <div className="mt-24 border-t border-white/10 pt-8">
              <p className="eyebrow-light">{t.hero.trustLine}</p>
              <ul className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-3">
                {site.awards.map((a) => (
                  <li key={a.name} className="text-[14px] leading-snug text-ink-400">
                    <span className="block font-display font-bold text-white">
                      {a.year} · {a.name}
                    </span>
                    {a.detail}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Stats band ============ */}
      <section aria-label="XCG in numbers" className="border-b border-ink-200">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-4">
          {statItems.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-12 sm:px-8 ${i > 0 ? "border-l border-ink-200" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-ink-200" : ""} ${i === 2 ? "max-lg:border-l-0" : ""}`}
            >
              <p className="font-display text-5xl font-bold tracking-tight text-ink-950 lg:text-6xl">
                {s.n}
              </p>
              <p className="mt-3 text-[14px] leading-snug text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Services — editorial index ============ */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8" aria-labelledby="journey-title">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 id="journey-title" className="display-2 max-w-3xl">
              {t.home.journeyTitle}
            </h2>
            <Link href={p("/services")} className="link-arrow whitespace-nowrap">
              {t.common.viewAll} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-ink-500">{t.home.journeySubtitle}</p>
        </Reveal>

        <div className="mt-16">
          {stageOrder.map((stage, i) => {
            const stageServices = services.filter((s) => s.stage === stage);
            return (
              <Reveal key={stage}>
                <div className="grid gap-6 border-t border-ink-200 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                  <div>
                    <p className="font-display text-sm font-bold text-gold-500">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                      {isZh ? stages[stage].labelZh : stages[stage].label}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
                      {isZh ? stages[stage].descZh : stages[stage].desc}
                    </p>
                  </div>
                  <ul className="divide-y divide-ink-100">
                    {stageServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={p(`/services/${s.slug}`)}
                          className="group flex items-center justify-between gap-6 py-4"
                        >
                          <span className="font-display text-lg font-semibold text-ink-800 transition-colors group-hover:text-ink-950">
                            {isZh ? s.nameZh : s.name}
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-gold-500 transition-transform duration-200 group-hover:translate-x-1.5"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ Why XCG ============ */}
      <section className="bg-ink-950" aria-labelledby="why-title">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <span className="beam" aria-hidden="true" />
            <h2 id="why-title" className="display-2 mt-6 max-w-2xl text-white">
              {t.home.whyTitle}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.why.map((item, i) => (
              <div key={item.title} className="bg-ink-950 py-10 sm:px-8 sm:first:pl-0 lg:pr-10">
                <p className="font-display text-sm font-bold text-gold-400">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Testimonials — pull quote ============ */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8" aria-labelledby="testimonials-title">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <h2 id="testimonials-title" className="display-2 mt-6">
            {t.home.testimonialsTitle}
          </h2>
        </Reveal>

        <Reveal>
          <figure className="mt-14 border-l-[3px] border-gold-400 pl-8 sm:pl-12">
            <blockquote className="max-w-4xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink-950 sm:text-3xl">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-6 text-[15px] text-ink-500">
              <span className="font-bold text-ink-950">{featured.name}</span> — {featured.company}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-px bg-ink-200 sm:grid-cols-2">
          {restTestimonials.map((tm) => (
            <figure key={tm.name} className="bg-white p-8">
              <blockquote className="text-[15px] leading-relaxed text-ink-700">“{tm.quote}”</blockquote>
              <figcaption className="mt-5 text-[14px] text-ink-500">
                <span className="font-bold text-ink-950">{tm.name}</span> — {tm.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ Insights — editorial rows ============ */}
      <section className="border-t border-ink-200" aria-labelledby="resources-title">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <span className="beam" aria-hidden="true" />
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="resources-title" className="display-2">
                  {t.home.resourcesTitle}
                </h2>
                <p className="mt-3 max-w-xl text-lg text-ink-500">{t.home.resourcesSubtitle}</p>
              </div>
              <Link href={p("/resources")} className="link-arrow whitespace-nowrap">
                {t.home.resourcesCta} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12">
            {latestArticles.map((a) => (
              <Link key={a.slug} href={p(`/resources/${a.cluster}/${a.slug}`)} className="group block">
                <article className="grid gap-2 border-t border-ink-200 py-7 transition-colors group-hover:bg-ink-50 sm:grid-cols-[180px_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2">
                  <p className="eyebrow !text-gold-600">
                    {isZh ? clusters[a.cluster].nameZh : clusters[a.cluster].name}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink-950 group-hover:underline group-hover:decoration-gold-400 group-hover:decoration-[3px] group-hover:underline-offset-4">
                      {a.h1}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-500">{a.excerpt}</p>
                  </div>
                  <p className="text-[13px] text-ink-400">
                    {a.readMins} {t.resources.minRead}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
