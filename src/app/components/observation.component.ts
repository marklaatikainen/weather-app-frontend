import { Component, OnInit } from '@angular/core';
import { WebService } from '../web-service/web.service'
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'observation',
    template: `
        <div class="card border-dark mb-3 frontpageCard" *ngFor="let observation of webService.observations | async; let i = index;">
            <div class="card-header"> {{observation.city}} </div>
            <div class="card-body">

            <div *ngIf="observation.temp_data[observation.temp_data.length -1]; then tempBlock; else elseBlock">this is ignored</div>

            <ng-template #tempBlock> 
                <p>Viimeisin lämpötila:<br /> {{ this.cookieValue == '°C' ? observation.temp_data[observation.temp_data.length -1].value : observation.temp_data[observation.temp_data.length -1].value * 9 / 5 + 32 }}{{ this.cookieValue }}</p>
                <p>Havaintoaika:<br /> {{observation.temp_data[observation.temp_data.length -1].timestamp | date:"HH:mm dd.MM.yyyy" }}</p>
                <p>Vuorokauden korkein: {{ this.cookieValue == '°C' ? (observation.temp_data | max: 'value') : (observation.temp_data | max: 'value') * 9 / 5 + 32 }}{{ this.cookieValue }}</p>
                <p>Vuorokauden matalin: {{ this.cookieValue == '°C' ? (observation.temp_data | min: 'value') : (observation.temp_data | min: 'value') * 9 / 5 + 32 }}{{ this.cookieValue }}</p>
            </ng-template>
            <ng-template #elseBlock>Ei dataa viimeisen <br/> vuorokauden ajalta</ng-template>
        </div>
        </div>
  `,
})
export class ObservationComponent implements OnInit {
    cookieValue = '';

    constructor(private cookieService: CookieService, private webService: WebService) { }

    ngOnInit() {
        this.webService.getObservations();
        this.cookieValue = this.cookieService.get('unit');
    }

}
