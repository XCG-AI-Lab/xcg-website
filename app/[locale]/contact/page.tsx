import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site, SITE_URL, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";
  return pageMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: isZh
      ? "联系我们 | 武吉加里尔及甲洞办事处 | XCG"
      : "Contact XCG: Bukit Jalil & Kepong Offices | Free Consult",
    description: isZh
      ? "联系XCG——武吉加里尔总部及甲洞分行。电话+603-8074 7032，WhatsApp或在线表格。一个工作日内回复。"
      : "Reach XCG at our Bukit Jalil HQ or Kepong branch — call +603-8074 7032, WhatsApp, or send the form. We reply within one working day.",
  });
}

function contactPointJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "MY",
        availableLanguage: ["English", "Chinese", "Malay"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.whatsapp,
        contactType: "sales",
        contactOption: "TollFree",
        areaServed: "MY",
        availableLanguage: ["English", "Chinese"],
      },
    ],
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = getDict(locale);
  const isZh = locale === "zh";

  return (
    <>
      <JsonLd
        data={[
          contactPointJsonLd(),
          breadcrumbJsonLd(
            [
              { name: t.common.breadcrumbHome, path: "" },
              { name: t.nav.contact, path: "/contact" },
            ],
            locale
          ),
        ]}
      />

      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden="true" className="absolute right-0 top-0 h-[3px] w-1/3 bg-gold-400" />
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow-light !text-gold-400">{t.nav.contact}</p>
            <h1 className="display-1 mt-6 max-w-4xl text-white">{t.contact.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">{t.contact.subtitle}</p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                {t.nav.whatsapp} · {site.whatsapp}
              </a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="btn-outline-light">
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        {/* Form */}
        <div>
          <span className="beam" aria-hidden="true" />
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
            {isZh ? "发送信息" : "Send us a message"}
          </h2>
          <div className="mt-8">
            <ContactForm locale={locale} />
          </div>
        </div>

        {/* Office info */}
        <div>
          <span className="beam" aria-hidden="true" />
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">{t.contact.officesTitle}</h2>
          <div className="mt-8">
            {site.offices.map((office, i) => (
              <address key={office.id} className="border-t border-ink-200 py-6 not-italic">
                <p className="font-display text-[15px] font-bold text-ink-950">
                  {i === 0 ? t.contact.hqLabel : t.contact.branchLabel}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                  {office.street}, {office.postcode} {office.city}, Malaysia
                </p>
                <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3 !text-[13px]">
                  Google Maps <span className="arrow" aria-hidden="true">→</span>
                </a>
              </address>
            ))}
            <div className="border-t border-ink-200 py-6">
              <p className="font-display text-[15px] font-bold text-ink-950">{t.contact.hoursTitle}</p>
              <p className="mt-2 text-[14px] text-ink-600">{site.hours}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-600">
                <a href={`mailto:${site.email}`} className="font-bold text-ink-950 underline decoration-gold-400 decoration-2 underline-offset-4">
                  {site.email}
                </a>
                <br />
                {site.phone} · {site.phoneAlt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map embeds */}
      <section className="mx-auto grid max-w-[1320px] gap-px bg-ink-200 px-5 pb-24 sm:px-8 md:grid-cols-2">
        {site.offices.map((office, i) => (
          <div key={office.id} className="bg-white">
            <iframe
              src={office.mapEmbed}
              title={`${isZh ? office.nameZh : office.name} — Google Map`}
              width="100%"
              height="360"
              style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="border border-t-0 border-ink-200 px-5 py-4 font-display text-[14px] font-bold text-ink-950">
              {i === 0 ? t.contact.hqLabel : t.contact.branchLabel}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
