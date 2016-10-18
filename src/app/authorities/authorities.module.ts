import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthoritiesComponent } from './authorities/authorities.component';
import { AuthoritiesDetailComponent } from './authorities-detail/authorities-detail.component';
import { authoritiesRouting } from './authorities.routing';


@NgModule({
  imports: [
    CommonModule,
    authoritiesRouting
  ],
  declarations: [AuthoritiesComponent, AuthoritiesDetailComponent]
})
export class AuthoritiesModule { }
