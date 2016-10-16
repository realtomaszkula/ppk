import { Component, OnInit } from '@angular/core';

interface Career {
  years: string,
  content: string
}

interface CareerItem {
  icon: string, 
  title: string,
  achievements: Career[]
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proffessionalBackground: CareerItem = {
    title: "Professional Background", 
    icon: "home", 
    achievements: [
      { years: "present - 2009", content: "General Practice AB in Sweden - General Practitioner"},
      { years: "2009 - 2003", content: "Achima Care in Älmhult and Jämjö Vårdcentral in Sweden - Trainee Doctor - General Practitioner "},
      { years: "2003 - 1996", content: "Family Doctor Practice in Stroza near Cracow  in Poland - General Practitioner and General Manager"},
      { years: "1996 - 1993", content: "SmithKline Beecham Pharmaceuticals- Warsaw in Poland - Medical Representative and Project Manager "},
      { years: "1993 - 1988", content: "Bonifrater`s Hospital in Cracow in Poland - Trainee Doctor in Surger"},
    ]
  };

  educationalAchievements: CareerItem = {
    title: "Educational Achievements", 
    icon: "home", 
    achievements: [
        { years: "2014", content: "Norwegian specialization - General Practitioner" },
        { years: "2008", content: "Swedish specializaton - General Practitioner " },
        { years: "1999", content: "Master of Business Administration according to the program of University of Teesside  " },
        { years: "1994", content: "Polish specialization in Family Medicine" },
        { years: "1992", content: "Polish specialization in General Surgery" },
        { years: "1988", content: "Doctor of Medicine - University in Craco" }
    ]
  };

  backgrounds: CareerItem[] = [ this.proffessionalBackground, this.educationalAchievements];


}
