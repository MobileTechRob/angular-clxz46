import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skiis',
  templateUrl: './skiis.component.html',
  styleUrls: ['./skiis.component.css']
})
export class SkiisComponent implements OnInit
{

  Skiis: any[] = [ {"Brand":"Head", "Price":"100"}, {"Brand":"K2", "Price":"200"}, {"Brand":"Fischer", "Price":"300"}, {"Brand":"Salomon", "Price":"400"}] ;
  
  constructor() { }

  ngOnInit() {
  }

}