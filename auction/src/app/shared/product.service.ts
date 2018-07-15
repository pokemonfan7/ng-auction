import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
        new Product(1, '第一个商品', 1.99, 3.5, '任天堂nds', ['nds', '游戏']),
        new Product(2, '第二个商品', 2.99, 4, '任天堂3ds', ['3ds', '游戏']),
        new Product(3, '第三个商品', 3.99, 4.5, '任天堂ns', ['ns', '游戏'])
  ];

  private comments: Comment[] = [
    new Comment(1, '2018-7-09', '张三', 3, '好评!'),
    new Comment(1, '2018-7-10', '李四', 3.5, '好评!!'),
    new Comment(1, '2018-7-11', '赵五', 4, '好评!!!'),
    new Comment(2, '2018-7-12', '钱六', 4.5, '好评!!!!'),
  ];

  constructor() {

  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId === id);
  }
}

export class Product {

    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public desc: string,
      public categories: string[]
    ) {}
}

export class Comment {

  constructor(
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
