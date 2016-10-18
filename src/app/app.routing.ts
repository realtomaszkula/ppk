import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'authorities', loadChildren: 'app/authorities/authorities.module#AuthoritiesModule' },
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
