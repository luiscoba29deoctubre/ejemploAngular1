import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: ` <h2>
      Name:<a
        [routerLink]="['/product', producto2.id]"
        routerLinkActive="router-link-active"
        >{{ producto2.name }}</a
      >
    </h2>
    <div>Price: {{ producto2.price }}</div>`,
})
export class ProductComponent {
  @Input('viene') producto2;
}
