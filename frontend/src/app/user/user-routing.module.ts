import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import { UserComponent } from './user.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { CartComponent } from './component/restaurant/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AuthenticationComponent } from '../shareModule/component/authentication/authentication.component';

const Routing:Routes=[
    {path:'', component:UserComponent,
    children:[
        {path:'',component:HomeComponent},
        {path:'restaurants/searc-result',component:SearchResultComponent},
         {path:'restaurants/:id',component:RestaurantComponent},
         {path:'login',component:AuthenticationComponent},
         {path:'checkout',component:CheckoutComponent}
    ]}
]
@NgModule({

  imports: [
      RouterModule.forChild(Routing)
  ],
  exports:[
RouterModule
  ],


})
export class UserRoutingModule { }
export const userRoutingComponent =[
    UserComponent,
    HeaderComponent,
    CheckoutComponent,
    CartComponent,
    SearchResultComponent,
    HomeComponent,
    FooterComponent,
    RestaurantComponent
]