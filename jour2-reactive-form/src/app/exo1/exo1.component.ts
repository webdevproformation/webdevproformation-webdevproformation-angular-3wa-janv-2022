import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators, FormArray , AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-exo1',
  template: `
    <h2>Exo 1</h2>
    <form [formGroup]="form"  (ngSubmit)="onSubmit()">
      <div>
        <input type="text" formControlName="nom" placeholder="votre nom">
      </div> 
      <div formGroupName="adresse">
        <input type="text" formControlName="rue" placeholder="rue">
        <input type="text" formControlName="cp" placeholder="cp">
        <input type="text" formControlName="ville" placeholder="ville">
      </div> 
      <div>
        <input type="text" #competence placeholder="compétence à ajouter"> 
        <button (click)="add(competence)">Ajouter une compétence</button> 
        <ul>
          <li *ngFor="let competence of getCompetences()">
              {{competence.value}}
              <button (click)="suppr(competence)">supprimer</button> 
          </li>
        </ul>
      </div> 
      <input type="submit">
    </form>
  `,
  styles : [
    `form> div{
      margin-bottom: 20px;
    }
    input[type="text"]{
      margin-right: 10px; 
    }`
  ]
})
export class Exo1Component implements OnInit {
  public suppr(competence :AbstractControl){
    const form = this.form.get("competences") as FormArray;
    const index = form.controls.indexOf(competence)
    form.removeAt(index); 
  }

  public add(competence : HTMLInputElement){
    //if(competence.value.length >= 2){
      (this.form.get("competences") as FormArray).push( new FormControl(competence.value , [ Validators.minLength(2) ] ) )
    competence.value = "";
    // }
  }

  public getCompetences(){
    if(this.form.get('competences')){
        return (this.form.get('competences') as any )['controls']
    }
  }

  public onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
    }
  }
  public form = new FormGroup({
    nom : new FormControl(null , Validators.minLength(2) ),
    adresse : new FormGroup({
      rue :new FormControl(null , Validators.minLength(2) ),
      cp :new FormControl(null , Validators.minLength(2) ),
      ville : new FormControl(null , Validators.minLength(2) )
    }),
    competences : new FormArray([])
  })
  constructor() { }
  ngOnInit(): void {
  }
}
