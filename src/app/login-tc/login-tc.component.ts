import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-tc',
  templateUrl: './login-tc.component.html',
  styleUrls: ['./login-tc.component.css'],
})
export class LoginTcComponent implements OnInit {
  constructor(private _http: HttpService ,private local : LocalService , private router: Router ) {}
  token: any = '';
  ngOnInit(): void {
    console.log('companies', localStorage.getItem('token'));
  }
  signup() {
    this.router.navigateByUrl('/signup/center');

  }
  loginTC(name, password) {
    
    this.local.message = name.value 
    const obj = {
      name: name.value,
      password: password.value,
    };
    this._http.loginTC(obj).subscribe((data) => {
      this.token = data['token'];
      localStorage.setItem('token', this.token);
      console.log(localStorage.getItem('token'));
      this._http.httpgetCenterState({ name: name.value }).subscribe((data) => {
        var c1 = data[0].verification==="true" && data[0].verRequest==="true" && data[0].firstTime==="false"
        var c2 = data[0].verification==="true" && data[0].verRequest==="true" && data[0].firstTime==="true" 
        var c3 = data[0].verification==="false" && data[0].verRequest==="false" && data[0].firstTime==="true"
        console.log(c1,c2,c3)
        var c4 = data[0].verification==="false" && data[0].verRequest==="true" && data[0].firstTime==="true"

        if (c1) {
          console.log("condition 1")
          alert('hellow old user')
        }
        else if (c2) {
          console.log("condition 2")
          this.router.navigateByUrl('/register/center');
        }
        else if (c3) {
          console.log("condition 3")
          this.router.navigateByUrl('/verification/request/center');
        }
        else if (c4) {
          console.log("condition 3")
          this.router.navigateByUrl('/wait');
        }
      })

    });
  }
}