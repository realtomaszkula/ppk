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

export class OptionsForRadio {
  constructor(public options: {machine: number, human?: string}[]){}
}

export class Question {
  constructor(public content: string, public value: number = null) {}
}

export class QuestionWithWeight extends Question {
  constructor(public content: string, public weight: number, public value: number = 0) {
    super(content, value);
  }
}

export class ResultScale {
  constructor(public range: {from: number, to: number}, public explanation: string) {}
}

