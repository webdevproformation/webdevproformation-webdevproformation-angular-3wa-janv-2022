import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-input></app-input>
    <hr>
    <app-resultat></app-resultat>
  `,
  styles: [`
    :host{
      width:100%;
      max-width:800px;
      margin: 0 auto;
      display:block;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'jour2-tp'; 

  public ngOnInit(): void {

  }

}
