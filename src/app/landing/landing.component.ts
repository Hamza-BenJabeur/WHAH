import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  check : any = document.getElementsByClassName('checks')
  hello : any 
  constructor( private router: Router) { }

  ngOnInit(): void {

  }
  student() {
    this.router.navigateByUrl('/signup/student');

  }
  company() {
    this.router.navigateByUrl('/signup/company');

  }
  center() {
    this.router.navigateByUrl('/signup/center');
  }
  studentl() {
    this.router.navigateByUrl('/signin/student');

  }
  companyl() {
    this.router.navigateByUrl('/signin/company');

  }
  centerl() {
    this.router.navigateByUrl('/signin/center');
  }
}
