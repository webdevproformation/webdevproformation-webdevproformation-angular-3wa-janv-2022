import { Component, OnInit } from '@angular/core';
import { trigger , transition , style, animate , state } from "@angular/animations";

@Component({
  selector: 'fade',
  template: `
    <h2 @slideInOut (click)="onClickTitle()" *ngIf="showTitle">titre</h2>
    <input (keypress)="onPress($event , info)" #info>
    <ul>
      <li *ngFor="let d of data" (click)="onClick(d)" @fadeInOut>{{d}}</li>
    </ul>
  `,
  animations : [
    trigger("slideInOut" , [
      state("void",style({transform : "translateX(300px)"})),
      transition("void <=> *" , [
        animate(700)
      ])
    ]),
    trigger( "fadeInOut" , [ 
        transition( "void => *" , [
          style({opacity : 0}),
          animate(1000)
        ] ),
        transition( "* => void" , [
          animate(1000 , style({opacity : 0}))
        ] )
    ] )
  ],
  styles: [
  ]
})
export class FadeComponent implements OnInit {
  public showTitle : boolean = true
  public onClickTitle(){
    this.showTitle = false; 
  }

  public data : Array<string> = ["pomme" , "poire", "banane"];
  public onClick( d : string ){
    const index = this.data.indexOf(d)
    this.data.splice(index,1) ; 
  }
  // écrit dans le champ uniquement quand j'utilise la touche Enter
  public onPress($event : KeyboardEvent , info : HTMLInputElement){
    if($event.code == "Enter"){
      this.data.push(info.value);
      info.value = "";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
