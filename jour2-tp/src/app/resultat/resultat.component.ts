import { Component, OnInit } from '@angular/core';
import { PartageService} from "../partage.service";
import { mergeMap , pluck } from "rxjs/operators";
import { Observable } from 'rxjs';

/* interface interfaceCocktail {
  strDrink
} */

@Component({
  selector: 'app-resultat',
  template : `
    <article *ngFor="let cocktail of p">
      <h2>{{ cocktail.strDrink}}</h2>
      <img [src]="cocktail.strDrinkThumb" [alt]="cocktail.strDrink">
      <p>{{ cocktail.strInstructions }}</p>
      <ul [innerHTML]="ingrediants(cocktail)" ></ul>
    </article>
  `,
  styles: [`
    :host{
      display:grid;
      grid-template-columns: repeat(3,1fr);
      gap : 20px;
    }
    img{
      max-width:100%;
    }
  `]
})
export class ResultatComponent implements OnInit {

  public p : any;
  public ingrediants(cocktail : any) :string{
    let resultat : string = "";
    for(let i = 1 ; i <=15 ; i++){
      if(cocktail["strIngredient"+i] && cocktail["strMeasure"+i]){
        resultat += `<li>${cocktail["strIngredient"+i]} -- ${cocktail["strMeasure"+i]}</li>`
      }
    }
    return resultat
  }

  constructor(private service : PartageService) { }

  ngOnInit(): void {
    /* this.service.data$.subscribe( infoSaisie => {
      this.service.getCocktails(infoSaisie).subscribe( reponse => console.log(reponse) )
    } 
    );
      13h31 !! bon appétit !!! 
    */
    this.service.data$ // subject 
      .pipe(
        mergeMap( infoSaisie =>  this.service.getCocktails(infoSaisie)),
        // {drinks : [] , date : "1234556"}
        pluck( "drinks") // 
      )
      .subscribe( (reponse : any)  => this.p = reponse )
    
  }
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// https://jsonplaceholder.typicode.com/posts
}
