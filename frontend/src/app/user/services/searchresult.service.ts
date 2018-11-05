import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SearchresultService {
  private Root_url='https://foodtopia-bd.firebaseio.com/restaurants/'
private restaurant_code= new BehaviorSubject('')
  constructor(
    private http:HttpClient
  ) { }

castareaCode= this.restaurant_code.asObservable();

getAreaCode(areaCode){
  this.restaurant_code.next(areaCode);
}

getRestaurants(area_code){
return this.http.get(this.Root_url+area_code+'.json');
}
}
