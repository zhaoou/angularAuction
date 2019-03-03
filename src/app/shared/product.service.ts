import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, 'first product', 1.99, 2, 'this is the first product', ['Electrical Product', 'Hardware Device']),
    new Product(2, 'second product', 2.99, 3, 'this is the second product', ['Book']),
    new Product(3, 'third product', 3.99, 4, 'this is the third product', ['Hardware Device']),
    new Product(4, 'forth product', 4.99, 5, 'this is the forth product', ['Electrical Product', 'Hardware Device']),
    new Product(5, 'fifth product', 5.99, 5, 'this is the fifth product', ['Electrical Product']),
    new Product(6, 'sixth product', 6.99, 4, 'this is the sixth product', ['Book']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'Zhang San', 3, 'Not Bad'),
    new Comment(2, 1, '2017-03-03 23:22:22', 'Li Si', 4, 'Good'),
    new Comment(3, 1, '2017-04-04 21:22:22', 'Wang Wu', 2, 'Just so so'),
    new Comment(4, 2, '2017-05-05 20:22:22', 'Zhao Liu', 4, 'Very Good'),
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsByProduct(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

  getAllCategories(): string[]{
    return ['Electrical Product', 'Hardware Device', 'Book'];
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

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {
  }
}
