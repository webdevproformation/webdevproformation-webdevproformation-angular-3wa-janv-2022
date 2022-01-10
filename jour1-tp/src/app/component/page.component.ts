import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { mergeMap } from "rxjs/operators";
import { PostService } from "../service/post.service";
import { Post } from '../service/post';
@Component({
  selector: 'page',
  template: `
    <article>
      <h1>{{article?.title}}</h1>
      <img [src]="'https://source.unsplash.com/random/1200x400?v='+article?.id" [alt]="article?.title">
      <p>{{ article?.body }}</p>
    </article>
  `,
  styles: [
  ]
})
export class PageComponent implements OnInit {
  constructor( private activePage : ActivatedRoute , private data : PostService) { }
  public article : Post | undefined ;  
  ngOnInit(): void {
    // récupérer l'id de la page appelée
    /* (this.activePage.params as Observable<{id : number , title : string}>) .subscribe( 
      reponse => {
        console.log(reponse.id) // { id: "2", title: "qui est esse" }
        this.data.getOne( reponse.id ).subscribe( article => console.log(article))
      }
    ) */
    (this.activePage.params as Observable<{id : number , title : string}>)
    .pipe(
      mergeMap( reponse =>  this.data.getOne( reponse.id ))
    )
    .subscribe( article => this.article = article  )
  }

}
