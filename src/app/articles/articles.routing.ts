import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: ':id', component: ArticleDetailComponent }
]

export const articlesRouting: ModuleWithProviders = RouterModule.forChild(routes);
