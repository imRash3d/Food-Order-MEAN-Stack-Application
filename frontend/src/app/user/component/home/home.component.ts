import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddressGenerateService } from '../../services/address-generate.service';
import { RestaurentArea } from '../../models/area.model';
import { Router } from '@angular/router';
import { SearchresultService } from '../../services/searchresult.service';
import { Subscription } from 'rxjs/Subscription';
//import { AddressService } from '../../services/address.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  text;
  arealist:RestaurentArea[]=[];
  filterAreaList:RestaurentArea[]=[];
  subscription:Subscription;
  constructor(
private addressGenerate:AddressGenerateService,
private router:Router,
private SearchService:SearchresultService
  ) { }

  ngOnInit() {
   this.subscription= this.addressGenerate.getAddress()
    .subscribe(
      res=>{
        for(let key in res ) {
          let area={
            $key:key,
            name:res[key]
          }
          this.arealist.push(area)
         
        }
      },
      error=>console.log(error)
    );
   
  }

  filterArea(e){
     this.text =String(e.target.value).toLowerCase();
    this.filterAreaList= this.arealist.filter(item=>{
     if(item.name.toLowerCase().indexOf(this.text)>-1)
     {
      return 1
     }
  
   })

  }

  selectArea(area:RestaurentArea){
    this.SearchService.getAreaCode(area.$key)
    this.router.navigate(['restaurants/searc-result'])
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
