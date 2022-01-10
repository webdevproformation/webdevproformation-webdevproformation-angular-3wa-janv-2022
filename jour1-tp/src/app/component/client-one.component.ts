import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router  } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../service/user"
import { Observable, of } from 'rxjs';
// tree shake
import { mergeMap , catchError } from "rxjs/operators";

@Component({
  selector: 'client-one',
  template: `
  <div *ngIf="user">
    <h2>{{user?.name}}</h2>
    <img [src]="'https://thispersondoesnotexist.com/image?v='+user?.id" alt="">
    <ul>
      <li>{{ user?.phone }}</li>
      <li>{{ user?.email }}</li>
    </ul>
    <a routerLink="/">revenir vers l'accueil</a>
  </div>`,
  styles: [`img{
    width:200px;
  }`]
})
export class ClientOneComponent implements OnInit {
  public user : User | undefined;
  constructor(
      private route : ActivatedRoute , 
      private userService : UserService ,
      private router : Router) { }

  ngOnInit(): void {
    (this.route.params as Observable<{id : number}>)
      .pipe( 
        mergeMap( reponse => this.userService.getOne(reponse.id) ),
        catchError( ex  => {
          this.router.navigate(["/not-found"])
          return of(ex)
        })
       )
      .subscribe( 
        user => this.user = user
       )
  }

}
