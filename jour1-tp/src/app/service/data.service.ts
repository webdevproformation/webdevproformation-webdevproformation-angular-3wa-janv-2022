import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './post';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlService : string = "https://jsonplaceholder.typicode.com/posts"; 
  constructor(private httpService : HttpClient) { }
  public getData(){
    //this.httpService.get<Array<Post>>(this.urlService);
    return this.httpService.get(this.urlService) as Observable<Array<Post>>;
    // les deux lignes sont équivalentes
  }

  public getOne( idArticle : number ){
    //return this.httpService.get<Post>(`${this.urlService}/${idArticle}`)
    // rdv 11h16 bon café !!
    return this.httpService.get(`${this.urlService}/${idArticle}`) as Observable<Post>
  }
}
