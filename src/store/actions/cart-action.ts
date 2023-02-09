import { Product } from 'src/models/ProductModel';
import { Action } from '@ngrx/store';

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
  TOTAL_PRICE = 'TOTAL_PRICE',
}

export class AddProduct implements Action {
  type: string = CartActionTypes.ADD_PRODUCT;

  constructor(public payload: Product) {}
}

export class RemoveProduct implements Action {
  type: string = CartActionTypes.REMOVE_PRODUCT;

  constructor(public payload: Product) {}
}

export class ClearProduct implements Action {
  type: string = CartActionTypes.CLEAR_CART;

  constructor(public payload: Product) {}
}

export class TotalPrice implements Action {
  type: string = CartActionTypes.TOTAL_PRICE;

  constructor(public payload: Product) {}
}

export type CartActions =
  | AddProduct
  | RemoveProduct
  | ClearProduct
  | TotalPrice;
