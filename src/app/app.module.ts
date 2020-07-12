import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { DetailsproductComponent } from './products/detailsproduct/detailsproduct.component';

import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductComponent } from './products/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NoencontradoComponent,
    DetailsproductComponent,
    ProductComponent,
    ProductlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
