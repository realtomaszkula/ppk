import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { ResultScale} from '../../interfaces';


@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultTableComponent  {

  @Input() result: number;
  @Input() resultScale: ResultScale;

}
