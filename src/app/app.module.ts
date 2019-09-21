import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BikesComponent } from './bikes/bikes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SkiisComponent } from './skiis/skiis.component';
import { ProductListComponent } from  './product-list/product-list-component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
      { path: '', component: ProductDashboardComponent },
      { path: 'bikes', component: BikesComponent },
      { path: 'skiis', component: SkiisComponent },
      { path: 'shoes', component: ShoesComponent },
      { path: 'products/:productId', component: ProductListComponent },
    ])],
  declarations: [ AppComponent, HelloComponent, BikesComponent, ShoesComponent, SkiisComponent, ProductListComponent, ProductDashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
