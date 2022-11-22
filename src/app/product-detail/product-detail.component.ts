import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../common/product'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product

  constructor() { 
    this.product = new Product('', '')
  }

  ngOnInit(): void {
  }

  changeDetail(form: NgForm) {
    console.log(form)
    this.product.productCode = form.value.productCode.toUpperCase()
    this.product.productName = form.value.productName
  }

}
