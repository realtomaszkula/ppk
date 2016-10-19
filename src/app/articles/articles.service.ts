import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Article, ArticleSummary } from './interfaces';

 const mockSummaries: ArticleSummary[] = [
    { id: 1, createdAt: Date.now(),  name: 'Stres', excerpt: `Amet tempor do laborum ex deserunt et proident minim quis nulla eu. Labore incididunt elit labore officia duis pariatur nostrud ea irure ullamco veniam. Ea sit quis id aute. Deserunt proident eiusmod aliquip fugiat voluptate commodo veniam eu. Do ipsum incididunt officia ut non proident non qui.`, icon: 'home'},
    { id: 2, createdAt: Date.now(),  name: 'Stres', excerpt: `Qui qui mollit consectetur culpa. Id aliquip ullamco ea incididunt aliqua. Ea non est velit aliquip sunt. Officia quis duis laboris qui non eiusmod ullamco irure. Excepteur cupidatat fugiat et nisi enim enim veniam id reprehenderit occaecat velit duis sint. Fugiat eiusmod nisi pariatur ipsum ut ea.`, icon: 'pregnant_woman'},
    { id: 3, createdAt: Date.now(),  name: 'Stres', excerpt: `Cillum eu aliqua ullamco sint laboris eiusmod eu.`, icon: 'query_builder'},
    { id: 4, createdAt: Date.now(),  name: 'Stres', excerpt: `Commodo qui eu ea aliqua mollit consequat qui cupidatat anim laborum fugiat fugiat. Veniam occaecat ullamco voluptate qui minim non dolore ex. Amet velit aliquip aliqua Lorem duis cupidatat.`, icon: 'motorcycle'},
    { id: 5, createdAt: Date.now(),  name: 'Stres', excerpt: `Commodo reprehenderit reprehenderit ad reprehenderit labore et velit consectetur minim ea.`, icon: 'opacity'},
  ];

const mockArticles: Article[] = [
  { id: 1, summary: mockSummaries[0], content: 'Voluptate quis exercitation amet duis. Sunt labore tempor culpa ex veniam anim in minim minim dolore ullamco fugiat id esse. Enim fugiat anim ex laborum magna laborum consequat est esse fugiat. Amet pariatur cupidatat consequat ad anim do ullamco sunt velit nisi sint mollit exercitation.'},
  { id: 2, summary: mockSummaries[1], content: 'Consequat aute ex Lorem anim eu. Labore exercitation esse sint in et eu nisi magna officia id non. Esse aliquip incididunt eiusmod veniam deserunt anim sunt elit do dolor. Veniam magna sit magna eu consectetur amet officia minim esse incididunt. Id minim nisi incididunt nostrud culpa velit.'},
  { id: 3, summary: mockSummaries[2], content: 'Duis incididunt commodo adipisicing cupidatat do anim pariatur commodo excepteur sit elit adipisicing. Minim fugiat qui commodo ea ut anim elit mollit dolor ullamco do. Eu excepteur sit sit do nostrud officia quis et cillum. Ullamco nisi do qui sint elit ea cupidatat qui amet non. Dolore occaecat dolore in sint eiusmod in nulla eiusmod est irure.'},
  { id: 4, summary: mockSummaries[3], content: 'Consequat aliqua do fugiat in fugiat ea mollit veniam commodo elit esse voluptate eu. Est consequat consectetur laborum nisi nostrud non dolor adipisicing reprehenderit qui laboris. Velit adipisicing ut ea mollit ad est excepteur consectetur ea enim nulla nisi id. Ut id incididunt ex excepteur.'},
  { id: 5, summary: mockSummaries[4], content: 'Voluptate quis exercitation amet duis. Sunt labore tempor culpa ex veniam anim in minim minim dolore ullamco fugiat id esse. Enim fugiat anim ex laborum magna laborum consequat est esse fugiat. Amet pariatur cupidatat consequat ad anim do ullamco sunt velit nisi sint mollit exercitation.'},
];

@Injectable()
export class ArticlesService {

  constructor() { }

  getSummaries(): Observable<ArticleSummary[]> {
    return Observable.of(mockSummaries).delay(200);
  }


  getArticle(id: number): Observable<Article> {
    return Observable.of(
      mockArticles.find(a => a.id === id)
    ).delay(200);
  }
}
