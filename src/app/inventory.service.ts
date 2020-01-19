import { Injectable } from '@angular/core';
import { BikeService } from './bike.service';

import { HiService } from './hi.service';

@Injectable()
export class InventoryService 
{
  constructor(private bikeservice: BikeService) { }

  getBikes()
  {
    return this.bikeservice.getBikes();
  }





}