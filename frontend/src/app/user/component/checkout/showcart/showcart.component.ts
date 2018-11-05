import { Component, OnInit, Input } from '@angular/core';
import { FoodMenu } from '../../../models/restaurent.model';


@Component({
  selector: 'showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
@Input ('cartdetails') cartdetails;

  constructor() { }

  ngOnInit() {
    
  }


}
