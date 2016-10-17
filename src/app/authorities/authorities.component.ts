import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-authorities',
  templateUrl: './authorities.component.html',
  styleUrls: ['./authorities.component.css']
})
export class AuthoritiesComponent implements OnInit {
  
  authorities: { name: string, url: string }[] =[
    { name: 'Jan Pawel II', url: './jp2' },
    { name: 'Ronald Regan', url: './ronald-regan' },
    { name: 'Margaret Thatcher', url: './margaret-thatcher' },
    { name: 'Andrzej Szczeklik', url: './andrzej-szczeklik' },
    { name: 'Witold Kiezun', url: './witold-kiezun' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
