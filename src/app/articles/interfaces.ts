export interface ArticleSummary {
  id: number;
  name: string;
  icon: string;
  excerpt: string;
  createdAt: number
}

export interface Article {
  id:  number;
  summary: ArticleSummary,
  content: string;
}
