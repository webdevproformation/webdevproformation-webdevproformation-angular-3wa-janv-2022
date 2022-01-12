import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { map , mergeMap , tap, toArray } from 'rxjs/operators';
import { from } from 'rxjs';


@Component({
  selector: 'app-form-add',
  template: `
    <h2>ajouter des données dans Firebase DB</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="prenom" placeholder="prenom">
      <input type="text" formControlName="nom" placeholder="nom">
      <input type="submit">
    </form>
    <h2>liste des clients</h2>
    <ul>
      <li *ngFor="let r of resultat">{{ r.prenom }} - {{ r.nom }}</li>
    </ul>
    `
})
export class FormAddComponent implements OnInit {
  public form ;
  public onSubmit(){
    if(this.form.valid){
      console.log(this.form.value);
      this.db.list("/clients").push(this.form.value)
      this.form.reset();
      this.resultat = [];
    }
  }
  private validation = [Validators.required , Validators.minLength(2)];
  constructor( fb : FormBuilder , private db : AngularFireDatabase) { 
    this.form = fb.group({
      prenom : [null , this.validation],
      nom : [null , this.validation]
    })
  }
  public resultat : Array<any> = []

  ngOnInit(): void {
    this.db.list("/clients").snapshotChanges()
      .pipe(
        //tap(console.log),
        mergeMap( (reponse :any) => from(reponse) ), // transforme [{}, {}, {}]
        // tap(console.log),
        // {} ,{}, {}
        map( (data :any) => data.payload.val() ), 
        // tap( () => this.resultat = [] )
      )
      .subscribe( reponse => {
        this.resultat.push(reponse) 
      })
  }

}
