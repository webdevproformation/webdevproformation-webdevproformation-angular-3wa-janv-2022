import { Component, OnInit } from '@angular/core';
import { PartageService} from "../partage.service";
import { mergeMap , pluck } from "rxjs/operators";

@Component({
  selector: 'app-resultat',
  template: '<pre>{{ p | json }}</pre>',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  public p : string = "";
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
      .subscribe( (reponse :any) => this.p = reponse )
    
  }
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// https://jsonplaceholder.typicode.com/posts
}
