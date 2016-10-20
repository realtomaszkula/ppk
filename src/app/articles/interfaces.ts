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

export class Question {
  constructor(public content: string, public value: number = null) {}
}

export class ResultScale {
  constructor(public range: {from: number, to: number}, public explanation: string) {}
}

