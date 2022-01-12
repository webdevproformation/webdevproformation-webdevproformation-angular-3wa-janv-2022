import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-form-builder></app-form-builder>
    <hr>
    <form1></form1>
    <hr>
    <app-form2></app-form2>
    <hr>
    <app-form3></app-form3>
    <hr>
    <app-exo1></app-exo1>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jour2-reactive-form';
}
