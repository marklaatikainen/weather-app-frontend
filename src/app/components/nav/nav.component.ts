import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'navigation',
  styleUrls: ['../../assets/nav.component.css'],
  templateUrl: 'nav.html',
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
    location.reload();
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