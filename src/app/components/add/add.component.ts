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
