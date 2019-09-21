import { Component, Input } from '@angular/core';
import { HelloComponent} from './hello/hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @Input() name = 'Fitness World';
  sportone = 'Bikes';
  sporttwo = 'Shoes';
  sportthree = 'Skis';

  Bikes: any[] = [ {"Brand":"Specialized", "Price":"100"}, {"Brand":"Trek", "Price":"200"}, {"Brand":"Giant", "Price":"300"}, {"Brand":"E-Bike", "Price":"400"},{"Brand":"Izuno", "Price":"500"},{"Brand":"Cannondale", "Price":"600"}  ] ;

  Shoes: any[] = [ {"Brand":"Hoka", "Price":"100"}, {"Brand":"Saucony", "Price":"200"}, {"Brand":"Asics", "Price":"300"}, {"Brand":"Izuno", "Price":"400"},{"Brand":"Izuno", "Price":"500"}] ;

  Skiis: any[] = [ {"Brand":"Head", "Price":"100"}, {"Brand":"K2", "Price":"200"}, {"Brand":"Fischer", "Price":"300"}, {"Brand":"Salomon", "Price":"400"}] ;
  
}
