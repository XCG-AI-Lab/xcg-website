import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import NameChecker from "@/components/tools/NameChecker";
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
    path: "/tools/company-name-checker",
    title: isZh
      ? "公司名称预查工具（免费）| SSM规则 | XCG"
      : "Company Name Pre-Checker (Free) | SSM Rules | XCG",
    description: isZh
      ? "在向SSM申请前，免费预查您的Sdn Bhd公司名称是否符合格式和受管制字词规则。"
      : "Pre-check your proposed Sdn Bhd name against SSM formatting and restricted-word rules before applying — free from XCG.",
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
            { name: isZh ? "公司名称预查" : "Company Name Pre-Checker", path: "/tools/company-name-checker" },
          ],
          locale
        )}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          {isZh ? "公司名称预查" : "Company Name Pre-Checker"}
        </h1>
        <p className="mt-3 text-ink-600">
          {isZh
            ? "在提交SSM申请前，快速检查您的公司名称是否存在常见问题。"
            : "Quickly check your proposed company name for common issues before you submit to SSM."}
        </p>
        <NameChecker locale={locale} />
      </div>
    </>
  );
}
