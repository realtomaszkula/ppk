import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ArticlesService } from '../articles.service';
import {ArticleSummary} from '../interfaces';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articlesSummaries: Observable<ArticleSummary[]>;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
      this.articlesSummaries = this.articlesService.getSummaries()
  }

  navigateTo(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
