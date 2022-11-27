import { CategoryService } from './../../services/category.service';
import { Category } from './../../common/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  url = 'http://localhost:3000/category'
  category: Category
  constructor(private categoryService: CategoryService) {
    this.category = new Category()
  }

  ngOnInit(): void {
  }

  save() {
    this.categoryService.add(this.category).subscribe(data => {
      window.location.href = 'http://localhost:4200/categoryList'
    })
   
  }

}
