import { Injectable } from '@angular/core';
import { Subject , BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PartageService {

  public data$ = new BehaviorSubject<string>("vodka") // partager des informations entre n'importe quelle composant 

  constructor(private http : HttpClient) { }

  public getCocktails(textRecherche : string){
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    if(textRecherche){
      url += textRecherche ; 
    } else {
      url += "margarita" ;
    }
    return this.http.get(url)
  }

}
