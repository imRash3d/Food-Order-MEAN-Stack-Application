import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { AuthenticationService } from './authentication.service';

const routing:Routes=[
   
]

@NgModule({
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
  declarations: [
  AuthenticationComponent
],

exports:[
    CommonModule,
    HttpClientModule,
    AuthenticationComponent,
    FormsModule
 
],
providers:[
    AuthenticationService
]
})
export class ShareModule { }
