import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <menu></menu>
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jour1-tp';
}
