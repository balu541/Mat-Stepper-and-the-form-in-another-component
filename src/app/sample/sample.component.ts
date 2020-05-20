import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  frmStepOne: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmStepOne = this._formBuilder.group({
      firstCtrl: ['', Validators.required] });
  };

}
