import { Component, OnInit } from '@angular/core';
// rdv 15h27 => animation avec Angular 
@Component({
  selector: 'menu',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/" routerLinkActive="actif" [routerLinkActiveOptions]="{exact:true}">Accueil</a></li>
        <li><a routerLink="/contact" routerLinkActive="actif">Nous contacter</a></li>
        <li><a routerLink="/client" routerLinkActive="actif">Client</a></li>
        <li><a routerLink="/animation" routerLinkActive="actif">Animation</a></li>
        <li><a routerLink="/animation-suite" routerLinkActive="actif">Animation Suite</a></li>
        <li><a routerLink="/login" routerLinkActive="actif">Connexion</a></li>
      </ul>
    </nav>`,
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
      nav > ul{ /* sélectionner le ul qui est enfant direct de nav */

      }
      li + li { /* sélection un li qui est après un li */

      }`
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
