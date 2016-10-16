import { Component, OnInit } from '@angular/core';

class SliderWrapper {
  openOrClosed = true;
  constructor(public title: string, public content?: string[]) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form = new SliderWrapper('Form');
  private telephone = new SliderWrapper('Telephone number', ['+46 736 34 32 35']);
  private adress = new SliderWrapper('Adress', 
    ["Herkulesgatan",
      "22 341",
      "33 Ljungby Sweden"
    ]);
  private socialMedia = new SliderWrapper('SocialMedia', ['Twitter', 'Facebook', 'LinkedIn']);

  sliderItems: SliderWrapper[] = [this.telephone, this.adress, this.socialMedia];

  constructor() { }

}

