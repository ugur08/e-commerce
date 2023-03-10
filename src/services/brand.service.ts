import { BrandModel } from './../models/BrandsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/';

  getBrand() {
    return this.http.get<BrandModel[]>(this.apiUrl + 'brands');
  }

  getProductsBrandById(brand): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.apiUrl + 'products' + '?brand=' + brand
    );
  }
  getBrandById(id): Observable<BrandModel> {
    return this.http.get<BrandModel>(this.apiUrl + 'brands/' + id);
  }
  add(value: any) {
    return this.http.post(this.apiUrl + 'brands', value);
  }
  delete(id: number) {
    return this.http.delete(this.apiUrl + 'brands/' + id);
  }
  update(id, data: any) {
    return this.http.put(this.apiUrl + 'brands/' + id, data);
  }
}
