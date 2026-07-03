export type ClusterSlug = "tax" | "company-secretarial" | "payroll-hr";

export interface ArticleSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface Article {
  slug: string;
  cluster: ClusterSlug;
  seoTitle: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  keywords: string[];
  h1: string;
  excerpt: string;
  datePublished: string; // ISO
  dateModified: string; // ISO
  serviceSlug: string;
  readMins: number;
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const clusters: Record<
  ClusterSlug,
  { name: string; nameZh: string; desc: string; descZh: string }
> = {
  tax: {
    name: "Tax & Compliance",
    nameZh: "税务与合规",
    desc: "E-invoicing, SST, corporate and personal tax, audits and deadlines — explained for Malaysian SMEs.",
    descZh: "电子发票、SST、公司及个人税务、税务审计与截止日期——为马来西亚中小企业清晰解读。",
  },
  "company-secretarial": {
    name: "Company & Secretarial",
    nameZh: "公司与秘书事务",
    desc: "Incorporation, company secretary duties, statutory filings and governance under the Companies Act 2016.",
    descZh: "公司注册、公司秘书职责、法定申报及2016年公司法下的治理。",
  },
  "payroll-hr": {
    name: "Payroll & HR",
    nameZh: "薪资与人力资源",
    desc: "EPF, SOCSO, EIS, PCB, EA forms, employment law and HR best practice for Malaysian employers.",
    descZh: "EPF、SOCSO、EIS、PCB、EA表格、雇佣法律及马来西亚雇主的人力资源最佳实践。",
  },
};
