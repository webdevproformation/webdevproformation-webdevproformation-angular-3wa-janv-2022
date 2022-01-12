import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { map , tap } from "rxjs/operators";

@Component({
  selector: 'app-exo3',
  template: `<div>
    <h2>exo 3</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()"> 
        <input type="text" formControlName="nom">
        <div formGroupName="competences">
          <input type="text" formControlName="langage">
          <input type="text" formControlName="niveau">
        </div>
        <input type="submit">
    </form>
    <ul>
      <li *ngFor="let d of data">{{d.nom }} {{d.competences.langage}} {{d.competences.niveau}}</li>
    </ul>
  </div>`
})
export class Exo3Component implements OnInit {
  public form ;
  public onSubmit(){
    const resultat = this.form.value;
    this.db.list("/exo3").push(resultat)
    this.form.reset();
  }
  public data : Array<any>= []

  constructor(fb : FormBuilder , private db : AngularFireDatabase) {
    this.form = fb.group({
      nom : [],
      competences : fb.group({
        langage : [],
        niveau : []
      })
    })
   }

  ngOnInit(): void {
    this.db.list("/exo3").snapshotChanges().pipe(
      tap(console.log), // [{}, {}]
      map(
        (reponse : any) => reponse.map( (compte :any) => Object.assign({} , compte.payload.val()) )
        ),
      tap(console.log), // [{ nom : '...' , competences : {}}, {}]
    )
    .subscribe( reponse => this.data = reponse )
  }

}
