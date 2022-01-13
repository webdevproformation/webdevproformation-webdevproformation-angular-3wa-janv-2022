import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../service/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'gestion',
  template: `
    <h1>gestion du site</h1>
    <form-client></form-client>
    <h2>liste des clients</h2>
    <table mat-table [dataSource]="dataSource">
    <ng-container matColumnDef="key">
      <th mat-header-cell *matHeaderCellDef> key. </th>
      <td mat-cell *matCellDef="let element"> {{element.key}} </td>
    </ng-container>
    <ng-container matColumnDef="prenom">
      <th mat-header-cell *matHeaderCellDef> prenom. </th>
      <td mat-cell *matCellDef="let element"> {{element.prenom}} </td>
    </ng-container>
    <ng-container matColumnDef="nom">
      <th mat-header-cell *matHeaderCellDef> nom. </th>
      <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
    </ng-container>
    <ng-container matColumnDef="action">
      <th mat-header-cell *matHeaderCellDef> action. </th>
      <td mat-cell *matCellDef="let element"> 
        <button (click)="onClickSuppr(element.key)" mat-stroked-button color="warn">supprimer</button>
        <button mat-stroked-button color="accent" class="ml-1" (click)="onClickModif(element.key)">modifier</button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [
    `table{
      width:100%;
    }
    .ml-1{
      margin-left:10px
    }
    `
  ]
})
export class GestionComponent implements OnInit {
  public onClickSuppr(key :string){
    this.fire.delete(key);
  }
  public onClickModif(key :string){
    this.route.navigate(["/admin/modif",key]);
  }

  public displayedColumns: string[] = ['key', 'prenom', 'nom' , 'action'];
  public dataSource : Array<any> = []

  constructor(private fire : FirebaseService , private route : Router) { }

  ngOnInit(): void {
    this.fire.getAll().subscribe( data => this.dataSource = data )
  }

}
// 15h22 bon café @ toute suite !! 
