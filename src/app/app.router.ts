import { ModuleWithProviders } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
//import {AppComponent} from './app.component';
import {Question1Component} from './question-1/question-1.component';
import {Question2Component} from './question-2/question-2.component';
import {Question3Component} from './question-3/question-3.component';
import {Question4Component} from './question-4/question-4.component';
import {Question5Component} from './question-5/question-5.component';
import {Question6Component} from './question-6/question-6.component';
import {Question7Component} from './question-7/question-7.component';
import {Question8Component} from './question-8/question-8.component';
import {IntroductionComponent} from './introduction/introduction.component';

export const router: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: IntroductionComponent},
  {path: 'question-1', component:Question1Component},
  {path: 'question-2', component:Question2Component},
  {path: 'question-3', component:Question3Component},
  {path: 'question-4', component:Question4Component},
  {path: 'question-5', component:Question5Component},
  {path: 'question-6', component:Question6Component},
  {path: 'question-7', component:Question7Component},
  {path: 'question-8', component:Question8Component}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
