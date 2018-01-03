import { Component, OnInit } from '@angular/core';
import { ObservationComponent } from './observation.component';

@Component({
  selector: 'home',
  template: `
    <h1>Vuorokauden sää</h1>
    <observation></observation>
    `,
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
