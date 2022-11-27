import { CategoryService } from './../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../../common/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  url = 'http://localhost:3000/category'
  category: Category
  id!: string
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
    this.category = new Category()
    this.id = route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.categoryService.get(this.id).subscribe(data => {
      this.category = data as Category
    })
      
  }

  update() {
    this.categoryService.update(this.id, this.category).subscribe(data => {
      window.location.href = 'http://localhost:4200/categoryList'
    })
  }



}
