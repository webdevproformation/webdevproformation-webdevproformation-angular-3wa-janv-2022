import { Component, OnInit } from '@angular/core';
import { PartageService} from "../partage.service";
import {mergeMap , pluck , map} from "rxjs/operators"

@Component({
  selector: 'app-total',
  template: "<p>nombre de cocktails {{ nombre }}</p>"
})
export class TotalComponent implements OnInit {
  public nombre : number = 0
  constructor(private service : PartageService) { }
  ngOnInit(): void {
    this.service.data$
    .pipe(
      mergeMap( texteSaisi => this.service.getCocktails(texteSaisi) ),
      pluck("drinks") ,
      map( (tableau : any) => {
        if(tableau){
          return tableau.length;
        }
        return 0;
      } )
    )
    .subscribe( nombre =>{
        this.nombre = nombre ;
    } )
  }

}
