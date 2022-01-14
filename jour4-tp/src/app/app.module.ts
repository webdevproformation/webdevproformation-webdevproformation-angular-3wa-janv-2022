import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr , "fr");

import { ConnexionModule } from './front/connexion/connexion/connexion.module'; 
import { CoreModule } from './core/core.module'; 
import { AppRoutingModule } from './app-routing.module';

import { GestionModule } from './back/gestion.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu.component';
import { HomeComponent } from './front/home.component';

import { NotAutorizedComponent } from './front/not-autorized.component';
import { LasuitePipe } from './lasuite.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotAutorizedComponent,
    LasuitePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnexionModule, 
    CoreModule,
    GestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
