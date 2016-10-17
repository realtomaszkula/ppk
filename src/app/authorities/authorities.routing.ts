import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthoritiesComponent } from './authorities.component';
import { AuthoritiesDetailComponent } from './authorities-detail/authorities-detail.component';

const routes: Routes = [
  { 
    path: 'authorities',
    component: AuthoritiesComponent,
    children: [
      { path: '', redirectTo: 'ronald-regan', pathMatch: 'full' },
      { path: ':name', component: AuthoritiesDetailComponent }

  ] },

]

export const authoritiesRouting: ModuleWithProviders = RouterModule.forChild(routes);
