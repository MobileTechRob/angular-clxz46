import { Injectable } from '@angular/core';

@Injectable()
export class SkiService 
{
  skiis: any[] = [ {"Brand":"Head", "Price":"100"}, {"Brand":"K2", "Price":"200"}, {"Brand":"Fischer", "Price":"300"}, {"Brand":"Salomon", "Price":"400"}] ;
  
  constructor() { }

  getSkiis()
  {
    return this.skiis;
  }



}