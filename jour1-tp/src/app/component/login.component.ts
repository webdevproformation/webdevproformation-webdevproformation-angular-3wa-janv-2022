import { Component, OnInit } from '@angular/core';
import { rotation , grossir } from "../animation"

@Component({
  selector: 'login',
  template: `
  <div>
    <h1 @grossir>connexion</h1> 
    <p @flip>
      login works!
    </p></div> 
  `,
  animations : [ rotation , grossir ],
  styles: [
    `div{
      width: 300px;
    }`
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
