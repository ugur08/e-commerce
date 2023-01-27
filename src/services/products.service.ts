import { CategoryModel } from './../models/CategoryModel';
import { Observable } from 'rxjs';
import { Product } from './../models/ProductModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/';
  selectedCategory: CategoryModel;

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl + 'products?state=1');
  }
  getByBrandAndCategory(brand, categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.apiUrl + 'products' + '?brand=' + brand + '&categoryId=' + categoryId
    );
  }
}
