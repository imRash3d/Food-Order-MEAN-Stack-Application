import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchresultService } from '../../services/searchresult.service';
import { Restaurant } from '../../models/restaurent.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'restaurent-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  area_code
  filterMode = false;
  restaurantList: Restaurant[] = [];
  FilterRestaurantArray: Restaurant[] = [];
  subscribtion: Subscription;


  constructor(
    private searchResult: SearchresultService,
    private router: Router,
    private restaurantService:RestaurantService
  ) {

  }

  ngOnInit() {
    this.searchResult.castareaCode.subscribe(
      res => {
        if (!res) this.router.navigate(['']) //IF ANY ERROR BACK TO HOME PAGE 
        else {
          this.area_code=res;
          this.getAllRestaurents(res)
        }
      }
    )
  }


  enableFilterMode() { // ENABLE FILTER MODE 
    if (!this.filterMode)
      this.filterMode = true;
    else this.filterMode = false
  }

  getAllRestaurents(area_code) { //FIND RESTAURANT ACCORDING TO AREA CODE 
    this.subscribtion = this.searchResult.getRestaurants(area_code)
      .subscribe(
        res => {
          if (res) {
            for (let key in res) {
              let r = {
                $key: key,
                image: res[key].image,
                name: res[key].name,
                address: res[key].address,
                food_item: res[key].food_item,
              }
              this.restaurantList.push(r as Restaurant);

            }
          }
          else { //IF ANY ERROR BACK TO HOME PAGE 
            this.router.navigate([''])
          }

        },
        err => console.log(err)
      );
    this.FilterRestaurantArray = this.restaurantList;

  }


  selectRestaurant(r) { // SELECT RESTAURANT 
    let obj ={
      area_code:this.area_code,
      restaurant:r
    } 
    this.restaurantService.getRestaurant(obj)
    this.router.navigate(['restaurants/'+this.area_code]);
 

  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe(); // UNSUBSCRIBE
    }
     
  }

}
