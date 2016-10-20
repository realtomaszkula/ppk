import { Component, OnInit } from '@angular/core';

import { Question } from '../interfaces';

@Component({
  selector: 'app-sensation-seeking',
  templateUrl: './sensation-seeking.component.html',
  styleUrls: ['./sensation-seeking.component.scss']
})
export class SensationSeekingComponent implements OnInit {

  title = 'Sensation seeking';

  questionPairs: [Question, Question][] = [
    [
        new Question('Chiciałbym mieć pracę, która wymaga dużo podróżowania.',	1), 
        new Question('Wolałbym mieć pracę w jednym miejscu.',	0)
    ],
    [
      new Question('W rześki, chłodny dzień czuję się orzeżwiony i pełen animuszu.',	1),
      new Question('Kiedy na dworze jest zmino marze o tym, aby wejść do środka.',	0)
    ],
    // [
    //   new Question('Jestem znudzony oglądanie tych samych, znanych od dawna rzeczy.',	1),
    //   new Question('Lubię komfort przebywania z tymi samymi od lat, dobrze znanymi ludźmi.',	0)
    // ],
    // [
    //   new Question('Wolałbym żyć w społeczeństwie idealnym, w którym każdy czuje się bezpieczny, pewny i szczęśliwy.',	0),
    //   new Question('Zdecydowanie wole żyć w dzisiejszych niespokojnych czasach.',	1)
    // ],
    // [
    //   new Question('Lubię czasami robić rzeczy, które są nieco przerażające.',	1),
    //   new Question('Człowiek rozsądny unika czynności lub zachowań, które są niebezpieczne.',	0)
    // ],
    // [
    //   new Question('Nie chciałbym poddać się hipnozie.',	0),
    //   new Question('Chciałbym się przekonać, jak to jest zostać zahipnotyzowanym.',	1)
    // ],
    // [
    //   new Question('Najważniejszym celem w życiu jest życ pełnią życia i doświadczać wszystkiego, co tylko możliwe.',	1),
    //   new Question('Najważniejszy celem w życiu jest odnalezienie spokoju i szczęścia.',	0)
    // ],
    // [
    //   new Question('Chciałbym spróbowac skoków na spadochronie.',	1),
    //   new Question('Za nic w świecie nie chciałbym próbowac skakać z samolotu, ani na spadochronie, ani bez.',	0)
    // ],
    // [
    //   new Question('Do zimnej wody wchodzę stopniowo, dając sobie czas na oswojenie się z niską temperaturą.',	0),
    //   new Question('Lubię nurkować lub skakać prosto do oceanu lub chłodnego basenu.',	1)
    // ],
    // [
    //   new Question('Kiedy jadę na urlop, preferuję dobry pokój i wygodne łóżko.',	0),
    //   new Question('Kiedy jadę na urlop, wybieram namiot i biwakowanie na świeżym powietrzu.',	1)
    // ],
    // [
    //   new Question('Wolę ludzi ekspresyjnych, otwarcie wyrażających swoje emocje, nawet jeśli bywają nieco niezrównoważeni.',	1),
    //   new Question('Wolę ludzi spokojnych i opanowanych, nieulegających nastrojom.',	0)
    // ],
    // [
    //   new Question('Dobry obraz powinien szokowac lub wstrząsać, pobudzając zmysly.',	1),
    //   new Question('Dobry obraz powinien wywoływać poczucie spokoju i bezpieczeństwa.',	0)
    // ],
    // [
    //   new Question('Motocykliści muszą mieć jakąś nieuświadomioną potrzebę narażania się na niebezpieczeństwo.',	1),
    //   new Question('Chciałbym przejechac się motocyklem i umieć go prowadzić.',	)
    // ],  
    ]


  constructor() { }

  ngOnInit() {
  }


}

