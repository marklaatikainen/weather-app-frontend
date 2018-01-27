import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service'
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'addnew',
  templateUrl: 'add.html',
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
    this.unit = new FormControl('Celsius', Validators.required);
    this.temperature = new FormControl('', [
      Validators.required,
      this.unit.value == 'Celsius'
        ? Validators.pattern(/^-?([0-9]|[1-4][0-9]|60)$/) // -60..60
        : Validators.pattern(/^(-([0-9]|[1-4][0-9]|50)|([0-9]|[1-8][0-9]|9[0-9]|1[0-2][0-9]|130))$/) // -50...130
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
