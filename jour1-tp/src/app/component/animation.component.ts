import { Component, OnInit } from '@angular/core';
import { trigger , style , transition , animate } from "@angular/animations";

@Component({
  selector: 'animation',
  template: `
    <fade></fade>
    <h1 @animation2>titre</h1>
    <p @animation1>
      animation works!
    </p>
    <h2>toto</h2>
  `,
  animations : [
    trigger( "animation1", [
      //style({ color : "red" , fontSize : "30px"}), // format js camelCase
      transition("void => *" , [
        style({ color : "red" , fontSize : "30px"}),
        animate( 2000 , style({color : "black" , fontSize: "16px"}) )
      ])
    ] ),
    trigger("animation2" , [
      transition( "void => *" , [ 
        style({ transform : "translateX(300px)"}),
        //animate( 1000 , style({transform : "translateX(0px)"}) )
        animate( 1000 )
      ] )
    ])
  ],
  styles: [
    `h2{
      transform: translateX(200px) 
      /* 40px droite par rapport à sa position initiale */
      /* -40px gauche par rapport à sa position initiale */
    }`
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
