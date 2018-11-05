import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantService {
private restaurant_obj= new BehaviorSubject(null);
recive_restaurant_obj= this.restaurant_obj.asObservable();

private Cartlist= new BehaviorSubject(null)
recive_cartList=this.Cartlist.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  getRestaurant(restaurant) {
   this.restaurant_obj.next(restaurant);

  }

  getCartList(cart){
    this.Cartlist.next(cart);
  }
  getR(){
    return this.http.get('https://foodtopia-bd.firebaseio.com/restaurants/101/-LBFfTgdz_oZhCXlFJQJ.json')
  }

}
