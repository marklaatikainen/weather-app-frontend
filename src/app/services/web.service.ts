import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject, Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'


@Injectable()
export class WebService {
  BASE_URL = 'http://api.markl.fi';

  private result = [];

  constructor(private http: Http) { }

  getObservations() {
    return this.http.get(this.BASE_URL).map(res => res.json()[0]);
  };

  getCityData(city) {
    return this.http.get(this.BASE_URL + "/" + city).map(res => res.json()[0]);
  };

  async postObservation(postData) {
    try {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      postData.add.temperature = (postData.add.unit == 'Celsius') ? postData.add.temperature : Math.round((postData.add.temperature - 32) * 5 / 9);
      let body = JSON.stringify(postData.add);
      var response = await this.http.post(this.BASE_URL, body, options).toPromise();
      location.replace("/");
    } catch (error) {
      console.log(error);
    }
  }
}