import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators , FormArray } from "@angular/forms";

@Component({
  selector: 'app-form3',
  template: `
    <h2>exemple3 : générer un formulaire depuis la class via FormArray</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <input type="text" (keydown.enter)="addSujet(sujet)" #sujet>
      </div>
      <div *ngFor="let sujet of sujets()">
        {{ sujet.value }}
      </div>
      <input type="submit">
    </form>`
})
export class Form3Component implements OnInit {
  public addSujet(sujet : any){
    //console.log(value)
    (this.form.get("sujets") as FormArray).push( new FormControl(sujet.value))
    sujet.value = "";
    console.log(this.form)
    // permet d'ajouter une nouveau champ dans sujets
  }
  public sujets (){
    if(this.form.get('sujets') ){ 
      return (this.form.get('sujets') as any )['controls']
    }
  }
  public onSubmit(){
    console.log(this.form.value);
  }
  public form : FormGroup = new FormGroup({
    sujets : new FormArray([])
  })

  constructor() { }

  ngOnInit(): void {
  }

}
