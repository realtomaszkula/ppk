import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';
import { CareerComponent } from './career/career.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'career', component: CareerComponent }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
