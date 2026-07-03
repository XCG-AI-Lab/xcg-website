import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EInvoicingChecker from "@/components/tools/EInvoicingChecker";
import { getDict } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";
  return pageMetadata({
    locale: locale as Locale,
    path: "/tools/e-invoicing-readiness",
    title: isZh
      ? "电子发票就绪度检查（免费）| MyInvois | XCG"
      : "E-Invoicing Readiness Checker (Free) | MyInvois | XCG",
    description: isZh
      ? "4个问题，60秒了解您的企业是否已为LHDN电子发票做好准备——并获取免费实施清单。"
      : "4 questions, 60 seconds: find out if your business is ready for LHDN e-invoicing — and get a free implementation checklist.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
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
            { name: t.nav.tools, path: "/tools" },
            { name: isZh ? "电子发票就绪度检查" : "E-Invoicing Readiness Checker", path: "/tools/e-invoicing-readiness" },
          ],
          locale
        )}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          {isZh ? "电子发票就绪度检查" : "E-Invoicing Readiness Checker"}
        </h1>
        <p className="mt-3 text-ink-600">
          {isZh
            ? "回答4个问题，即刻了解LHDN电子发票强制要求对您的影响及您的就绪程度。"
            : "Answer 4 quick questions to see how the LHDN e-invoicing mandate affects you and how ready you are."}
        </p>
        <EInvoicingChecker locale={locale} />
      </div>
    </>
  );
}
