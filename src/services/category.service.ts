import { Product } from 'src/models/ProductModel';
import { Observable } from 'rxjs';
import { CategoryModel } from './../models/CategoryModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/';
  ap = 'http://localhost:3000/category';

  getCategory() {
    return this.http.get<CategoryModel[]>(this.apiUrl + 'category');
  }

  getProductsCategoryById(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.apiUrl + 'products' + '?categoryId=' + categoryId
    );
  }
  getProductsCategoryByIde(categoryId): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(this.ap + '/' + categoryId);
  }
  add(value: any) {
    return this.http.post(this.apiUrl + 'category', value);
  }
  delete(id: number) {
    return this.http.delete(this.ap + '/' + id);
  }
  update(id, data: any) {
    return this.http.put<CategoryModel>(this.ap + '/' + id, data);
  }
}
