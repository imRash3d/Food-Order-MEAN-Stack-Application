import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddressGenerateService {

  private Root_url='https://foodtopia-bd.firebaseio.com/';
  constructor(
     private http:HttpClient
  ) {}

  getAddress(){
     return this.http.get(this.Root_url+'area_code.json')
  }

}
