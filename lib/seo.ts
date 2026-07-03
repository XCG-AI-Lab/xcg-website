import type { Metadata } from "next";
import { SITE_URL, site, type Locale } from "./site";

/**
 * Build page metadata with unique title/description, canonical URL,
 * complete hreflang pairs (EN/ZH), Open Graph and Twitter Card tags.
 * `path` is locale-less, e.g. "/services/taxation" or "" for home.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  ogType = "website",
  noZhVersion = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  noZhVersion?: boolean;
}): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  const languages: Record<string, string> = noZhVersion
    ? { en: `${SITE_URL}/en${path}`, "x-default": `${SITE_URL}/en${path}` }
    : {
        en: `${SITE_URL}/en${path}`,
        zh: `${SITE_URL}/zh${path}`,
        "x-default": `${SITE_URL}/en${path}`,
      };

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: locale === "zh" ? "zh_MY" : "en_MY",
      type: ogType,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

/* ---------- JSON-LD builders ---------- */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    slogan: site.tagline,
    email: site.email,
    telephone: site.phone,
    foundingDate: "2018",
    founder: site.founders.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.offices[0].street,
      addressLocality: site.offices[0].city,
      postalCode: site.offices[0].postcode,
      addressRegion: site.offices[0].region,
      addressCountry: "MY",
    },
    sameAs: Object.values(site.social),
    award: site.awards.map((a) => `${a.year} ${a.name} — ${a.detail}`),
  };
}

export function localBusinessJsonLd() {
  return site.offices.map((office) => ({
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    "@id": `${SITE_URL}/#office-${office.id}`,
    name: `${site.name} — ${office.name}`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    telephone: site.phone,
    email: site.email,
    priceRange: "RM",
    address: {
      "@type": "PostalAddress",
      streetAddress: office.street,
      addressLocality: office.city,
      postalCode: office.postcode,
      addressRegion: office.region,
      addressCountry: "MY",
    },
    geo: { "@type": "GeoCoordinates", latitude: office.geo.lat, longitude: office.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: office.mapUrl,
  }));
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path}`,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  locale,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}/${locale}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Malaysia" },
    serviceType: name,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/${locale}${path}`,
    datePublished,
    dateModified,
    inLanguage: locale === "zh" ? "zh" : "en",
    author: { "@type": "Organization", name: "XCG Advisory Team", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: `${SITE_URL}/${locale}${path}`,
  };
}

export function aggregateRatingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    review: site.testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: site.testimonials.length,
      bestRating: 5,
    },
  };
}
