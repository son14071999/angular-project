import { Category } from './../../common/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  url = 'http://localhost:3000/category'
  categories!: Category[]
  constructor(private categoryService: CategoryService) {
    
  }

  ngOnInit(): void {
    this.getListcategory()
  }

  deleteCategory(id: any) {
    this.categoryService.delete(id).subscribe(data => {
      this.getListcategory()
    })
  }

  getListcategory() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data as Category[]
    })
  }

}
