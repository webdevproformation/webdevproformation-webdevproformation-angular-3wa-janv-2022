import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu.component';
import { HomeComponent } from './front/home.component';
import { ConnexionComponent } from './front/connexion.component';
import { GestionComponent } from './back/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConnexionComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
