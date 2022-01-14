import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'home',
  template: `
    <article *ngFor="let article of data.getArticles()">
      <h2>{{article.titre | uppercase }}</h2>
      <h3>{{article.titre | titlecase }}</h3>
      <p>prix d'achat {{ article.prix | currency:"EUR":"symbol":"2.2-2":"fr"}}</p> <!-- 10,20 € --> 
      <p [innerHTML]="article.contenu | lasuite"></p> 
      <a routerLink="/connexion">lire la suite ...</a>
      <p>{{ article.dt_publication | date:"dd/MM/yyyy"}}</p>
      <p>{{ article.dt_publication | date:"longDate"}}</p>
      <p>{{ article.dt_publication | date:"longDate":"CEST":"fr"}}</p>
    </article>
    <!-- <img src="assets/mario.jpg" alt="" style="width:100%"> -->
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor(public data : DataService ) { }

  ngOnInit(): void {
  }

}
