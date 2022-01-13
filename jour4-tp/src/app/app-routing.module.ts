import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './back/gestion.component';
import { ConnexionComponent } from './front/connexion.component';
import { HomeComponent } from './front/home.component';

const routes: Routes = [
  {path : "", component:HomeComponent},
  {path:  "connexion" , component:ConnexionComponent},
  {path : "admin" , component : GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
