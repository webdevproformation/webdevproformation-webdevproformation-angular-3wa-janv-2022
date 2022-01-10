import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Accueil</a></li>
        <li><a routerLink="/contact">Nous contacter</a></li>
        <li><a routerLink="/client">Client</a></li>
        <li><a routerLink="/login">Connexion</a></li>
      </ul>
    </nav>
  `,
  styles: [
      `:host{ /* sélecteur qui permet de sélectionner la balise qui contient votre vue*/
        padding: 0;
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
