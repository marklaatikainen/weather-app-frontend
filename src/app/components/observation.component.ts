import { Component, OnInit } from '@angular/core';
import { WebService } from '../web-service/web.service'
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'observation',
    template: `
        <a routerLink="{{observation.city}}" class="card border-dark mb-3 frontpageCard" *ngFor="let observation of webService.observations | async; let i = index;">
            <div class="card-header"> {{observation.city}} </div>
            <div class="card-body">

            <div *ngIf="observation.temp_data[observation.temp_data.length -1]; then tempBlock; else elseBlock">this is ignored</div>

            <ng-template #tempBlock> 
                <b>Viimeisin lämpötila:</b><p> {{ this.cookieValue == '°C' ? observation.temp_data[observation.temp_data.length -1].value : observation.temp_data[observation.temp_data.length -1].value * 9 / 5 + 32 }}{{ this.cookieValue }}</p>
                <b>Havaintoaika:</b><p> {{observation.temp_data[observation.temp_data.length -1].timestamp | date:"dd.MM.yyyy HH:mm" }}</p>
                <b>Vuorokauden korkein:</b><p class="max"> {{ this.cookieValue == '°C' ? (observation.temp_data | max: 'value') : (observation.temp_data | max: 'value') * 9 / 5 + 32 }}{{ this.cookieValue }}</p>
                <b>Vuorokauden matalin:</b><p class="min"> {{ this.cookieValue == '°C' ? (observation.temp_data | min: 'value') : (observation.temp_data | min: 'value') * 9 / 5 + 32 }}{{ this.cookieValue }}</p>
            </ng-template>
            <ng-template #elseBlock>Ei dataa viimeisen <br/> vuorokauden ajalta</ng-template>
        </div>
        </a>
  `,
})
export class ObservationComponent implements OnInit {
    cookieValue = '';

    constructor(private cookieService: CookieService, public webService: WebService) { }

    ngOnInit() {
        this.webService.getObservations();
        this.cookieValue = this.cookieService.get('unit');
    }

}
