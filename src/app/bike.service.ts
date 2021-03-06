import { Injectable } from '@angular/core';
import { IBike } from './dataModels/ibike.ts';

@Injectable({ providedIn: 'root'})
export class BikeService 
{
  bikes: any[] = [ {"Brand":"Specialized", "Price":"100"}, {"Brand":"Trek", "Price":"200"}, {"Brand":"Giant", "Price":"300"}, {"Brand":"E-Bike", "Price":"400"},{"Brand":"Izuno", "Price":"500"},{"Brand":"Cannondale", "Price":"600"} ] ;

  newbikes: IBike[] = [];
  newbikebrands: IBike[] = [];

  constructor()
  {

  }

  getBikes()
  {
    return this.bikes;
  }

  addBike(bike: IBike)
  {
     this.newbikes.push(bike);
  }

  addBrand(brandName: string)
  {
     this.newbikebrands.push(brandName);
  }



}