import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'nav',
  styleUrls: ['../nav.component.css'],
  template: `
    <ul class="navbar navbar-expand-lg navbar-dark bg-primary">
      <li class="left"><a href="/">Säähavainnot</a></li>
      <li class="left"><a href="/add">Lisää havainto</a></li>
      <li class="city"><a href="/tokio">Tokio</a></li>
      <li class="city"><a href="/helsinki">Helsinki</a></li>
      <li class="city"><a href="/new york">New York</a></li>
      <li class="city"><a href="/amsterdam">Amsterdam</a></li>
      <li class="city"><a href="/dubai">Dubai</a></li>
      <li class="city"><a href="/" (click)="changeUnit($event)"> {{ this.cookieValue }} </a></li>
    </ul>
    `,
})
export class NavComponent implements OnInit {
  cookieValue = '';
  changeUnit(e: Event) {
    if (this.cookieService.get('unit') == '°C') {
      this.cookieService.set( 'unit', '°F' );
    } else {
      this.cookieService.set( 'unit', '°C' );
    }
    this.cookieValue = this.cookieService.get('unit');
  }
  
  constructor(private cookieService: CookieService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.cookieService.get('unit') == '') {
      this.cookieService.set( 'unit', '°C' );
    }
    this.cookieValue = this.cookieService.get('unit');
  }

}