import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <nav>
      <h1>{{ title }}</h1>
      <ul>
        <li><a routerLink="/" routerLinkActive="actif" [routerLinkActiveOptions]="{exact:true}">Accueil</a></li>
        <li><a routerLink="/connexion" routerLinkActive="actif">Connexion</a></li>
        <li><a routerLink="/admin" routerLinkActive="actif">Gestion</a></li>
        <li><a routerLink="#">Déconnexion</a></li>
      </ul>
    <nav>
  `,
  styles: [
    `nav, ul{
      display: flex;
      align-items:center; 
    }
    ul{
      list-style:none;
    }
    ul>*+*{
      margin-left:20px;
    }`
  ]
})
export class MenuComponent implements OnInit {
  @Input() title : string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
