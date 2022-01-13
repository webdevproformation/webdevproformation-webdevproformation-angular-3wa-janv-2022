import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../service/firebase.service"

@Component({
  selector: 'gestion',
  template: `
    <h1>gestion du site</h1>
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
        <button>supprimer</button>
        <button>modifier</button>
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [
    `table{
      width:100%;
    }`
  ]
})
export class GestionComponent implements OnInit {
  public displayedColumns: string[] = ['key', 'prenom', 'nom' , 'action'];
  public dataSource : Array<any> = []

  constructor(private fire : FirebaseService) { }

  ngOnInit(): void {
    this.fire.getAll().subscribe( data => this.dataSource = data )
  }

}
