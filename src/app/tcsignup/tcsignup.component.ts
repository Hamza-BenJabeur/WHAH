import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tcsignup',
  templateUrl: './tcsignup.component.html',
  styleUrls: ['./tcsignup.component.css'],
})
export class TcsignupComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit(): void { }
  signin() {
    this.router.navigateByUrl('/signin/center');
  }
  
  addTC(name, password) {
    var obj = { name, password };
    this._http.registerTC(obj).subscribe((data) => {
      this.router.navigateByUrl('/signin/center');
    });
  }
}