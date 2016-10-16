import { Component, OnInit } from '@angular/core';

interface Tab {
  icon: string;
  content: string;
  title: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  tabs: Tab[] = [
    { title: 'Homeland', icon: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.'},
    { title: 'Career', icon: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.'},
    { title: 'Religion', icon: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.'},
  ]

  welcomeMsg: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.';

  constructor() { }

  ngOnInit() {
  }

}
