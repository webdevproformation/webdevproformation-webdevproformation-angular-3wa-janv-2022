import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../service/auth.service";

@Component({
  selector: 'connexion',
  template: `
    <div>
      <h1>Accéder au back office de l'application</h1>
      <section>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="fill">
            <mat-label>email : </mat-label>
            <input matInput formControlName="email">
          </mat-form-field>
          <mat-form-field appearance="fill" class="ml-1">
            <mat-label>password : </mat-label>
            <input matInput formControlName="password">
          </mat-form-field>
          <div class="text-center">
            <button mat-flat-button color="primary" >Connexion</button>
          </div>
        </form>
      </section>
    </div>
  `,
  styles: [
    `section{
      display:flex ;
      justify-content:center;
      margin-top:40px;
    }
    .text-center{
      text-align:center;
    }
    .ml-1{
      margin-left : 10px;
    }`
  ]
})
export class ConnexionComponent implements OnInit {
  public form
  public onSubmit(){
    const {email , password} = this.form.value; // {email : "" , password : ""}
    this.auth.login(email , password);
    this.form.reset()
   // this.auth.login(this.form.value.email , this.form.value.password);
  }

  constructor( fb : FormBuilder , private auth : AuthService) {
    this.form = fb.group({
      email : [],
      password : []
    })

    /* const etudiant = {
      nom : "Alain" ,
      email : "alain@yahoo.fr",
      parler : function(){ console.log("je parle !") }
    }
    // Avant 2016 => Avant version 6 de javascript 

    console.log(etudiant.nom)
    etudiant.parler(); 

    // ES6 de javascript => destructuration  
    // prendre propriété ou une méthode cachée dans un objet
    const { email } = etudiant ;
    console.log(email);  
    const { nom , parler } = etudiant ;
    console.log(nom);
    parler(); */
    /* const complexe = {
      adresse : {
        rue : "75 rue de Paris",
        cp : 75000,
        geolocalisation : {
          lat : 12345,
          long : 67890
        }
      }
    }
    console.log(complexe.adresse.geolocalisation.lat)
    console.log(complexe.adresse.geolocalisation.long)
    const {lat , long} = complexe.adresse.geolocalisation ;
    console.log(lat)
    console.log(long) */

    // extract($_POST)
  }

  ngOnInit(): void {
  }
// 10h46 bon café @ toute suite !! 
}
