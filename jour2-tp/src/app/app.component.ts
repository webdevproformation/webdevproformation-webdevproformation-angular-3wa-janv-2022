import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <div>
      <app-input></app-input>
      <app-total></app-total>
    </div>
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
    div{
      display: flex ;
      justify-content:space-between;
      align-items:center;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'jour2-tp'; 

  public ngOnInit(): void {

  }

}
