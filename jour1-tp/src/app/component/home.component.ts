import { Component, OnInit } from '@angular/core';
import { PostService } from "../service/post.service";
import {Post} from "../service/post"
import {trigger , animate , transition , keyframes, style} from "@angular/animations"
import { apparitionArticle } from "../animation"
@Component({
  selector: 'home',
  template: `
    <div @apparitionArticle *ngIf="show">
      <article *ngFor="let article of articles" class="element">
      <h2 @bouceIn>{{ article.title }}</h2>
      <p>{{ article.body }}</p>
      <a [routerLink]="['page', article.id , article.title]">lire la suite ... </a>
      </article>
    </div>
  `,
  animations : [
    // rdv 9h00 demain !!!! 
    apparitionArticle ,
    trigger("bouceIn" , [
      transition("void => *" , [
        animate(1000 , keyframes([
          style({ offset : 0 , opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)"}),
          style({ offset : 0.2 , transform: "scale3d(1.1, 1.1, 1.1)"}),
          style({ offset : 0.4 , transform: "scale3d(0.9, 0.9, 0.9)"}),
          style({ offset : 0.6 , opacity: 1 ,
            transform: "scale3d(1.03, 1.03, 1.03)"} ),
          style({ offset : 0.8 , transform: "scale3d(0.97, 0.97, 0.97)"}),
          style({ offset : 1 , opacity: 1 , 
            transform: "scale3d(1, 1, 1)"}),
        ]))
      ])
    ])
  ],
  styles: [`
    div{
      display:grid;
      gap : 20px;
      grid-template-columns : repeat(3, 1fr);
    }
  `]
})
export class HomeComponent implements OnInit {
  public articles : Array<Post> = [];
  public show : boolean = false;
  constructor( private data : PostService) { }
  ngOnInit(): void {
    this.data.getData().subscribe( articles => {
      this.articles = articles 
      this.show = true;
    }
    );
  }
}
