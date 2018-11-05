import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShareModule } from '../shareModule/sharemodule.module';
import { UserRoutingModule,userRoutingComponent } from './user-routing.module';
import { AddressGenerateService } from './services/address-generate.service';
import { SearchresultService } from './services/searchresult.service';
import { RestaurantService } from './services/restaurant.service';
import { DishCategoryPipe } from './pipes/dish-category.pipe';
import { ShowcartComponent } from './component/checkout/showcart/showcart.component';
import { OrderService } from './services/order.service';
import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  imports:[
    BrowserModule,
    ShareModule,
    UserRoutingModule,
    ModalModule.forRoot(),

  ],
  declarations: [
    userRoutingComponent,
    DishCategoryPipe,
    ShowcartComponent
  ],
  providers:[
AddressGenerateService,
SearchresultService,
RestaurantService,
OrderService
      ],
      exports:[
        DishCategoryPipe
      ]

})
export class UserModule { }
