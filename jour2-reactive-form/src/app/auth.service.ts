import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged$ = new Subject<string>();

  

  constructor() { }
}
