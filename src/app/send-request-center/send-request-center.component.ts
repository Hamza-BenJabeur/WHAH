import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service'

@Component({
  selector: 'app-send-request-center',
  templateUrl: './send-request-center.component.html',
  styleUrls: ['./send-request-center.component.css']
})
export class SendRequestCenterComponent implements OnInit {

  constructor(private _http : HttpService ,  private router: Router , private local : LocalService) { }
  name: any = this.local.message; 
  ngOnInit(): void {
  }
  verificationReq() {
    this._http.httpSendVerificationRequestCenter({name : this.name}).subscribe((data) => {
      this.router.navigateByUrl('/wait');
    });
  }
}
