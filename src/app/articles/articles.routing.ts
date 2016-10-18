import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ArticleListComponent } from './article-list/article-list.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent }
]

export const articlesRouting: ModuleWithProviders = RouterModule.forChild(routes);
