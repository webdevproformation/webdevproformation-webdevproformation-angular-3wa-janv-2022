import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './back/gestion.component';
import { ConnexionComponent } from './front/connexion/connexion/connexion.component';
import { HomeComponent } from './front/home.component';
import { NotAutorizedComponent } from './front/not-autorized.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path : "", component:HomeComponent},
  {path:  "connexion" , component:ConnexionComponent},
  {path : "admin" , component : GestionComponent , canActivate : [ AuthGuardService ] } ,
  // route protégée
  {path : "erreur-401" , component : NotAutorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
