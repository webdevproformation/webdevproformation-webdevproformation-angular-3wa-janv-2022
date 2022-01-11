import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";

@Component({
  selector: 'form1',
  template: `
    <h2>exemple 1</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="votre prénom" class="form-control" formControlName="prenom" >
      <input type="text" placeholder="votre nom" class="form-control my-4" formControlName="nom">
      <input type="submit" class="btn btn-outline-success">
    </form>`
})
export class Form1Component implements OnInit {
  public onSubmit(){
    console.log(this.form.valid)
    if(this.form.valid){
      console.log(this.form.value)
    }
  }

  private validation = [
    Validators.minLength(5) , 
    Validators.maxLength(100),
    Validators.required,
    // interdire les espaces dans les champs 
  ];

  public form = new FormGroup({
    prenom : new FormControl(null , this.validation),
    nom : new FormControl("Tata" , this.validation)
  })
  constructor() { }

  ngOnInit(): void {
  }

}