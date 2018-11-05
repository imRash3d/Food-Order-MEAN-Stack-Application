import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurent.model';
import { DishCategoryPipe } from '../../pipes/dish-category.pipe';
import { AddressGenerateService } from '../../services/address-generate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit,OnDestroy {
  restaurant: Restaurant = new Restaurant();
  subtotal=0;
  delivery_fee=60;
  total=0;
  area_code;
  dishItem=[];
  dishIList=[];

    subscription:Subscription


  constructor(
    private restaurantService: RestaurantService,
    private addressService:AddressGenerateService

  ) {

  }

  ngOnInit() {
    this.restaurantService.recive_restaurant_obj
      .subscribe(

        res => {
          this.restaurant = res.restaurant,
            this.area_code = res.area_code
       
        },
        error => console.log(error)
      );
      this.getLocation();
  }

  getDishCategory(items) {
    // delete items.name;

    let list = [];
    for (let i in items) {
      if (typeof (items[i]) == 'object')
        list.push(items[i])
    }

    return list;
  }

  selectDish(dish) { // SELECT CART ITEM 
    this.subtotal=0;
  this.dishIList.push(dish);
  this.dishItem=JSON.parse(JSON.stringify(this.dishIList))

   for(let i=0;i<this.dishItem.length;i++){
     this.subtotal+=Number(this.dishIList[i].price); //GET PRICE PER ITEM
   }
   this.total=this.subtotal+this.delivery_fee; //SET TOTAL PRICE
  }

  checKCartList(updateList){ //UPDATE CARTARRY WHEN REMOVE CART ITEM IN CHILD COMPONENT
   this.dishIList=updateList;
   this.dishItem=updateList;
  }

  getLocation() { // GET LOCATION NAME & STORE IN LOCAL STORAGE
    this.subscription= this.addressService.getAddress()
      .subscribe(
        res => {
         for(let key in res){
           if(key==this.area_code)
           localStorage.setItem("location",res[this.area_code]);
         }
        }
      )
  }


  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }


}
