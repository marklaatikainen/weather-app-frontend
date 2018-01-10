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
      <div class="form-group" [ngClass]="{
        'has-danger': myform.controls.add.controls.station.invalid && (myform.controls.add.controls.station.dirty || myform.controls.add.controls.station.touched),
        'has-success': myform.controls.add.controls.station.valid && (myform.controls.add.controls.station.dirty || myform.controls.add.controls.station.touched)
      }">
        <label for="citySelect">Valitse havaintoasema</label>
        <select class="form-control" formControlName="station" id="citySelect">
          <option value="">Valitse</option>
          <option *ngFor="let station of stations" [value]="station">{{station}}
          </option>
        </select>
      </div>
      <div class="form-group" [ngClass]="{
        'has-danger': myform.controls.add.controls.unit.invalid && (myform.controls.add.controls.unit.dirty || myform.controls.add.controls.unit.touched),
        'has-success': myform.controls.add.controls.unit.valid && (myform.controls.add.controls.unit.dirty || myform.controls.add.controls.unit.touched)
      }">
        <label for="scaleSelect">Valitse yksikkö</label>
        <select class="form-control" formControlName="unit" ng-model="unit" id="scaleSelect">
          <option value="">Valitse</option>
          <option *ngFor="let unit of units" [value]="unit">{{unit}}
          </option>
        </select>
      </div>
      <div class="form-group" [ngClass]="{
        'has-danger': myform.controls.add.controls.temperature.invalid && (myform.controls.add.controls.temperature.dirty || myform.controls.add.controls.temperature.touched),
        'has-success': myform.controls.add.controls.temperature.valid && (myform.controls.add.controls.temperature.dirty || myform.controls.add.controls.temperature.touched)
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
      Validators.required,
      Validators.pattern(/^-?[\d]{1,2}[.,]?[\d]{0,1}$/)
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
