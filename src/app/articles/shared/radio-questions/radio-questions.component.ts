import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Question } from '../../interfaces';

@Component({
  selector: 'app-radio-questions',
  templateUrl: './radio-questions.component.html',
  styleUrls: ['./radio-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RadioQuestionsComponent {

  private active: boolean = true;

  @Input() questions: Question[];
  @Input() optionsForRadio: any[];
  @Output() result = new EventEmitter<number>();

  constructor() { }

  onSubmit(f: NgForm) {
    let resultValue = this.questions.reduce((acc: number, q: Question) => q.value + acc, 0);
    this.result.emit(resultValue);
  }

  reset() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
