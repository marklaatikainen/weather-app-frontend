import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service'
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'citydata',
    templateUrl: 'citydata.html',
})
export class CityDataComponent implements OnInit {
    cookieValue = '';
    lat: number;
    lon: number;
    zoom: number = 14;
    location = '';
    data = [];

    private Math = Math;

    constructor(private cookieService: CookieService, public webService: WebService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.webService.getCityData(params.city).subscribe(res => {
                this.lat = Number(res.location.split(",")[0]);
                this.lon = Number(res.location.split(",")[1]);
                this.data = res;
                this.cookieValue = this.cookieService.get('unit');
            });
        });
    }
}