import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
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

      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">{t.contact.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white hover:opacity-90"
            >
              {t.nav.whatsapp} · {site.whatsapp}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="rounded-lg border border-ink-600 px-6 py-3 font-semibold text-white hover:border-gold-400 hover:text-gold-400"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm locale={locale} />
        </div>

        {/* Office info */}
        <div className="space-y-6 lg:col-span-2">
          <div>
            <h2 className="font-display text-xl font-bold">{t.contact.officesTitle}</h2>
            {site.offices.map((office, i) => (
              <address key={office.id} className="mt-4 rounded-2xl border border-ink-100 p-5 not-italic">
                <p className="font-bold text-ink-900">
                  {i === 0 ? t.contact.hqLabel : t.contact.branchLabel}
                </p>
                <p className="mt-1 text-sm text-ink-600">
                  {office.street}, {office.postcode} {office.city}, Malaysia
                </p>
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-gold-700 hover:text-gold-800"
                >
                  Google Maps →
                </a>
              </address>
            ))}
          </div>
          <div className="rounded-2xl border border-ink-100 p-5">
            <h2 className="font-display text-lg font-bold">{t.contact.hoursTitle}</h2>
            <p className="mt-1 text-sm text-ink-600">{site.hours}</p>
            <p className="mt-3 text-sm text-ink-600">
              <a href={`mailto:${site.email}`} className="font-semibold text-gold-700 hover:text-gold-800">
                {site.email}
              </a>
              <br />
              {site.phone} · {site.phoneAlt}
            </p>
          </div>
        </div>
      </section>

      {/* Map embeds */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-2">
        {site.offices.map((office, i) => (
          <div key={office.id} className="overflow-hidden rounded-2xl border border-ink-100">
            <iframe
              src={office.mapEmbed}
              title={`${isZh ? office.nameZh : office.name} — Google Map`}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="px-4 py-3 text-sm font-semibold text-ink-800">
              {i === 0 ? t.contact.hqLabel : t.contact.branchLabel}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
