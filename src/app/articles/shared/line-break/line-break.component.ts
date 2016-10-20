import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-break',
  templateUrl: './line-break.component.html',
  styleUrls: ['./line-break.component.scss']
})
export class LineBreakComponent  {
  @Input() show: boolean;
  @Input() text: string;
}
