import { Component } from '@angular/core';
import { NavComponent } from './components/nav.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <nav></nav>
    <div id="container">
      <router-outlet></router-outlet>
    </div>
  `,

})
export class AppComponent {
  title = 'app';
}
