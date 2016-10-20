import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-line-break',
  templateUrl: './line-break.component.html',
  styleUrls: ['./line-break.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineBreakComponent  {

  private modulo: number;
  private _length: number;

  @Input() index: number;
  @Input() set length(value: number) {
    this.modulo = value - 1 % 10;
    this._length = value - 1;
  }

  get length() {
    return this._length;
  }

  get show(): boolean {
    return (this.index - this.modulo) % 10 === 0 && this.length > 20 && this.index > 10 && this.index !== this.length;
  }

  get text(): string {
    return `${this.length  - this.index} questions left`;
  }
}



