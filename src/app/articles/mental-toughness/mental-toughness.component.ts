import { Component, OnInit } from '@angular/core';

import { Question, ResultScale, OptionsForRadio} from '../interfaces';

@Component({
  selector: 'app-mental-toughness',
  template: `
    <app-radio-test [title]="title"
      [optionsForRadio]="optionsForRadio"
      [resultScale]="resultScale"
      [instructions]="instructions"
      [questions]="questions"
    ></app-radio-test>
  `,
  styleUrls: ['./mental-toughness.component.scss']
})
export class MentalToughnessComponent {

  constructor() { }

  title = 'Mental Toughness';

  instructions: string[] = [
    'Nulla in pariatur et deserunt non magna nulla mollit est qui eu.',
    'Sunt sint ut laboris occaecat irure proident consequat tempor officia aute in.',
    'Ea amet proident sunt fugiat laboris amet excepteur commodo adipisicing Lorem ipsum exercitation dolore id.'
  ]

  optionsForRadio: OptionsForRadio = new OptionsForRadio([
    { machine: 0, human: 'TAK'},
    { machine: 1, human: 'NIE'}
  ])

  resultScale: ResultScale[] = [
    new ResultScale({ from: 0, to: 8 }, 'Wewnatrzstresowa osoba'),
    new ResultScale({ from: 9, to: 16 }, 'Normal'),
    new ResultScale({ from: 17, to: 40 }, 'Zewnatrzstresowa osoba'),
  ]

  questions: Question[] = [
    new Question('Czy uważasz, żę większość problemów rozwiązuje się sama, jeśli po prostu zostawić sprawy swojemu biegowi?'),
    new Question('Czy uważasz, że mozsesz sprawić, by nie złapało Cię przeziębienie?'),
    new Question('Czy uważasz, że niektórzy ludzie to urodzeni szczęściaże?'),
    new Question('Czy otrzymywanie dobrych stopni lub ocen wiele dla Ciebie znaczy?'),
    new Question('Czy często "dostaje" Ci się za coś, co nie było Twoją winą?'),
    new Question('Czy uważasz, że jeżeli ktoś wystarczająco  pilnie i dużo się uczy, to może zdać każdy egzamin?'),
    new Question('Czy masz poczucie, że na ogół nie warto się starać, bo i tak najczęściej wszystko wychodzi nie tak jak powinno?'),
    new Question('Czy masz poczucie, że jeżeli dzień dobrze się zaczął, to reszta upłynie równie pozytywnie, niezależnie do tego, co zrobisz?'),
    new Question('Czy uważasz, że w większości przypadków rodzice sluchają, co ich dzieci maja do powiedzenia?'),
    new Question('Czy wierzysz w siłę sprawczą dobrych chęci?'),
    new Question('Czy z reguły nie widzisz powodu, dla którego zostałeś ukarany?'),
    new Question('Czy trudno Ci wpłynąc na zmiane zdania swoich znajomych?'),
    new Question('Czy sądzisz, że doping kibiców bardziej niż szczęście przyczynie sie do wygranej zespołu?'),
    new Question('Czy Twoim zdaniem nakłonienie rodziców do zmieny zdanie na jakikolwiek temat bylo prawie niemożliwe?'),
    new Question('Czy uważasz, że rodzice powinni pozwalać dzieciom na podejmowanie własnych decyzji?'),
    new Question('Czy masz poczycie, że kiedy coś Ci nie wyzszło, niewiele możesz zrobić by to naprawić?'),
    new Question('Czy sądzisz, że niektórzy ludzie to po prostu urodzeni sportowcy?'),
    new Question('Czy większość Twoich rówieśników jest silniejsza od Ciebie?'),
    new Question('Czy uważaszm ż heden z najlepszych sposobów radzenia sobie z problemami to po prostu o nich nie myśleć?'),
    new Question('Czy jesteś przekonany, że sam wybierasz swoich przyjaciół?'),
    new Question('Czy, znajdując czterolistną koniczynę, wierzysz, że przyniesie Ci szczęście?'),
    new Question('Cz często miałeś poczucie, że odrobienie zadania domowego lub jego brak miało istotny wpływ na otrzymywane prezz Ciebie oceny?'),
    new Question('Czy uważasz, że niewiele możesz zdzialać w sytuacji, kiedy któryś z Twoich znajomych złości się na Ciebie?'),
    new Question('Czy kiedykolwiek nosiłeś przy sobie talizman lub maskotkę "na szczęście"?'),
    new Question('Czy wierzysz, że to, czy jesteś lubiany lub nie, zależy od tego, jak postępujesz?'),
    new Question('Czy rodzice zwykle pomagali Ci, kiedy ich o to prosiłeś?'),
    new Question('Czy masz poczucie, że zwykle inni wściekają się na Ciebie bez powodu?'),
    new Question('Czy na ogół masz wrażenie, żę dzięki temu co zrobiłeś dzisiaj, możesz zmienić to, co wydaży się jutro?'),
    new Question('Czy wieżysz, że jeżeki coś złego ma sie stać, to i tak się stanie, i nic na to nie poradzisz?'),
    new Question('Czy uważsz, że każdy może dopiąć swego, jeżeki tylko usilnie próbuje?'),
    new Question('Czy na ogół masz wrażęnie, że w domu nie ma sensu próbować postawić na swoim?'),
    new Question('Czy masz poczucie, że dobre rzeczy sa wynikiem cięzkiej pracy?'),
    new Question('Jeżeli ktoś chce być Twoim wrogiem, czy masz poczycie, że niewiele możesz zrobić, aby to zmienić?'),
    new Question('Czy uważasz, że łatwo nakłonić znajomych do zrobienie czegoś, co chcesz, by zrobili?'),
    new Question('Czy często masz wrażenie, że w domu nie liczą się z Twoim zdaniem w kwestii tego, co jest na obiad?'),
    new Question('Czy uważasz, że niewiele możesz poradzic na to, że ktoś Cię nie lubi?'),
    new Question('Czy, będąc w szkole, miałeś poczucie, że przykładanie się do nauki jest praktycznie bezcelowe, bo inni są po prostu mądrzejsi i bardziej bystrzy niż Ty?'),
    new Question('Czy należysz do osób, które wierzą, że planując przyszłość, czynimy ją lepszą?'),
    new Question('Czy na ogół masz wrażenie, że wpływ Twojego zdania na rodzinne decyzje jest raczej niewielki?'),
    new Question('Czy sądzisz, że lepiej być sprytnym niż szczęściażem?')
  ]

}


