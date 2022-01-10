import { Component, OnInit } from '@angular/core';
import { trigger , style , transition , animate } from "@angular/animations";

@Component({
  selector: 'animation',
  template: `
    <p @animation1>
      animation works!
    </p>
  `,
  animations : [
    trigger( "animation1", [
      //style({ color : "red" , fontSize : "30px"}), // format js camelCase
      transition("void => *" , [
        style({ color : "red" , fontSize : "30px"}),
        animate( 2000 , style({color : "black" , fontSize: "16px"}) )
      ])
    ] )
  ],
  styles: [
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
