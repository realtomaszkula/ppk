import { Component, Input, animate, trigger, style, transition, state } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
       trigger('openClose', [
           state('void, closed', style({ height: 0 })),
           state('open', style({ height: '*' })),
           transition('* => *', animate('200ms ease-out'))
       ])
  ]
})
export class SliderComponent   {

  constructor() { }

  @Input('open')
  public open = true;

  toggle() {
    this.open = !this.open;
  }
}
