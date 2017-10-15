import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Question1Component } from './question-1/question-1.component';
import { routes } from './app.router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Question3Component } from './question-3/question-3.component';
import { Question4Component } from './question-4/question-4.component';
import { Question5Component } from './question-5/question-5.component';
import { Question7Component } from './question-7/question-7.component';
import { Question8Component } from './question-8/question-8.component';
import { Question2Component } from './question-2/question-2.component';
import { Question6Component } from './question-6/question-6.component';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    IntroductionComponent,
    NavigationComponent,
    Question3Component,
    Question4Component,
    Question5Component,
    Question7Component,
    Question8Component,
    Question2Component,
    Question6Component
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
