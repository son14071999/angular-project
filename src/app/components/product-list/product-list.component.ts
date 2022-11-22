import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {productCode: 'p01', productName: 'macbook air m1', starRating: 12},
    {productCode: 'p02', productName: 'macbook pro M1', starRating: 23},
    {productCode: 'p03', productName: 'aces zenbook 14 oled', starRating: 43},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeStarRating(rating: string) {
    console.log(rating)
  }
  getRandom() {
    return Number(Math.floor(Math.random()*10))
  }

}
