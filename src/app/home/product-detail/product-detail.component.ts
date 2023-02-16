import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../../models/ProductModel';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/store/actions/cart-action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  userName: string;
  constructor(
    private product: ProductsService,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductDetails(params['id']);
    });
    this.userName = localStorage.getItem('name');
  }

  getProductDetails(id) {
    this.product.getProductDetail(id).subscribe((data) => {
      this.products = data;
    });
  }
  addToCart(product: Product) {
    this.store.dispatch(new AddProduct(product));
    alert('Sepete Eklendi');
  }
}
