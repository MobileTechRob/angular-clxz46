import { Injectable } from '@angular/core';


@Injectable()
export class ShoeService 
{
  shoes: any[] = [ {"Brand":"Hoka", "Price":"100"}, {"Brand":"Saucony", "Price":"200"}, {"Brand":"Asics", "Price":"300"}, {"Brand":"Izuno", "Price":"400"},{"Brand":"Izuno", "Price":"500"}] ;

  constructor() { }

  getshoes()
  {
    return this.shoes;
  }



}