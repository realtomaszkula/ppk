import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Question, QuestionWithModifier, OptionsForRadio } from '../../interfaces';

@Component({
  selector: 'app-radio-questions',
  templateUrl: './radio-questions.component.html',
  styleUrls: ['./radio-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RadioQuestionsComponent {

  private active: boolean = true;

  @Input() questions:  Array<Question|QuestionWithModifier>;
  @Input() optionsForRadio: OptionsForRadio[];
  @Output() result = new EventEmitter<number>();

  constructor() { }

  onSubmit(form: NgForm) {
    let values = Object.keys(form.value).map(key => form.value[key]);

    let modifierIndex: number[] = this.questions.reduce((acc, q: QuestionWithModifier, i) => {
      if (q.modifier) acc.push(i);
      return acc
    }, [])


    let resultValue = values.reduce((acc, curr, i) => {
      if (modifierIndex.lastIndexOf(i) !== -1 ) {
       curr =  curr === 0 ? 1 : 0;
      } 
      return acc + curr;
    })


    this.result.emit(resultValue);
  }

  private reset() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
