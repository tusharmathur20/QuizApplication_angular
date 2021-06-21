import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
 
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
