import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { User } from "../service/user";
import { trigger, transition , style, keyframes , animate  } from "@angular/animations";

@Component({
  selector: 'client',
  template: `
    <div *ngFor="let user of users">
      <h2 @flip>{{user.name}}</h2>
      <ul>
        <li>{{ user.phone }}</li>
        <li>{{ user.email }}</li>
        <li><a [routerLink]="['/client', user.id]">plus d'info ...</a> </li>
      </ul>
    </div>
  `,
  // https://github.com/animate-css/animate.css/blob/main/source/flippers/flip.css
  animations : [
    trigger("flip" , [
      transition( "void => *" , [
        animate(1000 , keyframes([
          style({ transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)" , offset : 0 }),
          style({transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)" , offset : 0.4 }),
          style({ transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)rotate3d(0, 1, 0, -170deg)" , offset : 0.5}), 
          style({transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)}" , offset : 1 })
        ]))
      ] )
    ])

  ],
  styles: [
    `:host{
      display:grid;
      gap : 20px;
      grid-template-columns : repeat(5, 1fr);
    }`
  ]
})
export class ClientComponent implements OnInit {
  public users : Array<User> =[] ;
  constructor(private userService : UserService) { }
  ngOnInit(): void {
    this.userService.getData().subscribe( users => this.users = users)
  }
}
// 14h02 bon appétit !!! 
