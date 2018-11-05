import { Component, OnInit, ErrorHandler } from '@angular/core';
import { User } from '../../../shareModule/models/user.model';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { NgForm } from '@angular/forms';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import {  TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
 


@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   months=[
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ]
  todaysMonth=this.months[new Date().getMonth()];
  todaysdate=new Date().getDate();
  year= new Date().getFullYear();

  orderDaysArray=[
    `${this.todaysMonth} ${this.todaysdate}, ${this.year}`,
    `${this.todaysMonth} ${this.todaysdate+1}, ${this.year}`,
    `${this.todaysMonth} ${this.todaysdate+2}, ${this.year}`

  ]

  userDetails: User;
  isLogin;
  cartdetails;
  modalRef: BsModalRef;
  template;
  constructor(
    private router:Router,
    private restaurantService:RestaurantService,
    private OrderService:OrderService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") && localStorage.getItem("islogin")) {
      this.userDetails = JSON.parse(localStorage.getItem("user"));
      this.isLogin = Boolean(localStorage.getItem("islogin"));
      if(localStorage.getItem('cartDetails')) {
        this.cartdetails=JSON.parse(localStorage.getItem("cartDetails"));
        console.log(this.cartdetails)
        console.log(this.cartdetails.cartList)
       
      }
     else if(this.restaurantService.recive_cartList) {
      this.restaurantService.recive_cartList.subscribe(
        res=>this.cartdetails=res
      )
     } 
     else {
        this.cartdetails='';
    }

    }

    else {
    //  this.router.navigate([''])
    }
  }


 private orderFood(form:NgForm){
  //  document.getElementById("spinner").style.display="block";
   let order: Order = {  //CREATE ORDER OBJECT
     userDetails: this.userDetails,
     cartDetails: this.cartdetails,
     delivery_address: form.value.address + ' ' + form.value.road_no,
     delivery_date: form.value.date,
     message: form.value.message,
    
   }

   this.OrderService.saveOrder(order)  //CREATE SPINNER FOR SAVE ORDER 
     .subscribe(res =>{
      
      // document.getElementById("spinner").style.display="none";
      if(confirm){
        console.log("hh");
      }
     },
 
    )

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
