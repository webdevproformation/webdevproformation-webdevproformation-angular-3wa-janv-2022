import { Component, OnInit } from '@angular/core';
import { PartageService } from "../partage.service"

@Component({
  selector: 'app-input',
  template: '<input type="text" (keyup)="onPress($event)">',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public onPress($event :KeyboardEvent ){
    // console.log(($event.target as HTMLInputElement).value)
    this.service.data$.next(($event.target as HTMLInputElement).value)
  }
  constructor( private service : PartageService) { }

  ngOnInit(): void {
  }

}
