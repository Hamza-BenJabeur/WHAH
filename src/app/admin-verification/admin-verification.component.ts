import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.css']
})
export class AdminVerificationComponent implements OnInit {

  constructor(private _http: HttpService , private router: Router) { }

  NonValidStudents: any;
  NonValidCompanies: any;
  NonValidCenters: any;
  ngOnInit(): void {
    this.getData()
    this.getCompany()
    this.getCenters()
  }
  getData() {
    this._http.httpGetNonVerifiedStudents().subscribe((data) => {
      console.log(data)
      this.NonValidStudents = data
    });
  }


  getCompany() {
    this._http.httpGetNonVerifiedCompanies().subscribe((data) => {
      console.log(data)
      this.NonValidCompanies = data
    });
  }

  getCenters() {
    this._http.httpGetNonVerifiedCenters().subscribe((data) => {
      console.log(data)
      this.NonValidCenters = data
    });
  }

////////////////////////////////  Verification Student //////////////////////////////////////////
  verifie(username) {
    this._http.httpVerifyStudent({ username: username }).subscribe((data) => {
      this.getData()
    });
  }
  
  reject(username) {
    this._http.httprejectStudent({ username: username }).subscribe((data) => {
      this.getData()
    });
  }

  ////////////////////////////// Verification Company ////////////////////////////////////////////
  
  verifieCompanies(name) {
    this._http.httpVerifyCompanies({ name: name }).subscribe((data) => {
      this.getCompany()
    });
  }

  rejectCompanies(name) {
    this._http.httprejectCompanies({ name: name }).subscribe((data) => {
      this.getCompany()
    });
  }


//////////////////////////////// Verification Center ////////////////////////////////////////
verifieCenter(name) {
  this._http.httpVerifyCenter({ name: name }).subscribe((data) => {
    this.getCenters()
  });
}

rejectCenter(name) {
  this._http.httprejectCenter({ name: name }).subscribe((data) => {
    this.getCenters()
  });
}
  
  goback() {
    this.router.navigateByUrl('/');
  }
}
