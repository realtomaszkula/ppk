import { Component, OnInit } from '@angular/core';

import { Question, ResultScale, QuestionWithWeight} from '../interfaces';

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

  questions: QuestionWithWeight[] = [
    new QuestionWithWeight('Śmierć współmałżonka',100),
    new QuestionWithWeight('Rozwód',	73),
    new QuestionWithWeight('Separacja',	65),
    new QuestionWithWeight('Kara więzienia',	63),
    new QuestionWithWeight('Śmierć członka bliskiej rodziny',	63),
    new QuestionWithWeight('Zranienie lub choroba',	53),
    new QuestionWithWeight('Małżeństwo',	50),
    new QuestionWithWeight('Zwolnienie z pracy',	47),
    new QuestionWithWeight('Pogodzenie się z małżonkiem',	45),
    new QuestionWithWeight('Przejście na emeryture',	45),
    new QuestionWithWeight('Chroba luz wyzdrowienie chłonka rodziny',	44),
    new QuestionWithWeight('Ciąża',	40),
    new QuestionWithWeight('Kłopoty z seksem',	39),
    new QuestionWithWeight('Urodzenie lub adopcja dziecka',	39),
    new QuestionWithWeight('Zmiana pracy',	39),
    new QuestionWithWeight('Zmiana poziomu zamożności',	38),
    new QuestionWithWeight('Śmierć bliskiego przyjaciela',	37),
    new QuestionWithWeight('Zmiana charaktery pracy',	36),
    new QuestionWithWeight('Zmiana liczby kłótni małżeńskiech',	35),
    new QuestionWithWeight('Obiążenie znacznym kerdytem',	30),
    new QuestionWithWeight('Odmowa udzie;lenia kreddytu',	30),
    new QuestionWithWeight('Nowe zxakresy odpowiedzialnosci w pracy',	29),
    new QuestionWithWeight('Opuszczenie domy przez syna lub corke',	29),
    new QuestionWithWeight('Kłopoty z powinowatymi lub teściami',	29),
    new QuestionWithWeight('Wybitne osiągnięcia osobniste]',	28),
    new QuestionWithWeight('Podjęcie lub zaprzestanie pracy przez małżonka',	26),
    new QuestionWithWeight('Rozpoczęcie lub zakończenia szxkoły',	26),
    new QuestionWithWeight('Zmiana warunków życia',	25),
    new QuestionWithWeight('Zakwestionowanie własnyuch nawyków ',	24),
    new QuestionWithWeight('Kłopoty z szefem',	23),
    new QuestionWithWeight('Zmiana czasu lub warnunków pracy ',	20),
    new QuestionWithWeight('Zmiana miejsca zamieszkania',	20),
    new QuestionWithWeight('Zmiana szkoły',	20),
    new QuestionWithWeight('Zmiana sposobów wypoczywania',	19),
    new QuestionWithWeight('Zmiana praktyk religijnych',	19),
    new QuestionWithWeight('Zmiana nawyków towarzyskich',	18),
    new QuestionWithWeight('Wzięcie niewielkiego kredytu',	17),
    new QuestionWithWeight('Zmiana długości snu',	16),
    new QuestionWithWeight('Zmiana liczby spotkan rodzinnych',	15),
    new QuestionWithWeight('Zmiana sposobu odżywiania',	15),
    new QuestionWithWeight('Wakacje',	13),
    new QuestionWithWeight('Święta (np. Bożego Narodzenia)',	12),
    new QuestionWithWeight('Niewielkie wykroczenie przeciw prawu',	11)
  ];


  constructor() { }

  ngOnInit() {
  }

}


