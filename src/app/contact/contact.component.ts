import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  adress = [
    "Herkulesgatan 22",
    "341 33 Ljungby",
    "Sweden"
    ]

  phone = [
    '+46 736 34 32 35'
  ]

  socialMedia: { icon: string, url: string }[] = [
    { icon: 'home', url: '' },
    { icon: 'home', url: '' },
    { icon: 'home', url: '' },
  ]

  constructor() { }

  ngOnInit() {
  }

}

