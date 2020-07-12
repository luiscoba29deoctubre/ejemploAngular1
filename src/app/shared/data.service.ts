import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products = [
    {
      id: 1,
      name: 'apple',
      category: 'fruits',
      description: 'loren manzana',
      price: 10,
    },
    {
      id: 2,
      name: 'meat',
      category: 'food',
      description: 'loren carne',
      price: 800,
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }
  getProductById(id) {
    return this.products.filter((product) => product.id == id);
  }
}
