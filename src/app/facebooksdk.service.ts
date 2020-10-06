import { Injectable, NgZone, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var FB: any;

@Injectable()
export class FacebookSDKService  {   
  private app_id = "861402131364721";
  private scopes = "email. user_friends, user_online_presence";


    iniciar(): void {
      FB.init({
          appId: this.app_id,
          cookie: true,
          status: true,
          xfbml: true,
          version: 'v2.1'
      });

      FB.getLoginStatus((response) => {
        this.statusChangeCallback(response);
      });
            
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
      
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);

      } (document, 'script', 'facebook-jssdk'));    
    }

    statusChangeCallback = (response) => {  // Called with the results from FB.getLoginStatus().
      console.log('statusChangeCallback');
      console.log(response);                   // The current login status of the person.
      if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        
      } else {                                 // Not logged into your webpage or we are unable to tell.
        
      }
    }

     checkLoginState = () =>  {               // Called when a person is finished with the Login Button.
      FB.getLoginStatus(function(response) {   // See the onlogin handler
        this.statusChangeCallback(response);
      });
    }

     testAPI = () => {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
      });
    }

    submitLogin = () => {
      FB.login(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });
    }

    loginFacebook = () => {
      
    }

    uploadFile = () => {

    }
}