import { Component, OnInit } from '@angular/core';

interface Tab {
  icon: string;
  content: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  tabs: Tab[] = [
    { url: '/contact', title: 'Contact', icon: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.'},
    { url: '/career', title: 'Career', icon: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.'},
    { url: '/articles', title: 'Articles', icon: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem, quod expedita impedit doloribus recusandae dignissimos assumenda delectus. Omnis, odit.'},
  ]

  welcomeMsg: string = 'Id fugiat ex occaecat cupidatat sit pariatur dolore aute in mollit. Cupidatat labore Lorem pariatur amet enim et id laborum officia. Cupidatat do laboris reprehenderit ea reprehenderit voluptate esse anim ullamco. Mollit fugiat duis consequat sit cillum ipsum quis anim sunt adipisicing tempor duis elit tempor. Eiusmod deserunt quis non tempor. Ex nisi proident officia dolor consequat cupidatat. Ipsum cillum ut mollit do ex duis.';

  constructor() { }

  ngOnInit() {
  }

}
