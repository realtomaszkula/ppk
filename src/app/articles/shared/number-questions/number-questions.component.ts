import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { QuestionWithWeight} from '../../interfaces';

@Component({
  selector: 'app-number-questions',
  templateUrl: './number-questions.component.html',
  styleUrls: ['./number-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberQuestionsComponent implements OnInit {

  active: boolean = true;

  @Input() min: number;
  @Input() max: number;
  @Input() questions: QuestionWithWeight[];
  @Output() result = new EventEmitter<number>();

  onSubmit(f: NgForm) {
    let resultValue = this.questions.reduce((acc: number, q: QuestionWithWeight) => (q.value * q.weight) + acc, 0);
    this.result.emit(resultValue);
  }

  reset() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
