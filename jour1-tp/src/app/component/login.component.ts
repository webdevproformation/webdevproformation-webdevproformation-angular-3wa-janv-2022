import { Component, OnInit } from '@angular/core';
import { rotation , grossir , deplacement } from "../animation"

@Component({
  selector: 'login',
  template: `
  <div>
    <h1 @grossir>connexion</h1> 
    <h2 @deplacement>sous titre</h2>
    <p @flip>
      login works!
    </p></div> 
  `,
  animations : [ rotation , grossir , deplacement ],
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
