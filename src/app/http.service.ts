import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://localhost:3000';

  registerCompanies(data) {
    return this.http.post(this.ROOT_URL + '/addCompany', data);
  }
  registerTC(data) {
    return this.http.post(this.ROOT_URL + '/addTC', data);
  }
  register(data) {
    return this.http.post(this.ROOT_URL + '/addStudents', data);
  }
  loginStudent(data) {
    return this.http.post(this.ROOT_URL + '/login', data);
  }
  loginCompanies(data) {
    return this.http.post(this.ROOT_URL + '/loginCompanies', data);
  }
  loginTC(data) {
    return this.http.post(this.ROOT_URL + '/loginTC', data);
  }

  httpRegister(obj) {
    console.log('this si inside ====>', obj);
    return this.http.post(this.ROOT_URL + `/api/users/registration`, obj);
  }
  httpRegisterCompany(obj) {
    console.log('this si inside ====>', obj);
    return this.http.post(this.ROOT_URL + `/api/users/registerCompany`, obj);
  }
  httpRegisterTrainingCenter(obj) {
    console.log('this si inside ====>', obj);
    return this.http.post(
      this.ROOT_URL + `/api/users/registerTrainingCenter`,
      obj
    );
  }

  httpSendVerificationRequest(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequest',
      name
    );
  }

  httpSendVerificationRequestCompany(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequestCompany',
      name
    );
  }

  httpSendVerificationRequestCenter(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequestCenter',
      name
    );
  }

  httpGetNonVerifiedStudents() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedStudents');
  }

  httpGetNonVerifiedCompanies() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedCompanies');
  }

  httpGetNonVerifiedCenters() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedCenters');
  }

  httpVerifyStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyStudent', name);
  }
  httprejectStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectStudent', name);
  }
  httpVerifyCompanies(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyCompanies', name);
  }
  httprejectCompanies(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectCompanies', name);
  }

  httpVerifyCenter(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyCenter', name);
  }
  httprejectCenter(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectCenter', name);
  }

  httpgetUserState(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/getUsersatate', obj);
  }

  httpgetCompanyState(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/getCompanysatate', obj);
  }

  httpgetCenterState(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/getCentersatate', obj);
  }
}
