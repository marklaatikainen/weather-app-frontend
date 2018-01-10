import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'navigation',
  styleUrls: ['../nav.component.css'],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand"></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navmenu" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navmenu" style="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item left" routerLinkActive="active"><a class="nav-link" href="/">Säähavainnot</a></li>
          <li class="nav-item left" routerLinkActive="active"><a class="nav-link" routerLink="add">Lisää havainto</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="Tokio">Tokio</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="Helsinki">Helsinki</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="New York">New York</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="Amsterdam">Amsterdam</a></li>
          <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="Dubai">Dubai</a></li>
          <li class="nav-item"><a class="nav-link unit" (click)="changeUnit($event)"> {{ this.cookieValue }} </a></li>
        </ul>
      </div>
    </nav>
    `,
})
export class NavComponent implements OnInit {
  cookieValue = '';

  changeUnit(e: Event) {
    if (this.cookieService.get('unit') == '°C') {
      this.cookieService.set('unit', '°F');
    } else {
      this.cookieService.set('unit', '°C');
    }
    this.cookieValue = this.cookieService.get('unit');
    location.replace("/");
  }

  constructor(private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
    if (this.cookieService.get('unit') == '') {
      this.cookieService.set('unit', '°C');
    }

    this.cookieValue = this.cookieService.get('unit');
  }
}