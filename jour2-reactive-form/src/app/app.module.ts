import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
// identifiants 
import { environment } from "../environments/environment"; // 

// npm i firebase @angular/fire 
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database"

// rdv 13h45 bon appetit !!!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Exo1Component } from './exo1/exo1.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { Exo2Component } from './exo2/exo2.component';
import { FormAddComponent } from './form-add/form-add.component';
import { Exo3Component } from './exo3/exo3.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Exo1Component,
    FormBuilderComponent,
    Exo2Component,
    FormAddComponent,
    Exo3Component,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
