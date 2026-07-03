import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
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
    path: "/about",
    title: isZh
      ? "关于我们 | X的五重含义 | X Consultancy Group"
      : "About XCG: The 5 Meanings of X | X Consultancy Group",
    description: isZh
      ? "认识XCG——由两位企业家创立的战略咨询伙伴。了解X的五重含义、PRIME核心价值观及屡获殊荣的团队。"
      : "Meet XCG — the strategic advisory partner founded on 'The 5 Meanings of X'. Our story, PRIME values, awards and the founders behind the firm.",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
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
            { name: t.nav.about, path: "/about" },
          ],
          locale
        )}
      />

      {/* Intro */}
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="rise">
            <p className="eyebrow-light !text-gold-400">{t.nav.about}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.about.title}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-300 sm:text-xl">{t.about.story}</p>
          </div>
        </div>
      </section>

      {/* 5 Meanings of X — editorial numbered blocks */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8" aria-labelledby="meanings-title">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <h2 id="meanings-title" className="display-2 mt-6">
            {t.about.meaningsTitle}
          </h2>
        </Reveal>
        <div className="mt-14">
          {t.about.meanings.map((m, i) => (
            <Reveal key={m.title}>
              <div className="grid gap-4 border-t border-ink-200 py-10 sm:grid-cols-[120px_minmax(0,5fr)_minmax(0,7fr)] sm:items-baseline sm:gap-8">
                <p aria-hidden="true" className="font-display text-4xl font-bold text-gold-400">
                  {i === 4 ? "∞" : `0${i + 1}`}
                </p>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink-950">{m.title}</h3>
                <p className="text-[16px] leading-relaxed text-ink-600">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Vision — split statement */}
      <section className="bg-ink-950">
        <div className="mx-auto grid max-w-[1320px] gap-px bg-white/10 px-0 md:grid-cols-2">
          <div className="bg-ink-950 px-5 py-20 sm:px-8 lg:px-12">
            <p className="eyebrow-light !text-gold-400">{t.about.missionTitle}</p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-white">
              {t.about.mission}
            </p>
          </div>
          <div className="bg-ink-950 px-5 py-20 sm:px-8 lg:px-12">
            <p className="eyebrow-light !text-gold-400">{t.about.visionTitle}</p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-white">
              {t.about.vision}
            </p>
          </div>
        </div>
      </section>

      {/* PRIME values */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8" aria-labelledby="values-title">
        <Reveal>
          <span className="beam" aria-hidden="true" />
          <h2 id="values-title" className="display-2 mt-6">
            {t.about.valuesTitle}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-5">
          {t.about.values.map((v) => (
            <div key={v.k} className="bg-white py-8 pr-6 sm:px-6 lg:px-6">
              <p className="font-display text-4xl font-bold text-gold-400">{v.k}</p>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink-950">{v.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-ink-200" aria-labelledby="team-title">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <span className="beam" aria-hidden="true" />
            <h2 id="team-title" className="display-2 mt-6 max-w-3xl">
              {t.about.teamTitle}
            </h2>
            <p className="mt-3 text-lg text-ink-500">{t.about.teamSubtitle}</p>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {site.founders.map((f) => (
              <Reveal key={f.name}>
                <article className="border-t-[3px] border-ink-950 pt-8">
                  <h3 className="font-display text-3xl font-bold tracking-tight text-ink-950">{f.name}</h3>
                  <p className="mt-1 font-display text-[15px] font-bold text-gold-600">
                    {isZh ? f.roleZh : f.role}
                  </p>
                  <p className="mt-4 text-[13px] font-bold uppercase tracking-wider text-ink-400">
                    {f.credentials}
                  </p>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-600">{isZh ? f.bioZh : f.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Awards */}
          <div className="mt-20 border-t border-ink-200 pt-12">
            <p className="eyebrow">{t.home.awardsTitle}</p>
            <ul className="mt-8 grid gap-10 md:grid-cols-3">
              {site.awards.map((a) => (
                <li key={a.name}>
                  <p className="font-display text-5xl font-bold tracking-tight text-gold-400">{a.year}</p>
                  <p className="mt-3 font-display text-lg font-bold leading-snug text-ink-950">{a.name}</p>
                  <p className="mt-1 text-[14px] text-ink-500">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
