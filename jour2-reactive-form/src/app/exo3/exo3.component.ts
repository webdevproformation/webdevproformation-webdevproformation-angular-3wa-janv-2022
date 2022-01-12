import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { map , tap } from "rxjs/operators";
import { AuthService } from '../auth.service';

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
      <li *ngFor="let d of data">
        <button (click)="onClickSuppr(d.key)" *ngIf="show">suppr</button>
        <button (click)="onClickModif(d.key , nom , langage , niveau)" *ngIf="show">modifier</button>
          <input [value]="d.nom" #nom>
          <input [value]="d.competences.langage" #langage>
          <input [value]="d.competences.niveau" #niveau>
      </li>
    </ul>
  </div>`
})
export class Exo3Component implements OnInit {
  public form ;
  public show : boolean = false;

  public onClickModif(id : string , nom : HTMLInputElement , langage : HTMLInputElement , niveau : HTMLInputElement){
    console.log(id, nom.value , langage.value , niveau.value); 
    this.db.list("/exo3").update(id , {
      nom : nom.value ,
      competences : {
        langage :langage.value ,
        niveau : niveau.value
      }
    })
  }

  public onClickSuppr(id : string){
      this.db.list("/exo3").remove(id); 
  }
  public onSubmit(){
    const resultat = this.form.value;
    this.db.list("/exo3").push(resultat)
    this.form.reset();
  }
  public data : Array<any>= []

  constructor(
      fb : FormBuilder , 
      private db : AngularFireDatabase,
      private logged : AuthService) {
    this.form = fb.group({
      nom : [],
      competences : fb.group({
        langage : [],
        niveau : []
      })
    })
   }
  ngOnInit(): void {
    this.logged.isLogged$.subscribe( reponse  => 
      {
        if(reponse == "logged"){
          this.show = true;
          console.log(`AuthService ${reponse}`)
        }
      }
    )
    if(localStorage.getItem("isLogged") == "yes"){
      this.show = true; 
    }

    this.db.list("/exo3").snapshotChanges().pipe(
      tap(console.log), // [{}, {}]
      map(
        (reponse : any) => reponse.map( 
            (compte :any) => Object.assign({} , compte.payload.val() , { key : compte.key }) 
          )
        ),
      tap(console.log), // [{ nom : '...' , competences : {}}, {}]
    )
    .subscribe( reponse => this.data = reponse ); 
  }
 // supprimer et modifier => 
 // rdv 15h32 bon café @ toute suite !! 
}
