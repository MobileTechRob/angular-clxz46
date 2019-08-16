import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<html></html>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name = "Robs App";

  constructor() {     
  }

  ngOnInit() {
  }

}