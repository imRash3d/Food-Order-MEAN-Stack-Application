import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable()
export class AuthenticationService {
  private Islogin;
private Root_URl='https://foodtopia-bd.firebaseio.com/';
private userList:User[]=[]
  constructor(
    private http: HttpClient
  ) {
this.Islogin=false;
  }

  login(user){
var isvalid=false;
  return  this.http.get(this.Root_URl+'users.json')
  .subscribe(res=>{
 
    for(let key in res) {

      if((res[key].email==user.email) && (res[key].password==user.password)){
        localStorage.setItem("user",JSON.stringify(res[key]))
        localStorage.setItem("islogin",'true');
        this.Islogin=true;
      }
    }
  });



  }

  getAuthentication(){

    return this.Islogin;
  }

  register(user){
    this.http.post(this.Root_URl+'users.json',user)
    .subscribe(res=>console.log(res))
  }
}
