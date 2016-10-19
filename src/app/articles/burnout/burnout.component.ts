import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
class Question {
  value: number = null;
  constructor(public content: string) {}
}

class ResultScale {
  constructor(public range: {from: number, to: number}, public explanation: string) {}
}

@Component({
  selector: 'app-burnout',
  templateUrl: './burnout.component.html',
  styleUrls: ['./burnout.component.scss']
})
export class BurnoutComponent  {

  active = true;

  instructions: string[] = [
    'Przeanalizuj starannie dziesięć ostanich miesięcy. Czy zauważyłeś jakieś zmiany u siebie czy w swoim otoczeniu?',
    'Odpowiedz, wskazując liczy od 1 (Brak zmian lub bardzo nieliczne) do 5 (liczne zmiany).', 
    'Traktuj wybraną liczbę jako stopień zmian, które zaobserwowałeś.', 
    'Podsumuj i sprawdź wynik.',
  ]

  resultScale: ResultScale[] = [
    new ResultScale({ from: 0, to: 25 }, "Wszysto jest w porządku"),
    new ResultScale({ from: 26, to: 35 }, "Powinieneś zwrócić uwagę na niektóre apekty Twojego życia"),
    new ResultScale({ from: 36, to: 50 }, "Jesteś kandydatem do wypalenia zawodowego"),
    new ResultScale({ from: 51, to: 65 }, "Jesteś w trakcie zawodowego wypalania się"),
    new ResultScale({ from: 66, to: Number.POSITIVE_INFINITY }, "Osągnąłeś punkt krytyczny: Twoje zdrowie psychiczne i fizyczne jest zagrożone!"),
  ]

  result: number;

  questions: Question[] = [
    new Question('Łatwiej się męczysz? Jesteś wyczerpany, bez energii?'),
    new Question('Irytują Cię ci, którzy mówią: "Nie wyglądasz najlepiej od jakiegoś czasu"?'),
    new Question('Pracujesz coraz więcej, ale Twoja wydajność lub sprawność stale maleje?'),
    new Question('Obserwujesz u siebie więcej cynizmu i cuzjesz się pozbawiony złudzeń?'),
    new Question('Odczuwasz często melancholię lub przygnębienie, których nie potrafisz wyjaśnić?'),
    new Question('Zapominasz czasem o spotkaniach, rachunkach, sprawach osobitych?'),
    new Question('Jesteś bardziej poirytowany i reagujesz w sposób wybuchowy wobec swojego otoczenia?'),
    // new Question('Coraz rzadziej widujesz się z rodziną i serdecznymi przyjaciółmi?'),
    // new Question('Jesteś zbyt zajęty, aby regularnie zajmować się np. czytaniem sprawozdań, odpowiadaniem na telefony czy wysyłaniem kartek z życzeniami?'),
    // new Question('Cierpisz na dolegiwości fizyczne(boleści, ból głowy, uporczywy katar)?'),
    // new Question('Czujesz się zagubiony lub przegrany, kiedy kończy się dzień pracy?'),
    // new Question('Masz wrażenie, że opuściły Cię nastroje, takie jka wesołość czy radość?'),
    // new Question('Jesteś niezdolny do zaakceptowania kawałów lub dowcipów na swój temat?'),
    // new Question('Aktywność seksualna wydaje Ci się raczej szkodliwym wysiłkiem niż źródłem przyjemności?'),
    // new Question('Odkrywasz, że nie masz nic do powiedzenia innym ludziom?'),
  ]

  constructor() {}

  onSubmit(f: NgForm) {
    this.result = this.questions.reduce((acc: number, q: Question) => q.value + acc, 0)
  }

  reset() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
