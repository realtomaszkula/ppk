import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface ArticleSummary {
  id: number;
  name: string,
  icon: string,
  excerpt: string
}



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articlesSummaries: ArticleSummary[] = [
    { id: 1,  name: 'Stres', excerpt: `Amet tempor do laborum ex deserunt et proident minim quis nulla eu. Labore incididunt elit labore officia duis pariatur nostrud ea irure ullamco veniam. Ea sit quis id aute. Deserunt proident eiusmod aliquip fugiat voluptate commodo veniam eu. Do ipsum incididunt officia ut non proident non qui.`, icon: 'home'},
    { id: 2,  name: 'Stres', excerpt: `Qui qui mollit consectetur culpa. Id aliquip ullamco ea incididunt aliqua. Ea non est velit aliquip sunt. Officia quis duis laboris qui non eiusmod ullamco irure. Excepteur cupidatat fugiat et nisi enim enim veniam id reprehenderit occaecat velit duis sint. Fugiat eiusmod nisi pariatur ipsum ut ea.`, icon: 'pregnant_woman'},
    { id: 3,  name: 'Stres', excerpt: `Cillum eu aliqua ullamco sint laboris eiusmod eu.`, icon: 'query_builder'},
    { id: 4,  name: 'Stres', excerpt: `Commodo qui eu ea aliqua mollit consequat qui cupidatat anim laborum fugiat fugiat. Veniam occaecat ullamco voluptate qui minim non dolore ex. Amet velit aliquip aliqua Lorem duis cupidatat.`, icon: 'motorcycle'},
    { id: 5,  name: 'Stres', excerpt: `Commodo reprehenderit reprehenderit ad reprehenderit labore et velit consectetur minim ea.`, icon: 'opacity'},
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigateTo(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
