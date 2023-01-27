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

  getCategory() {
    return this.http.get<CategoryModel[]>(this.apiUrl + 'category');
  }

  getProductsCategoryById(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.apiUrl + 'products' + '?categoryId=' + categoryId
    );
  }
}
