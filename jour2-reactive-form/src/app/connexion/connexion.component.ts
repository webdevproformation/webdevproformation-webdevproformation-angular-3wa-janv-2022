import { Component, OnInit } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-connexion',
  template: `
    <h2>authentification via Firebase Auth</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="email" placeholder="email" formControlName="email">
      <input type="text" placeholder="password" formControlName="password">
      <input type="submit">
    </form>
  `
})
export class ConnexionComponent implements OnInit {
  public form ;
  public onSubmit(){
    const {email , password} = this.form.value ;
    this.auth.signInWithEmailAndPassword(email.trim() , password.trim()) 
      .then( rep => console.log(rep) )
  }
  constructor(fb : FormBuilder, private auth : AngularFireAuth) {
    this.form = fb.group({
      email : [],
      password : []
    })
   }

  ngOnInit(): void {
  }

}
