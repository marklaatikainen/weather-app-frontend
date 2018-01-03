import { Component, OnInit } from '@angular/core';
import { WebService } from '../web-service/web.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'addnew',
  templateUrl: '../add.component.html',
})
export class AddObservationComponent implements OnInit {
  myform: FormGroup;
  constructor(private webService: WebService) { }

  unit = "Celcius";
  formData = {
    station: "dummy",
    temperature: 0
  }

  private static readonly errorMessages = {
    'required': () => 'This field is required'
  };

  post(myform) {
    console.log(this.formData);
//    myform.preventDefault();
//  this.formData.temperature = this.unit == 'Celsius' ? this.formData.temperature : this.formData.temperature * 9 / 5 + 32;
    this.webService.postObservation(this.myform);
  }

  ngOnInit() {
    this.myform = new FormGroup({
      add: new FormGroup({
        station: new FormControl('Valitse', Validators.required),
        unit: new FormControl('Celsius', Validators.required),
        temperature: new FormControl('', [
          Validators.required,
          Validators.pattern("/[\d]*,?[\d]*/")
        ])
      })
    });
  }
}
