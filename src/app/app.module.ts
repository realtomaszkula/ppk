import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CareerComponent,
    ContactComponent,
    SliderComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
