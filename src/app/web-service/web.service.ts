import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject, Observable } from 'rxjs/Rx'


@Injectable()
export class WebService {
  //  BASE_URL = 'https://polar-river-59836.herokuapp.com/api';
  BASE_URL = 'http://localhost:3000';

  private result = [];


  private resultAll = new Subject();
  private resultCity = new Subject();

  observations = this.resultAll.asObservable();
  citydata = this.resultCity.asObservable();

  constructor(private http: Http) { }

  getObservations() {
    this.http.get(this.BASE_URL).subscribe(res => {
      this.result = res.json();
      this.resultAll.next(this.result[0]);
    }, error => {
      console.error(error);
    });
  };

  getCityData(city) {
    this.http.get(this.BASE_URL + "/" + city).subscribe(res => {
      this.result = res.json();
      this.resultCity.next(this.result);
    }, error => {
      console.error(error);
    });
  };

  async postObservation(postData) {
    try {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      postData.add.temperature = (postData.add.unit == 'Celsius') ? postData.add.temperature : Math.round((postData.add.temperature - 32) * 5 / 9);
      let body = JSON.stringify(postData.add);
      var response = await this.http.post(this.BASE_URL, body, options).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}