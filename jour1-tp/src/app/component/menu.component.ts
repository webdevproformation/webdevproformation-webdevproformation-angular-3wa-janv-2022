import { Component, OnInit } from '@angular/core';
import { menuEffet } from "../animation"
// rdv 15h27 => animation avec Angular 
@Component({
  selector: 'menu',
  template: `
    <nav>
      <button (click)="onClick()">{{ etat }}</button>
      <ul [@menuEffet]="etat">
        <li><a routerLink="/" routerLinkActive="actif" [routerLinkActiveOptions]="{exact:true}">Accueil</a></li>
        <li><a routerLink="/contact" routerLinkActive="actif">Nous contacter</a></li>
        <li><a routerLink="/client" routerLinkActive="actif">Client</a></li>
        <li><a routerLink="/animation" routerLinkActive="actif">Animation</a></li>
        <li><a routerLink="/animation-suite" routerLinkActive="actif">Animation Suite</a></li>
        <li><a routerLink="/custom" routerLinkActive="actif">Animation personnalisée</a></li>
        <li><a routerLink="/login" routerLinkActive="actif">Connexion</a></li>
      </ul>
    </nav>`,
    animations: [menuEffet],
  styles: [
      `:host{ /* sélecteur qui permet de sélectionner la balise qui contient votre vue*/
        padding: 0;
      }
      .actif{
        color:red; 
      }
      ul{
        display: flex ;
        list-style:none;
        padding: 0;
      }
      ul > * + *{ /* sélectionner tous les li sauf le 1er qui sont les enfants directs de ul */
        margin-left : 20px;
      }
      *{ /* TOUTES LES BALISES */
        color : blue;
      }
      nav { /* sélectionner le ul qui est enfant direct de nav */
        display: flex;
      }
      button{
        margin-right:20px;
        width:80px;
      }
      li + li { /* sélection un li qui est après un li */

      }`
  ]
})
export class MenuComponent implements OnInit {

  public onClick(){
    if(this.etat == "masquer"){
      this.etat = "afficher"
    } else {
      this.etat = "masquer"
    }
  }

  public etat : string = "masquer"

  constructor() { }

  ngOnInit(): void {
  }

}
