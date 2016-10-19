import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-result',
  template: `
  <div *ngIf="result >= 0">

    <h2>Result</h2>

    <h4>You scored: {{ result }}</h4>
    <p>{{ resultExplanation }} </p>
    <section>
      <div class="line" [style.left]="left"></div>
    </section>
  </div>
  `,
  styleUrls: ['./gradient-result.component.scss']
})
export class GradientResultComponent {

  @Input() result: number = 0;

  resultExplanation: string = 'Cillum nisi Lorem occaecat enim enim dolore velit do adipisicing ut. Nulla ea deserunt do reprehenderit nisi adipisicing in ullamco id eiusmod adipisicing amet. Reprehenderit sunt ex laboris consequat commodo pariatur aliqua id excepteur sint. Deserunt irure qui minim enim fugiat laboris labore. Mollit magna sunt in consequat nostrud magna eiusmod aliqua. Anim ex nulla laborum irure dolore sunt nostrud ut. Ipsum sint exercitation ullamco velit.';

  get left() {
    return this.result + '%'
  }

}
