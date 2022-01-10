import { Component, OnInit } from '@angular/core';
import { PostService } from "../service/post.service";
import {Post} from "../service/post"
@Component({
  selector: 'home',
  template: `
    <article *ngFor="let article of articles">
      <h2>{{ article.title }}</h2>
      <p>{{ article.body }}</p>
      <a [routerLink]="['page', article.id , article.title]">lire la suite ... </a>
    </article>
  `,
  styles: [`
    :host{
      display:grid;
      gap : 20px;
      grid-template-columns : repeat(3, 1fr);
    }
  `]
})
export class HomeComponent implements OnInit {
  public articles : Array<Post> = [];
  constructor( private data : PostService) { }
  ngOnInit(): void {
    this.data.getData().subscribe( articles => 
      this.articles = articles );
  }
}
