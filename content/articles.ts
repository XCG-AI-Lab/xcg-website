import type { Article, ClusterSlug } from "./types";
import { taxArticles } from "./articles-tax";
import { cosecArticles } from "./articles-cosec";
import { payrollArticles } from "./articles-payroll";

export const articles: Article[] = [
  ...taxArticles,
  ...cosecArticles,
  ...payrollArticles,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCluster(cluster: ClusterSlug): Article[] {
  return articles.filter((a) => a.cluster === cluster);
}

export { clusters } from "./types";
export type { Article, ClusterSlug } from "./types";
