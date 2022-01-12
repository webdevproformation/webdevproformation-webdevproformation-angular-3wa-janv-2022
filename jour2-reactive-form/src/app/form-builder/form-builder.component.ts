import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  template: `
    <h2>form builder</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="sujet">
      <div formGroupName="info">
          <input type="text" formControlName="competence">
          <input type="text" formControlName="niveau">
      </div>
      <div formArrayName="images">
        <div *ngFor="let image of getImages(); index as id">
          <input type="file" [formControlName]="id">
        </div>
      </div>
      <input type="submit" value="Envoyer">
    </form>
  `
})
export class FormBuilderComponent implements OnInit {
  public form ; 

  public getImages(){
    if(this.form.get("images")){
      return (this.form.get("images") as any) ["controls"]
    }
  }
  public onSubmit(){
    console.log(this.form.value);
  }
  constructor(fb : FormBuilder) {
    this.form = fb.group({
      sujet : fb.control(null),
      info : fb.group({
          competence : fb.control(null),
          niveau : fb.control(null),
      }),
      images : fb.array([ [] , [] , [] , [] , [] , [] ]) // formArray
    })
  }
  ngOnInit(): void {
  }

}
