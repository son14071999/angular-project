import { HttpClient } from '@angular/common/http';
import { Category } from './../common/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/category'
  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get(this.url)
  }

  delete(id: string) {
    return this.httpClient.delete(this.url + '/' + id)
    
  }
  add(category: Category) {
    return this.httpClient.post(this.url, category)
    
  }

  update(id: string, category: Category) {
    return this.httpClient.put(this.url + '/' + id, category)
   
  }

  get(id:string) {
    return this.httpClient.get(this.url + '/' + id)
  }
}
