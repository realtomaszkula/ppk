import { Component, OnInit } from '@angular/core';

import { Question, ResultScale} from '../interfaces';

@Component({
  selector: 'app-peronality-types',
  template: `
    <app-radio-test [title]="title"
      [optionsForRadio]="optionsForRadio"
      [resultScale]="resultScale"
      [instructions]="instructions"
      [questions]="questions"
    ></app-radio-test>
  `,
  styleUrls: ['./peronality-types.component.scss']
})
export class PeronalityTypesComponent implements OnInit {

  constructor() { }

  title = 'Personality Types';

  instructions: string[] = [
    'Ea aute exercitation labore anim dolore.',
    'Ea et Lorem magna exercitation nisi ea in nostrud magna ad ut laboris. Aute mollit tempor ipsum enim incididunt pariatur est qui exercitation ea Lorem anim Lorem sint. Consequat proident laborum ea sit et amet aliqua occaecat eu. Irure in elit duis voluptate dolor exercitation dolor.',
    'Aliquip officia enim Lorem culpa officia nulla. Exercitation aliquip consectetur reprehenderit ipsum occaecat dolore ad enim nisi. Ad velit enim laboris anim exercitation adipisicing do tempor. Nisi officia dolore reprehenderit consequat enim officia irure veniam quis occaecat irure irure deserunt sit. In consequat nulla ullamco excepteur tempor consectetur adipisicing exercitation dolor dolor fugiat cupidatat enim eiusmod. Aute amet amet in pariatur voluptate excepteur mollit sunt. Quis reprehenderit enim commodo fugiat laboris id.'
  ]

  optionsForRadio = [0, 1];

  questions: Question[] = [
    new Question('Czy w codziennej rozmowie dobitnie akcentujesz ważne słowa?'),
    new Question('Czy zwykle jesz i chodzisz szybko?'),
    new Question('Czy uważasz, że dzieci należt wychowywać w duchu rywalizacji?'),
    new Question('Czy irytuje Cię widok czlowiekja pracującego powoli?'),
    new Question('Czy w rozmowie ponaglasz innych, by powiedzieli wreszcie o co chodzi?'),
    new Question('Czy utknęcie w korku lub oczekiwanie na stolik w restauracji odczuwasz jak poważną przykrość?'),
    new Question('Czy słuchając innych, nadal myślisz o swoich problemach i sprawach?'),
    new Question('Czy usłujesz jednocześnie wykonywać różne czynnosci: np. jeść i golić się, przeglądać notatki, prowadząc samochód?'),
    new Question('Czy podczas urlopu starasz się być na bieżąco ze swoją pracą?'),
    new Question('Czy starasz się sprowadzać rozmowę na tematy dotyczące Ciebie i Twoich spraw?'),
    new Question('Czy masz poczucie winy, poświęcając czas na wypoczynek?'),
    new Question('Czy jesteś tak pochłonięty pracą, że przestałeś zauważać wystrój biura i krajobraz mijany po drodze do pracy?'),
    new Question('Czy dążysz raczej do zdobycia coraz większej ilości rzeczy niż do rozwoju własnej kreatywności i zajęcia się życiem towarzyskim?'),
    new Question('Czy usiłujesz załatwić coraz więcej spraw w coraz mniejszym czasie?'),
    new Question('Czy zawsze przychodzisz na spotkanie punktualnie?'),
    new Question('Czy zaciskasz pięści, machasz nimi lub stosujesz podobne gesty w celu podkreślenia swojego zdania?'),
    new Question('Czy swoje osiągnięcia zawszięczasz zdolności do szybkiego wykonywania pracy?'),
    new Question('Czy czujesz, że sprawy należy załatwiać zaraz i to szybko?'),
    new Question('Czy stale próbujesz znależć coraz wydajniejsze sposoby wykonywania czynności?'),
    new Question('Czy grasz po to, by zwyciężyć - raczej nie dla samej przyjemności gry?'),
    new Question('Czy często przerywasz innym?'),
    new Question('Czy denerwujesz się, gdy inni się spóźniaja?'),
    new Question('Czy odchodzisz od stołu natychmiast po skończeniu posiłku?'),
    new Question('Czy czujesz się zabiegany?'),
    new Question('Czy jesteś niezadowolony ze swojego obecnego poziomu umiejętności i kompetencji?')
  ];

  resultScale: ResultScale[] = [
    new ResultScale({ from: 0, to: 10 }, 'Normal Behavior'),
    new ResultScale({ from: 9, to: this.questions.length - 1 }, 'Danger'),
  ]


  ngOnInit() {
  }

}


