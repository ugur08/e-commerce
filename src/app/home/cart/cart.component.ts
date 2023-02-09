import { Product } from './../../../models/ProductModel';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RemoveProduct } from 'src/store/actions/cart-action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: any;

  constructor(private store: Store<any>) {}

  cart: Product[] = [];
  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.store.select('cartReducer').subscribe((state) => (this.cart = state));
  }
  deleteProduct(product: Product) {
    this.store.dispatch(new RemoveProduct(product));
  }
  // getTotalPricee() {
  //   this.store
  //     .select((state) => state.products)
  //     .subscribe((products) => {
  //       this.totalPrice = getTotalPrice(products);
  //     });
  // }
}
