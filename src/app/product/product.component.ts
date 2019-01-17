import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, 'first product', 1.99, 3.5, 'this is the first product', ['Electrical Product', 'Hardware Device']),
      new Product(2, 'first product', 1.99, 3.5, 'this is the first product', ['Electrical Product', 'Hardware Device']),
      new Product(3, 'first product', 1.99, 3.5, 'this is the first product', ['Electrical Product', 'Hardware Device']),
    ];
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
