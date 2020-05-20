import {Component,OnInit,OnChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'
import { IDropdownSettings } from '../../node_modules/ng-multiselect-dropdown/';
import {ClientService} from './client.service';
import {Observable} from 'rxjs/Observable';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})

export class AppComponent {
  title:any;
  isLinear = false;
  @ViewChild(SampleComponent) childForm: SampleComponent;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  get frm() {
    return this.childForm ? this.childForm.frmStepOne : null;
  }
  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    };
    
  
}

