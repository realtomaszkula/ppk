import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { articlesRouting }from './articles.routing';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesService } from './articles.service';
import { BurnoutComponent } from './burnout/burnout.component';
import { InstructionsComponent } from './shared/instructions/instructions.component';
import { ResultTableComponent } from './shared/result-table/result-table.component';
import { RadioQuestionsComponent } from './shared/radio-questions/radio-questions.component';
import { MentalToughnessComponent } from './mental-toughness/mental-toughness.component';
import { RadioTestComponent } from './shared/radio-test/radio-test.component';


@NgModule({
  providers: [ ArticlesService ],
  imports: [
    FormsModule,
    CommonModule,
    articlesRouting
  ],
  declarations: [ ArticleListComponent, ArticleDetailComponent, BurnoutComponent, InstructionsComponent, ResultTableComponent, RadioQuestionsComponent, MentalToughnessComponent, RadioTestComponent]
})
export class ArticlesModule { }
