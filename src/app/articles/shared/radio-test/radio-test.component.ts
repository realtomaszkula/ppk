import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Question, ResultScale } from '../../interfaces';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioTestComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() instructions: string[];
  @Input() questions: Question[];
  @Input() optionsForRadio: any[];
  @Input() result: number;
  @Input() resultScale: ResultScale;

  ngOnInit() {
  }

}
