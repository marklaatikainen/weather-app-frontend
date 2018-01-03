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
            <div id="locationdiv" class="card border-info mb-3">
            <div class="card-header">{{ (webService.citydata | async)?.name }}</div>
            
            <div class="card-body">
               <agm-map 
                    [latitude]="lat" 
                    [longitude]="lon">
                </agm-map>
            </div>
            </div>
            <div id="datadiv">
                <div *ngFor="let temp_data of (webService.citydata | async)?.temp_data | reverse" class="card border-dark mb-3">
                   <div class="card-header">
                       <p> {{ temp_data.timestamp | date:"HH:mm dd.MM.yyyy" }} </p>
                   </div>
                   <div class="card-body">
                       <p> {{ this.cookieValue == '°C' ? temp_data.value : temp_data.value * 9 / 5 + 32 }}{{ this.cookieValue }} </p>
                   </div>
                </div>
            </div>
        </div>
  `,
})
export class CityDataComponent implements OnInit {
    cookieValue = '';
    lat: number = 60.1697530;
    lon: number = 24.9490830;

    constructor(private cookieService: CookieService, private webService: WebService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.webService.getCityData(this.route.snapshot.params.city);
        this.cookieValue = this.cookieService.get('unit');
    }
}