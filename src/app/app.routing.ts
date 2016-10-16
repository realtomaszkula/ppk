import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
