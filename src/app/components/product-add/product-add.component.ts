import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {


  productForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'productCode': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'productName': new FormControl('123-123', [Validators.required, Validators.minLength(6), Validators.email])
    })
  }

  onSubmit() {
    if(this.productForm.invalid){
      console.log(this.productForm);
      return
    }
    console.log(this.productForm.value);
    
      
  }

}
