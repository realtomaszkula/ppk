import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routing';


import { AuthoritiesModule } from './authorities/authorities.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CareerComponent,
    ContactComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthoritiesModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
