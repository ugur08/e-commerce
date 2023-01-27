import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './../../../services/product-detail.service';
import { Product } from './../../../models/ProductModel';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private product: ProductDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails(id) {
    this.product.getProductDetail(id).subscribe((data) => {
      this.products = data;
    });
  }
}
