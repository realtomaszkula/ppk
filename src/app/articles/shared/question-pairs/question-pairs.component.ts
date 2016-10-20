import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Question } from '../../interfaces';

@Component({
  selector: 'app-question-pairs',
  templateUrl: './question-pairs.component.html',
  styleUrls: ['./question-pairs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionPairsComponent implements OnInit {
  private active: boolean = true;

  @Input() questionPairs: [Question, Question][];
  @Output() result = new EventEmitter<number>();

  onSubmit(f: NgForm) {
    const values = Object.keys(f.value).map(key => f.value[key]);
    const resultValue = values.reduce((acc, curr) => acc + curr, 0);
    const resultPct = resultValue * 100 / values.length;
    this.result.emit(resultPct);
  }


  reset() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
