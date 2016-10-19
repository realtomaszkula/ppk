import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Article } from '../interfaces';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Observable<Article>;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private articlesService: ArticlesService ) {
   }

  ngOnInit() {
    this.route.params.forEach(params => {
      const id = +params['id'];
      this.article = this.articlesService.getArticle(id);
      console.log(id)
      console.log(this.article)
    });
  }

}
