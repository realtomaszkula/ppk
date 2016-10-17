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
  person: Person;

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
