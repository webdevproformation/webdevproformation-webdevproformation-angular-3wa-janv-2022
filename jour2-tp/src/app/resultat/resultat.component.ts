import { Component, OnInit } from '@angular/core';
import { PartageService} from "../partage.service"

@Component({
  selector: 'app-resultat',
  template: '<p>{{ p }}</p>',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  public p : string = "";
  constructor(private service : PartageService) { }

  ngOnInit(): void {
    this.service.data$.subscribe( infoSaisie => this.p = infoSaisie); 
  }

}
