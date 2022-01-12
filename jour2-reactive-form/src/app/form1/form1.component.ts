import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";
import { ValidationPersonnalise , superValidation} from "../validation"

@Component({
  selector: 'form1',
  template: `
    <h2>exemple 1</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="votre prénom" class="form-control" formControlName="prenom" >
      <input type="text" placeholder="votre nom" class="form-control my-4" formControlName="nom">
      <input type="text" placeholder="votre adresse" class="form-control my-4" formControlName="adresse">
      <input type="submit" class="btn btn-outline-success">
    </form>
    <p *ngIf="prenom?.errors">{{ erreurPrenom(prenom?.errors)  }}</p>`
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
    ValidationPersonnalise.espaceInterdit
    // interdire les espaces dans les champs 
  ];

  get prenom (){
    return this.form.get("prenom")
  }

  public erreurPrenom (object : any):string{
    if(object != null){
      return object.message
    }
    return "";
  }
  // 

  public form = new FormGroup({
    prenom : new FormControl(null , superValidation(3, 10) , ValidationPersonnalise.isUnique),
    nom : new FormControl("Tata" , superValidation(3, 10)),
    adresse : new FormControl(null , ValidationPersonnalise.isValidAdresse  )
  })
  constructor() { }

  ngOnInit(): void {
  }

}