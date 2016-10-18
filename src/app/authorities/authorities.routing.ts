import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthoritiesComponent } from './authorities/authorities.component';
import { AuthoritiesDetailComponent } from './authorities-detail/authorities-detail.component';

const routes: Routes = [
    { path: '', component: AuthoritiesComponent, children: [
      { path: '', redirectTo: 'jp2', pathMatch: 'full' },
      { path: ':name', component: AuthoritiesDetailComponent}
    ]}
]

export const authoritiesRouting: ModuleWithProviders = RouterModule.forChild(routes);
