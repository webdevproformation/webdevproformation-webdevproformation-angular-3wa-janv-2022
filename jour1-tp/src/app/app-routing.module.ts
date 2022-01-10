import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./component/home.component";
import { ContactComponent} from "./component/contact.component"
import { LoginComponent } from './component/login.component';
import {PageComponent} from "./component/page.component" ;
import { ClientComponent } from './component/client.component';
import { ClientOneComponent } from './component/client-one.component';

// router => url => Composant à afficher
const routes: Routes = [
  {path : "" , component: HomeComponent}, 
  // route pour accéder à la page d'accueil de l'application
  {path : "contact" , component : ContactComponent} ,
  {path : "login" , component : LoginComponent},
  {path : "page/:id/:title" , component: PageComponent },
  {path : "client/:id" , component: ClientOneComponent },
  // l'ordre de déclaration des routes IMPORTANT mettre AVANT client/:id
  {path : "client" , component: ClientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
