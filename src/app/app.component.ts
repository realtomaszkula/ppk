import { Component, trigger, state, animate, style, transition } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*' })),
      state('close', style({ height: 0 })),
      transition('close <=> open', animate(200))
    ])
  ]
})
export class AppComponent {
  open = false;
}
