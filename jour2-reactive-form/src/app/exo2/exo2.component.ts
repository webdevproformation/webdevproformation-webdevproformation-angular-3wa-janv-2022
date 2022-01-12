import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';  

@Component({
  selector: 'app-exo2',
  template: `
      <h2>exo 2</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div>
          <input type="text" formControlName="nom" placeholder="nom">
        </div>
        <div formArrayName="emails">
          <button (click)="add()" >ajouter un nouvel email</button>
          <div *ngFor="let email of getEmails();index as i">
            <input type="email" [formControlName]="i" placeholder="email">
            <button (click)="suppr(email)">supprimer</button>
          </div>
        </div>
        <div>
          <textarea formControlName="commentaire" placeholder="votre commentaire"></textarea>
        </div>
        <input type="submit">
      </form>
  `
})
export class Exo2Component implements OnInit {
  public form
  
  public suppr(email : AbstractControl){
    const form = this.form.get("emails") as FormArray;
    const index = form.controls.indexOf(email) ;
    form.removeAt(index);
  }
  public add(){
    (this.form.get("emails") as FormArray).push( new FormControl()); 
  }
  public onSubmit(){
    console.log(this.form.value);
  }

  public getEmails(){
    if(this.form.get("emails")){
      return (this.form.get("emails") as any)["controls"];
    }
  }
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nom : [] , // fb.control(null)
      emails : fb.array([[]] , Validators.minLength(1)),
      commentaire : [] // fb.control()
    }) 
  }

  ngOnInit(): void {
  }

}
