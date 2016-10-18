import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { articlesRouting }from './articles.routing';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  imports: [
    CommonModule,
    articlesRouting
  ],
  declarations: [ ArticleListComponent, ArticleDetailComponent]
})
export class ArticlesModule { }
