import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <img src="assets/mario.jpg" alt="" style="width:100%">
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
