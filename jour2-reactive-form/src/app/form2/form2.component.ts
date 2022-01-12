import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";

@Component({
  selector: 'app-form2',
  template: `
      <h1>exemple 2 : regrouper des champs d'un formulaire</h1>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input formControlName="nom" type="text" placeholder="votre nom">
        <div formGroupName="adresse">
          <input type="text" formControlName="rue" placeholder="rue">
          <input type="text" formControlName="cp" placeholder="cp">
          <input type="text" formControlName="ville" placeholder="ville">
        </div> 
        <input type="submit">
      </form>`
})
export class Form2Component implements OnInit {
  public onSubmit(){
    console.log(this.form.value ); 
  }
  public form : FormGroup = new FormGroup({
    nom : new FormControl(),
    adresse : new FormGroup({
      rue : new FormControl(),
      cp : new FormControl(),
      ville : new FormControl()
    })
  })
  constructor() { }

  ngOnInit(): void {
  }

}
