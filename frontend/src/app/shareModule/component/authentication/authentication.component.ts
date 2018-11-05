import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  IsvalidAlert = false;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  loginForm(loginUser: NgForm) {
    this.checkLogin(loginUser.value);
  }


  registration(f: NgForm) {
    let user = {
      firstName: f.value.firstName,
      lastsName: f.value.lastsName,
      email: f.value.email,
      password: f.value.password,
      mobileNumber: f.value.mobileNumber
    }

    this.authService.register(user);

  }

  async  checkLogin(user) {
    await this.authService.login(user);

    setTimeout(() => {
      if (this.authService.getAuthentication()) {
        this.IsvalidAlert = false
        this.router.navigate(['checkout'])
      }
      else this.IsvalidAlert = true
      console.log(this.authService.getAuthentication());
    }, 2000)


  }


}
