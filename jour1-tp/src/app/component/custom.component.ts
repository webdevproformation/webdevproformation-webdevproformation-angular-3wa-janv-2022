import { Component, OnInit } from '@angular/core';
import {animationPersonnalisee} from "../animation";

@Component({
  selector: 'custom',
  template: `
    <img src="https://source.unsplash.com/random/1200x400" alt="" [@animationPersonnalisee]="etat">
    <div>
      <button (click)="onClickBtn1()">Action 1</button>
      <button (click)="onClickBtn2()">Action 2</button>
    </div>  
  `,
  styles: [
  ],
  animations : [
    animationPersonnalisee
  ]
})
export class CustomComponent implements OnInit {

  public etat : string = ""

  public onClickBtn1(){
    this.etat = "droite";
  }

  public onClickBtn2(){
    this.etat = "gauche";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
