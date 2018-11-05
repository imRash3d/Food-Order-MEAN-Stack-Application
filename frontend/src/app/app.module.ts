import { NgModule } from '@angular/core';
import { ShareModule } from './shareModule/sharemodule.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { AuthenticationComponent } from './shareModule/component/authentication/authentication.component';
import { BrowserModule } from '@angular/platform-browser';



const Routing: Routes = [
 
]
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ShareModule,
    UserModule,
    RouterModule.forRoot(Routing),


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
