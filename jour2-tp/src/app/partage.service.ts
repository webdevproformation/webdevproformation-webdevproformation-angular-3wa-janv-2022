import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartageService {

  public data$ = new Subject<string>() // partager des informations entre n'importe quelle composant 

  constructor() { }
}
