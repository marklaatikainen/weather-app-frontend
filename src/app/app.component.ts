import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./assets/app.component.css'],
  template: `
    <navigation></navigation>
    <div id="container">
      <router-outlet></router-outlet>
    </div>
  `,

})
export class AppComponent {
  title = 'app';
}
