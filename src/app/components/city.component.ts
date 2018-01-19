import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityDataComponent } from './citydata/citydata.component';


@Component({
  selector: 'city',
  template: `
    <citydata></citydata>
    `,
    
})

export class CityComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
