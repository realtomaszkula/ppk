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

type radioOptions  = { machine: number, human?: string };

export class OptionsForRadio {
  private _options: radioOptions[];

  constructor(options: radioOptions[]){
    this.options = options;
  }

  get options() {
    return this._options;
  }

  set options(options: radioOptions[]) {
    this._options = options.map(opts => { 
      if (!opts.human) {
        opts.human = '' + opts.machine;
      }
      return opts;
     })
  }
}

export class Question {
  constructor(public content: string, public value: number = null) {}
}

export class QuestionWithWeight extends Question {
  constructor(public content: string, public weight: number, public value: number = 0) {
    super(content, value);
  }
}

export class QuestionWithModifier extends Question {
  constructor(public content: string, public modifier: boolean = false, public value: number = null) {
    super(content, value);
  }
}

export class ResultScale {
  constructor(public range: {from: number, to: number}, public explanation: string) {}
}

