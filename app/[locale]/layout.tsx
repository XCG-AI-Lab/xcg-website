import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { locales, site, SITE_URL, type Locale } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s`,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const loc = locale as Locale;

  return (
    <html lang={loc === "zh" ? "zh-MY" : "en-MY"} className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), ...localBusinessJsonLd()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header locale={loc} />
        <main id="main">{children}</main>
        <Footer locale={loc} />
        <WhatsAppFloat locale={loc} />
      </body>
    </html>
  );
}
