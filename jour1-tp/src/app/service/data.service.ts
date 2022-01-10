import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable , of} from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  protected urlService : string ; 
  constructor(protected httpService : HttpClient) { 
    this.urlService = ""
  }
  public getData(){
    //this.httpService.get<Array<T>>(this.urlService);
    return this.httpService.get(this.urlService) as Observable<Array<T>>;
    // les deux lignes sont équivalentes
  }

  public getOne( idArticle : number ){
    //return this.httpService.get<T>(`${this.urlService}/${idArticle}`)
    // rdv 11h16 bon café !!
    return (this.httpService.get(`${this.urlService}/${idArticle}`) as Observable<T>)
  }
}
