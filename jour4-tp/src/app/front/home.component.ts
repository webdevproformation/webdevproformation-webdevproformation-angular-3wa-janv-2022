import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'home',
  template: `
    <h1 [appTitre]="true">Titre</h1>
    <div>
      <button appBtn></button>
    </div>
    <img alt="" appImage>
    <p appParagraph></p>
    <article *ngFor="let article of data.getArticles()">
      <h2>{{article.titre | uppercase | titre:article.contenu }}</h2>
      <h3>{{article.titre | titlecase | titre:article.contenu }}</h3>
      <p>prix d'achat {{ article.prix | currency:"EUR":"symbol":"2.2-2":"fr"}}</p> <!-- 10,20 € --> 
      <!-- 10h45 bon café @ toute -->
      <p [innerHTML]="article.contenu | lasuite"></p> 
      <a routerLink="/connexion">lire la suite ...</a>
      <p>{{ article.dt_publication | date:"dd/MM/yyyy"}}</p>
      <p>{{ article.dt_publication | date:"longDate"}}</p>
      <p>{{ article.dt_publication | date:"longDate":"CEST":"fr"}}</p>
    </article>
    <!-- <img src="assets/mario.jpg" alt="" style="width:100%"> -->
    <!-- <article *ngFor="let article of posts$ | async">
      <h2>{{article.title | titre: article.body}}</h2>
      <p>{{ article.body  }}</p>
    </article> -->
    <!--<article *ngFor="let article of articleComplet$ | async">
      <h2>{{article.title | titre: article.body}}</h2>
      <p>{{ article.body  }}</p>
      <h3>commentaires associés :</h3>
      <ul>
        <li *ngFor="let commentaire of article.commentaires">
          {{commentaire.name}} ------ {{ commentaire.body }}
        </li>
      </ul>
    </article>--> 
    <article *ngFor="let user of auteurAvecArticle$ | async">
      <h2>{{user.name}}</h2>
      <p>{{ user.email }}</p>
        <ul>
          <li *ngFor="let article of user.articles">{{ article.title | titre:article.body }}</li>
        </ul>
    </article>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public posts$   : Observable<any>  | undefined ;
  public articleComplet$   : Observable<any>  | undefined ;
  public auteurAvecArticle$   : Observable<any>  | undefined ;
  constructor(public data : DataService ) { 
  }
  ngOnInit(): void {
    this.posts$ = this.data.getArticleFactices()
    this.articleComplet$ = this.data.articleComplete(); 
    this.auteurAvecArticle$ = this.data.articleCompleteAvecAuteur();
  }

}
