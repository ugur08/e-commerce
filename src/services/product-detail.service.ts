import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  apiUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProductDetail(id) {
    return this.http.get<Product[]>(this.apiUrl + '?id=' + id);
  }
}
