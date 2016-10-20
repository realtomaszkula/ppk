import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { authoritiesMap, Person } from './details';

@Component({
  selector: 'app-authorities-detail',
  templateUrl: './authorities-detail.component.html',
  styleUrls: ['./authorities-detail.component.scss']
})
export class AuthoritiesDetailComponent implements OnInit {

  authorities: Map<string, Person> = authoritiesMap;

  _person: Person;

  name: string;
  content: string[];

  set person(person: Person) {
    this.name = person.name;
    this.content = this.splitIntoArrayOfTwoSentences(person.content);
    this._person = person;
  }

  get person() {
    return this._person;
  }

  private splitIntoArrayOfTwoSentences(content: string): string[] {
   return content.split(/\.\s/).reduce((acc, curr) => {
      const lastItem = acc[acc.length - 1];

      if (Array.isArray(lastItem) && lastItem.length === 1) {
        lastItem.push(curr) 
      } else {
        acc = [ ...acc, [curr]]
      }  
      return acc;
    }, [])
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.forEach((params: Params) => {
      const name = params['name'];
      const person = this.authorities.get(name);
      if (person) this.person = person;
      this.router.navigate['/'];
    })
  }

  ngOnInit() {
  }

}
