import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jour5-tp';

  public getTitle(){
    return this.title
  }

  public customTitre(param : string){
    return param + " " + this.title ; 
  }

  public calcul(param : number){
    if(param > 0){
      return param ;
    }
    return 0; // lui donner au moins 2 it() dans le test unitaire 
  }

  public exo1(){
    return ["EUR", "DOL", "YEN"]
  }
}
