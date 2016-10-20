import { Component, OnInit } from '@angular/core';

import { QuestionWithModifier, ResultScale, OptionsForRadio} from '../interfaces';

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
    { machine: 1, human: 'TAK'},
    { machine: 0, human: 'NIE'}
  ])

  resultScale: ResultScale[] = [
    new ResultScale({ from: 0, to: 8 }, 'Wewnatrzstresowa osoba'),
    new ResultScale({ from: 9, to: 16 }, 'Normal'),
    new ResultScale({ from: 17, to: 40 }, 'Zewnatrzstresowa osoba'),
  ]

  questions: QuestionWithModifier[] = [
    new QuestionWithModifier('Czy uważasz, żę większość problemów rozwiązuje się sama, jeśli po prostu zostawić sprawy swojemu biegowi?'),
    new QuestionWithModifier('Czy uważasz, że mozsesz sprawić, by nie złapało Cię przeziębienie?', true),
    // new QuestionWithModifier('Czy uważasz, że niektórzy ludzie to urodzeni szczęściaże?'),
    // new QuestionWithModifier('Czy otrzymywanie dobrych stopni lub ocen wiele dla Ciebie znaczy?'),
    // new QuestionWithModifier('Czy często "dostaje" Ci się za coś, co nie było Twoją winą?'),
    // new QuestionWithModifier('Czy uważasz, że jeżeli ktoś wystarczająco  pilnie i dużo się uczy, to może zdać każdy egzamin?', true),
    // new QuestionWithModifier('Czy masz poczucie, że na ogół nie warto się starać, bo i tak najczęściej wszystko wychodzi nie tak jak powinno?'),
    // new QuestionWithModifier('Czy masz poczucie, że jeżeli dzień dobrze się zaczął, to reszta upłynie równie pozytywnie, niezależnie do tego, co zrobisz?'),
    // new QuestionWithModifier('Czy uważasz, że w większości przypadków rodzice sluchają, co ich dzieci maja do powiedzenia?', true),
    // new QuestionWithModifier('Czy wierzysz w siłę sprawczą dobrych chęci?', true),
    // new QuestionWithModifier('Czy z reguły nie widzisz powodu, dla którego zostałeś ukarany?'),
    // new QuestionWithModifier('Czy trudno Ci wpłynąc na zmiane zdania swoich znajomych?'),
    // new QuestionWithModifier('Czy sądzisz, że doping kibiców bardziej niż szczęście przyczynie sie do wygranej zespołu?', true),
    // new QuestionWithModifier('Czy Twoim zdaniem nakłonienie rodziców do zmieny zdanie na jakikolwiek temat bylo prawie niemożliwe?'),
    // new QuestionWithModifier('Czy uważasz, że rodzice powinni pozwalać dzieciom na podejmowanie własnych decyzji?', true),
    // new QuestionWithModifier('Czy masz poczycie, że kiedy coś Ci nie wyzszło, niewiele możesz zrobić by to naprawić?'),
    // new QuestionWithModifier('Czy sądzisz, że niektórzy ludzie to po prostu urodzeni sportowcy?'),
    // new QuestionWithModifier('Czy większość Twoich rówieśników jest silniejsza od Ciebie?'),
    // new QuestionWithModifier('Czy uważaszm ż heden z najlepszych sposobów radzenia sobie z problemami to po prostu o nich nie myśleć?'),
    // new QuestionWithModifier('Czy jesteś przekonany, że sam wybierasz swoich przyjaciół?', true),
    // new QuestionWithModifier('Czy, znajdując czterolistną koniczynę, wierzysz, że przyniesie Ci szczęście?'),
    // new QuestionWithModifier('Cz często miałeś poczucie, że odrobienie zadania domowego lub jego brak miało istotny wpływ na otrzymywane prezz Ciebie oceny?', true),
    // new QuestionWithModifier('Czy uważasz, że niewiele możesz zdzialać w sytuacji, kiedy któryś z Twoich znajomych złości się na Ciebie?'),
    // new QuestionWithModifier('Czy kiedykolwiek nosiłeś przy sobie talizman lub maskotkę "na szczęście"?'),
    // new QuestionWithModifier('Czy wierzysz, że to, czy jesteś lubiany lub nie, zależy od tego, jak postępujesz?', true),
    // new QuestionWithModifier('Czy rodzice zwykle pomagali Ci, kiedy ich o to prosiłeś?', true),
    // new QuestionWithModifier('Czy masz poczucie, że zwykle inni wściekają się na Ciebie bez powodu?', ),
    // new QuestionWithModifier('Czy na ogół masz wrażenie, żę dzięki temu co zrobiłeś dzisiaj, możesz zmienić to, co wydaży się jutro?', true),
    // new QuestionWithModifier('Czy wieżysz, że jeżeki coś złego ma sie stać, to i tak się stanie, i nic na to nie poradzisz?', ),
    // new QuestionWithModifier('Czy uważsz, że każdy może dopiąć swego, jeżeki tylko usilnie próbuje?', true),
    // new QuestionWithModifier('Czy na ogół masz wrażęnie, że w domu nie ma sensu próbować postawić na swoim?', ),
    // new QuestionWithModifier('Czy masz poczucie, że dobre rzeczy sa wynikiem cięzkiej pracy?', true),
    // new QuestionWithModifier('Jeżeli ktoś chce być Twoim wrogiem, czy masz poczycie, że niewiele możesz zrobić, aby to zmienić?'),
    // new QuestionWithModifier('Czy uważasz, że łatwo nakłonić znajomych do zrobienie czegoś, co chcesz, by zrobili?', true),
    // new QuestionWithModifier('Czy często masz wrażenie, że w domu nie liczą się z Twoim zdaniem w kwestii tego, co jest na obiad?'),
    // new QuestionWithModifier('Czy uważasz, że niewiele możesz poradzic na to, że ktoś Cię nie lubi?'),
    // new QuestionWithModifier('Czy, będąc w szkole, miałeś poczucie, że przykładanie się do nauki jest praktycznie bezcelowe, bo inni są po prostu mądrzejsi i bardziej bystrzy niż Ty?'),
    // new QuestionWithModifier('Czy należysz do osób, które wierzą, że planując przyszłość, czynimy ją lepszą?', true),
    // new QuestionWithModifier('Czy na ogół masz wrażenie, że wpływ Twojego zdania na rodzinne decyzje jest raczej niewielki?'),
    // new QuestionWithModifier('Czy sądzisz, że lepiej być sprytnym niż szczęściażem?', true)
  ]

}


