import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logged$ = new Subject<boolean>()
  constructor( private auth :AngularFireAuth ) { }
  public login(email : string, password :string){
    this.auth.signInWithEmailAndPassword(email , password)
    .then( 
        () => {
            this.logged$.next(true);
            localStorage.setItem("isLogged", email)
            console.log("vous êtes connecté !")
            //{ isLogged : "email" }
      }
    )
    .catch(ex => console.log(ex.message))
  }
  public loggout(){
    this.logged$.next(false);
    localStorage.removeItem("isLogged");
  }
}
