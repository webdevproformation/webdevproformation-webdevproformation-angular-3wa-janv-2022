import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

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
import { TitrePipe } from './titre.pipe';
import { ImageDirective } from './image.directive';
import { ParagraphDirective } from './paragraph.directive';
import { BtnDirective } from './btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotAutorizedComponent,
    LasuitePipe,
    TitrePipe,
    ImageDirective,
    ParagraphDirective,
    BtnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnexionModule, 
    CoreModule,
    GestionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
