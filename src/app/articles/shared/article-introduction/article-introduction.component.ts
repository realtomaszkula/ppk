import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-introduction',
  templateUrl: './article-introduction.component.html',
  styleUrls: ['./article-introduction.component.scss']
})
export class ArticleIntroductionComponent implements OnInit {

  _readTime: number;

  @Input() title: string;
  @Input() set readTime(value) {
    this._readTime = Math.floor(value);
  }

  get readTime() {
    return this._readTime;
  }

  constructor() { }

  ngOnInit() {
  }

}
