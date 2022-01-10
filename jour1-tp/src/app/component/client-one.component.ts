import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../service/user"
import { Observable, pipe } from 'rxjs';
// tree shake
import { mergeMap } from "rxjs/operators";

@Component({
  selector: 'client-one',
  template: `
  <h2>{{user?.name}}</h2>
  <img [src]="'https://thispersondoesnotexist.com/image?v='+user?.id" alt="">
  <ul>
    <li>{{ user?.phone }}</li>
    <li>{{ user?.email }}</li>
  </ul>
  `,
  styles: [`img{
    width:200px;
  }`]

})
export class ClientOneComponent implements OnInit {
  public user : User | undefined;
  constructor(private route : ActivatedRoute , private userService : UserService) { }

  ngOnInit(): void {
    (this.route.params as Observable<{id : number}>)
      .pipe( 
        mergeMap( reponse => this.userService.getOne(reponse.id) )
       )
      .subscribe( user => this.user = user )
  }

}
