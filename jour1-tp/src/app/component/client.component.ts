import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { User } from "../service/user";

@Component({
  selector: 'client',
  template: `
    <div *ngFor="let user of users">
      <h2>{{user.name}}</h2>
      <ul>
        <li>{{ user.phone }}</li>
        <li>{{ user.email }}</li>
        <li><a [routerLink]="['/client', user.id]">plus d'info ...</a> </li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class ClientComponent implements OnInit {
  public users : Array<User> =[] ;
  constructor(private userService : UserService) { }
  ngOnInit(): void {
    this.userService.getData().subscribe( users => this.users = users)
  }
}
