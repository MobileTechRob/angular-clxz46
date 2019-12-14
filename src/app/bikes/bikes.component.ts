import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})

export class BikesComponent implements OnInit 
{
  tmpBikes: any[] = [ {"Brand":"Specialized", "Price":"100"}, {"Brand":"Trek", "Price":"200"}, {"Brand":"Giant", "Price":"300"}, {"Brand":"E-Bike", "Price":"400"},{"Brand":"Izuno", "Price":"500"},{"Brand":"Cannondale", "Price":"600"}  ] ;

  constructor(public inventoryservice: InventoryService) {}

  getInventoryBikes()
  {
    return this.inventoryservice.getBikes;
  }

  getLocalBikes()
  {
    return this.tmpBikes;
  }

  ngOnInit() 
  {
    
  }
}