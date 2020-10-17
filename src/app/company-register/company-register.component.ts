import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service'

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css'],
})
export class CompanyRegisterComponent implements OnInit {
  constructor(private _http : HttpService, private local : LocalService) {}

  obj : any
  ngOnInit(): void {}

  takedata(email, owner, field, numberOfEmployee, location, website, logo, about) {
    this.obj = {
      email:email,
      owner: owner,
      field: field,
      numberOfEmployee: numberOfEmployee,
      location: location,
      website:website ,
      logo: logo,
      about: about,
      name : this.local.message
    }
    console.log(this.obj)
    this._http.httpRegisterCompany(this.obj).subscribe((data) => {
      console.log("done")
    });
  }
  };

