import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1, 'one', 1.99, 3.5, '666', ['nds', '游戏']),
      new Product(2, 'two', 2.99, 4, '6666', ['3ds', '游戏']),
      new Product(3, 'three', 3.99, 4.5, '66666', ['ns', '游戏'])
    ]

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
