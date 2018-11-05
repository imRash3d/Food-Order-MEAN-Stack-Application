import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order.model";

@Injectable()
export class OrderService {
    private Root_Url="https://foodtopia-bd.firebaseio.com/"
constructor(
    private http:HttpClient
){}

saveOrder(order:Order){
   return this.http.post(this.Root_Url+'orders.json',order)
}

}