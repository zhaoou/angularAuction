import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl: 'http://placehold.it/260x150';
  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, 'first product', 1.99, 2, 'this is the first product', ['Electrical Product', 'Hardware Device']),
      new Product(2, 'second product', 2.99, 3, 'this is the second product', ['Book']),
      new Product(3, 'third product', 3.99, 4, 'this is the third product', ['Hardware Device']),
      new Product(4, 'forth product', 4.99, 5, 'this is the forth product', ['Electrical Product', 'Hardware Device']),
      new Product(5, 'fifth product', 5.99, 5, 'this is the fifth product', ['Electrical Product']),
      new Product(6, 'sixth product', 6.99, 4, 'this is the sixth product', ['Book']),
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
