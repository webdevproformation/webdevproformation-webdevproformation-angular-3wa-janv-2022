import { Component, OnInit } from '@angular/core';
import {pageAnimationSuiteParallele} from "../animation";

@Component({
  selector: 'animation-suite',
  template: `
    <section @pageAnimationSuite> 
      <ul>
        <li>Lundi</li>
        <li>Mardi</li>
        <li>Mercredi</li>
      </ul>
      <h2>Animation suite</h2>
      <img src="https://source.unsplash.com/random/1200x400" alt="">
      <p>lorem ipsum</p>
      
    </section> 
  `,
  styles: [
    `li{
      width: 200px; 
    }`
  ],
  animations : [pageAnimationSuiteParallele]
})
export class AnimationSuiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
