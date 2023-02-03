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
  add(value: any) {
    return this.http.post(this.apiUrl + 'products', value);
  }
  delete(products) {
    return this.http.delete(this.apiUrl + 'products/' + products.id);
  }
  update(id, data: any) {
    return this.http.put<Product>(this.apiUrl + 'products/' + id, data);
  }
  getProductsByIde(productId): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + 'products/' + productId);
  }
}
