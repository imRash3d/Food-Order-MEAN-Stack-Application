import { FoodMenu } from "./restaurent.model";
import { User } from "../../shareModule/models/user.model";
import { CartDetails } from "./cartdetails.model";

export class Order{
 
    cartDetails:CartDetails[];
    delivery_date:String;
  
    userDetails:User;
    delivery_address:string;
    message?:string
}