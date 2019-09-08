import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BikesComponent } from './bikes/bikes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SkiisComponent } from './skiis/skiis.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
      { path: '', component: HelloComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])],
  declarations: [ AppComponent, HelloComponent, BikesComponent, ShoesComponent, SkiisComponent, ProductListComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
