import { Component, OnInit } from '@angular/core';
import {Subject , BehaviorSubject , ReplaySubject , AsyncSubject} from "rxjs"


@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrls: ['./behaviour.component.css']
})
export class BehaviourComponent implements OnInit {

  constructor() { 
    const s1$  = new Subject<number>() // pas de valeur par défaut émise 
    s1$.subscribe(console.log)
    s1$.next(1);
    s1$.next(2);
    s1$.next(3);
    s1$.subscribe(console.log)

    const s2$ = new BehaviorSubject<string>("v1") // valeur par défaut ("v1") qui va être émise
    s2$.subscribe( console.log )
    s2$.next("v2");
    s2$.next("v3");
    s2$.next("v4");
    s2$.subscribe( console.log )

    const s3$ = new ReplaySubject<Array<number>>()

    s3$.subscribe( console.log )
    s3$.next([1]);
    s3$.next([2]);
    s3$.next([3]);
    s3$.subscribe( console.log )
    // vous pouvez vous abonner AVANT ou APRES

    const s4$ = new AsyncSubject<boolean>()

    s4$.next(false);
    s4$.subscribe( console.log )
    s4$.next(false);
    s4$.subscribe( console.log )
    s4$.next(true);
    s4$.subscribe( console.log )

    s4$.complete(); // disparu à 100% ET et on ne veut récupérer QUE la dernière valeur émise ?? 


  }

  ngOnInit(): void {
  }

}
