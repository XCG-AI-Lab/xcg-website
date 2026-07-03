import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaSection from "@/components/CtaSection";
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
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{t.about.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-300">{t.about.story}</p>
        </div>
      </section>

      {/* 5 Meanings of X */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="meanings-title">
        <h2 id="meanings-title" className="text-center font-display text-3xl font-bold sm:text-4xl">
          {t.about.meaningsTitle}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.about.meanings.map((m, i) => (
            <div key={m.title} className="relative overflow-hidden rounded-2xl border border-ink-100 p-8">
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-6 font-display text-8xl font-extrabold text-gold-100"
              >
                {i === 4 ? "∞" : "X"}
              </span>
              <h3 className="relative font-display text-xl font-bold">{m.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold">{t.about.missionTitle}</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{t.about.mission}</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold">{t.about.visionTitle}</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{t.about.vision}</p>
          </div>
        </div>
      </section>

      {/* PRIME values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="values-title">
        <h2 id="values-title" className="text-center font-display text-3xl font-bold sm:text-4xl">
          {t.about.valuesTitle}
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.about.values.map((v) => (
            <div key={v.k} className="rounded-2xl border border-ink-100 p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-display text-xl font-extrabold text-gold-400">
                {v.k}
              </span>
              <h3 className="mt-4 font-display font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="bg-ink-950" aria-labelledby="team-title">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 id="team-title" className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            {t.about.teamTitle}
          </h2>
          <p className="mt-2 text-center text-ink-400">{t.about.teamSubtitle}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {site.founders.map((f) => (
              <article key={f.name} className="rounded-2xl border border-ink-800 bg-ink-900 p-8">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400 font-display text-2xl font-extrabold text-ink-900"
                  >
                    {f.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{f.name}</h3>
                    <p className="text-sm font-semibold text-gold-400">{isZh ? f.roleZh : f.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-400">{f.credentials}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{isZh ? f.bioZh : f.bio}</p>
              </article>
            ))}
          </div>

          {/* Awards */}
          <div className="mt-16 border-t border-ink-800 pt-10">
            <h2 className="text-center font-display text-2xl font-bold text-white">{t.home.awardsTitle}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {site.awards.map((a) => (
                <li key={a.name} className="rounded-2xl border border-ink-800 p-6 text-center">
                  <span aria-hidden="true" className="text-2xl text-gold-400">🏆</span>
                  <p className="mt-2 font-display font-bold text-white">{a.year} {a.name}</p>
                  <p className="mt-1 text-sm text-ink-400">{a.detail}</p>
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
