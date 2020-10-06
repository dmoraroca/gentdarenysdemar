import { Component, OnInit } from '@angular/core';
import { FacebookSDKService } from './facebooksdk.service';

declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private facebookSDKService: FacebookSDKService) {
    facebookSDKService.iniciar();
  }


  ngOnInit(): void {
    
  }

  submitLogin(){
    alert("aaa");
    this.facebookSDKService.submitLogin();
  }
  
}

  