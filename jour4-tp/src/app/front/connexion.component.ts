import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connexion',
  template: `
    <div>
      <h1>Accéder au back office de l'application</h1>
      <section>
      <form>
      <mat-form-field appearance="fill">
      <mat-label>email : </mat-label>
      <input matInput>
      </mat-form-field>
      <mat-form-field appearance="fill" class="ml-1">
      <mat-label>login : </mat-label>
      <input matInput>
      </mat-form-field>
      <div class="text-center">
        <button mat-flat-button color="primary" >Connexion</button>
      </div>
      </form>
      </section>
    </div>
  `,
  styles: [
    `section{
      display:flex ;
      justify-content:center;
      margin-top:40px;
    }
    .text-center{
      text-align:center;
    }
    .ml-1{
      margin-left : 10px;
    }`
  ]
})
export class ConnexionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
