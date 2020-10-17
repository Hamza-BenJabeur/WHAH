import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  token: any = '';
  username: any;
  ngOnInit(): void {
    localStorage.getItem('token');
  }
  singup() {
    this.router.navigateByUrl('/signup/student');
  }
  collectLog(username, password) {
    console.log('ya koussaaay ====>', username.value);
    const obj = {
      username: username.value,
      password: password.value,
    };
    console.log(obj.username);
    this.local.message = obj.username;
    this._http.loginStudent(obj).subscribe((data) => {
      this.token = data['token'];
      this._http
        .httpgetUserState({ username: username.value })
        .subscribe((data) => {
          var c1 =
            data[0].verification === 'true' &&
            data[0].verRequest === 'true' &&
            data[0].firstTime === 'false';
          var c2 =
            data[0].verification === 'true' &&
            data[0].verRequest === 'true' &&
            data[0].firstTime === 'true';
          var c3 =
            data[0].verification === 'false' &&
            data[0].verRequest === 'false' &&
            data[0].firstTime === 'true';
          console.log(c1, c2, c3);
          var c4 =
            data[0].verification === 'false' &&
            data[0].verRequest === 'true' &&
            data[0].firstTime === 'true';

          if (c1) {
            console.log('condition 1');
            alert('hellow old user');
          } else if (c2) {
            console.log('condition 2');
            this.router.navigateByUrl('/register/student');
          } else if (c3) {
            console.log('condition 3');
            this.router.navigateByUrl('/verification/request/student');
          } else if (c4) {
            console.log('condition 3');
            this.router.navigateByUrl('/wait');
          }
        });
      localStorage.setItem('token', this.token);
    });
  }
}
