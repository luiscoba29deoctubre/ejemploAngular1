import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { DetailsproductComponent } from './products/detailsproduct/detailsproduct.component';

import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './products/productlist/productlist.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'product/:id', component: DetailsproductComponent },
  { path: '**', component: NoencontradoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
