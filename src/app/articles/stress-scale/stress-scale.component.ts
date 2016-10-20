import { Component, OnInit } from '@angular/core';

import { Question, ResultScale} from '../interfaces';

@Component({
  selector: 'app-stress-scale',
  templateUrl: './stress-scale.component.html',
  styleUrls: ['./stress-scale.component.scss']
})
export class StressScaleComponent implements OnInit {

  title = 'The Holmes and Rahe Stress Scale';

  instructions: string[] = [
    'Ea aute exercitation labore anim dolore.',
    'Ea et Lorem magna exercitation nisi ea in nostrud magna ad ut laboris. Aute mollit tempor ipsum enim incididunt pariatur est qui exercitation ea Lorem anim Lorem sint. Consequat proident laborum ea sit et amet aliqua occaecat eu. Irure in elit duis voluptate dolor exercitation dolor.',
    'Aliquip officia enim Lorem culpa officia nulla. Exercitation aliquip consectetur reprehenderit ipsum occaecat dolore ad enim nisi. Ad velit enim laboris anim exercitation adipisicing do tempor. Nisi officia dolore reprehenderit consequat enim officia irure veniam quis occaecat irure irure deserunt sit. In consequat nulla ullamco excepteur tempor consectetur adipisicing exercitation dolor dolor fugiat cupidatat enim eiusmod. Aute amet amet in pariatur voluptate excepteur mollit sunt. Quis reprehenderit enim commodo fugiat laboris id.'
  ]

  resultScale: ResultScale[] = [
    new ResultScale({ from: 0, to: 150 }, 'Normal Behavior'),
    new ResultScale({ from: 151, to: 200 }, '37% szansa na chorobe w ciagu 2 lat'),
    new ResultScale({ from: 201, to: 299 }, '51% szansa na chorobe w ciagu 2 lat'),
    new ResultScale({ from: 300, to: Number.POSITIVE_INFINITY }, '79% szansa na chorobe w ciagu 2 lat'),
  ]

  questions: Question[] = [];


  constructor() { }

  ngOnInit() {
  }

}
