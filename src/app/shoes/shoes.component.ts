import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit 
{

  Shoes: any[] = [ {"Brand":"Hoka", "Price":"100"}, {"Brand":"Saucony", "Price":"200"}, {"Brand":"Asics", "Price":"300"}, {"Brand":"Izuno", "Price":"400"},{"Brand":"Izuno", "Price":"500"}] ;
  
  constructor() { }

  ngOnInit() {
  }

}