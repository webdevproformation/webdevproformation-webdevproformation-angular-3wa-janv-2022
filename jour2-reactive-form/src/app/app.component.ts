import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form1></form1>
    <hr>
    <app-form2></app-form2>
    <hr>
    <app-form3></app-form3>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jour2-reactive-form';
}
