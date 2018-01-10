import { Component, OnInit } from '@angular/core';
import { WebService } from '../web-service/web.service'
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'citydata',
    template: `
        <div>
            <h1> {{ (webService.citydata | async)?.name }} </h1>
            
            <div id="datadiv" class="card border-info mb-3">
            <div class="card-header">Lämpötilahavainnot</div>
                <div class="card-body">
                    <li *ngFor="let temp_data of (webService.citydata | async)?.temp_data | reverse">
                    {{ this.cookieValue == '°C' ? temp_data.value : temp_data.value * 9 / 5 + 32 }}{{ this.cookieValue }} <br /> {{ temp_data.timestamp | date:"dd.MM.yyyy HH:mm" }}
                    </li>
                </div>
            </div>

            <div id="locationdiv" class="card border-info mb-3">
                <div class="card-header">Sääaseman sijainti</div>
                <div class="card-body">
                    <agm-map 
                        [latitude]="lat" 
                        [longitude]="lon">
                    </agm-map>
                </div>
            </div>
            
        </div>
  `,
})
export class CityDataComponent implements OnInit {
    cookieValue = '';
    lat: number = 40.741895;
    lon: number = -73.989308;
    city: string;

    constructor(private cookieService: CookieService, public webService: WebService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.city = params.city;
            this.webService.getCityData(this.city);
            this.cookieValue = this.cookieService.get('unit');
        });
    }
}