import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ResultatComponent } from './resultat/resultat.component';
import { TotalComponent } from './total/total.component';
import { BehaviourComponent } from './behaviour/behaviour.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ResultatComponent,
    TotalComponent,
    BehaviourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
