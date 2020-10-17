import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  disconect() {
    this.router.navigateByUrl('/');
  }
}
