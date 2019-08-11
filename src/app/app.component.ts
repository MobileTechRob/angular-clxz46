import { Component } from '@angular/core';
import { HelloComponent} from './hello/hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string = 'Sports ';
  sportone = 'Bikes';
  sporttwo = 'Shoes';
  sportthree = 'Skis';

  Bikes: any[] = [ {"Brand":"Specialized", "Price":"100"}, {"Brand":"Trek", "Price":"200"}, {"Brand":"Giant", "Price":"300"}, {"Brand":"E-Bike", "Price":"400"},{"Brand":"Izuno", "Price":"500"},{"Brand":"Cannondale", "Price":"600"}  ] ;
}
