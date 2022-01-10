import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService<Post> {
  constructor( http : HttpClient) {
    super(http);
    this.urlService = "https://jsonplaceholder.typicode.com/posts";
   }
}
