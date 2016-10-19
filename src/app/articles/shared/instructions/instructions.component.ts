import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-instructions',
  template: `
    <h2>
      Instructions</h2>
    <ol>
      <li *ngFor="let instruction of instructions">{{instruction}}</li>
    </ol>
  `,
  styleUrls: ['./instructions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsComponent {

  @Input() instructions: string[];

}
