import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConnexionModule } from './front/connexion/connexion/connexion.module'; 
import { CoreModule } from './core/core.module'; 
import { AppRoutingModule } from './app-routing.module';

import { GestionModule } from './back/gestion.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu.component';
import { HomeComponent } from './front/home.component';

import { NotAutorizedComponent } from './front/not-autorized.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotAutorizedComponent
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
