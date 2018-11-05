import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodMenu } from '../../../models/restaurent.model';
import { RestaurantService } from '../../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input('dish') cartList: FoodMenu[] = [];
  @Input('list') foodItems: FoodMenu[] = [];
  @Input('subtotal') subTotal;
  @Input('restaurantName') restaurantName;
  @Input('total') totalPrice;
  @Input('deliveryFee') delivery_fee;

  @Output() checkList = new EventEmitter();


  constructor(
    private RestaurentService: RestaurantService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.calculateTotalPrice();
  }

  inc(index) {  //INCREMENT CART QUANTITY
    let price = Number(this.foodItems[index].price);
    this.cartList[index].quantity = this.cartList[index].quantity + 1;
    price = price * this.cartList[index].quantity;

    this.cartList[index].price = String(price);
    this.calculateSubTotalPrice('inc');
  }


  dec(index) { //DECREMENT CART QUANTITY
    let price = Number(this.foodItems[index].price);
    if (this.cartList[index].quantity > 1) {
      this.cartList[index].quantity = this.cartList[index].quantity - 1;
      price = price * this.cartList[index].quantity;
      this.cartList[index].price = String(price);
    }

    this.calculateSubTotalPrice('dec')  //CALL CALCUALTE SUBTOTAL PRICE
  }


  removeCartItem(index) {
    this.cartList.splice(index, 1);
    this.calculateSubTotalPrice('remove');
    this.checkList.emit(this.cartList);
    return this.cartList;
  }


  calculateSubTotalPrice(type) {
    if (type == 'inc') {
      this.subTotal = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        this.subTotal = this.subTotal + Number(this.cartList[i].price);
      }
      this.calculateTotalPrice()  //CALL CALCUALTE TOTAL PRICE
    }

    if (type == 'dec') {
      this.subTotal = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        this.subTotal += (this.cartList[i].quantity * Number(this.foodItems[i].price))
      }
      this.calculateTotalPrice(); //CALL CALCUALTE TOTAL PRICE 
    }
    if (type == 'remove') {
      this.subTotal = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        this.subTotal += (this.cartList[i].quantity * Number(this.foodItems[i].price))
      }
      this.calculateTotalPrice(); //CALL CALCUALTE TOTAL PRICE
    }
  }



  calculateTotalPrice() {  // CALCUALTE TOTAL PRICE
    this.totalPrice = this.subTotal + this.delivery_fee
  }

  checkoutCart() { //CHEKOUT
    let cartDetails={
      restaurant_name:this.restaurantName,
      subtotal:this.subTotal,
      delivery_fee:this.delivery_fee,
      cartList:this.cartList
    }
    this.RestaurentService.getCartList(cartDetails);
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
    
    this.router.navigate(['login']);
  }

}

