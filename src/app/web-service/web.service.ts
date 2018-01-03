import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject, Observable } from 'rxjs/Rx'


@Injectable()
export class WebService {
  BASE_URL = 'https://polar-river-59836.herokuapp.com/api';

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

  postObservation(postData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(postData);
//    console.log(body);
//    return this.http.post(this.BASE_URL, body, options ).map((res: Response) => res.json());
  }
}