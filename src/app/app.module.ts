import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FacebookSDKService } from './facebooksdk.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FacebookSDKService    
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
