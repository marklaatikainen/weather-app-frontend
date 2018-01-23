import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service'
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
    selector: 'observation',
    templateUrl: 'observation.html',
})
export class ObservationComponent implements OnInit {
    cookieValue = '';
    cities = ["Tokio", "Helsinki", "New York", "Dubai", "Amsterdam"];
    private loadingComplete = false;
    private isLoading = true;
    private error;
    private data = [];

    constructor(private spinnerService: Ng4LoadingSpinnerService, private cookieService: CookieService, public webService: WebService) {
        this.webService.getObservations().subscribe(res => {
           this.data = res;
           this.isLoading = false;
           this.loadingComplete = true;
           this.spinnerService.hide();
           this.cookieValue = this.cookieService.get('unit');
        },
            err => {
                this.loadingComplete = true;
                this.error = err;
            });
    }


    isEmptyResult() {
        // returns empty array if no data found.
        return (!this.isLoading && !this.error && this.loadingComplete && this.data && this.data.length === 0);
    }
    dataAvailable() {
        return (!this.isLoading && !this.error && this.loadingComplete && this.data && this.data.length > 0);
    }

    ngOnInit() {
        this.spinnerService.show();
    }
}
