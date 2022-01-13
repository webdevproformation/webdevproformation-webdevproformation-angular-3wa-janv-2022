import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FirebaseService } from "../service/firebase.service"

@Component({
  selector: 'form-client',
  template: `
    <h2>ajouter un nouveau client</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-form-field app appearance="outline">
        <mat-label>Prénom</mat-label>
        <input matInput formControlName="prenom">
      </mat-form-field>
      <mat-form-field app appearance="outline">
        <mat-label>nom</mat-label>
        <input matInput formControlName="nom">
      </mat-form-field>
      <button mat-flat-button color="primary">Ajouter</button>
    </form>
  `,
  styles: [
    `form{
      display: flex;
      align-items:baseline; 
    }
    form> *+*{
      margin-left:20px;
    }`
  ]
})
export class FormComponent implements OnInit {
  public form
  public onSubmit(){
    this.fire.add(this.form.value).then( () => {
      this.form.reset(); 
    })
  }
  constructor( fb : FormBuilder , private fire : FirebaseService) {
    this.form = fb.group({
      prenom : [],
      nom : []
    })
   }

  ngOnInit(): void {
  }

}
