import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<html><h3>{{name}} - {{name}}</h3></html>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name = "Robs App";

  constructor() {     
  }

  ngOnInit() {
  }

}