import { Component, OnInit } from '@angular/core';
import { WebService } from '../web-service/web.service'
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'addnew',
  template: `
  <h1>Lisää säähavainto</h1>
  <form novalidate [formGroup]="myform" (ngSubmit)="onSubmit()">
    <fieldset formGroupName="add">
      <div class="form-group">
        <label for="citySelect">Valitse havaintoasema</label>
        <select class="form-control" formControlName="station" id="citySelect">
          <option value="">Valitse</option>
          <option *ngFor="let station of stations" [value]="station">{{station}}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="scaleSelect">Valitse yksikkö</label>
        <select class="form-control" formControlName="unit" ng-model="unit" id="scaleSelect">
          <option value="">Valitse</option>
          <option *ngFor="let unit of units" [value]="unit">{{unit}}
          </option>
        </select>
      </div>
      <div class="form-group" [ngClass]="{
        'has-danger': temperature.invalid && (temperature.dirty || temperature.touched),
        'has-success': temperature.valid && (temperature.dirty || temperature.touched)
      }">
        <label for="temperature">Lämpötilahavainto</label>
        <input class="form-control" formControlName="temperature" required placeholder="Lämpötila" type="text">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
  `,
})
export class AddObservationComponent implements OnInit {
  
  units: string[] = [
    'Celsius',
    'Fahrenheit'
  ];

  stations: string[] = [
    'Tokio',
    'Helsinki',
    'New York',
    'Amsterdam',
    'Dubai',
  ];

  constructor(private webService: WebService) { }

  myform: FormGroup;
  station: FormControl;
  unit: FormControl;
  temperature: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.station = new FormControl('', Validators.required);
    this.unit = new FormControl('', Validators.required);
    this.temperature = new FormControl('', [
      Validators.required
      //  ,Validators.pattern("^[\d]*,?[\d]*/")
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      add: new FormGroup({
        station: this.station,
        unit: this.unit,
        temperature: this.temperature
      })
    });
  }
  
  onSubmit() {
    if (this.myform.valid) {
      this.webService.postObservation(this.myform.value);
      this.myform.reset();
    }
  }


}
