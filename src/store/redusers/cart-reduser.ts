import { Product } from 'src/models/ProductModel';
import { CartActions, CartActionTypes } from './../actions/cart-action';

const LS_KEY = 'cart_state';
export let initialState: Product[] =
  JSON.parse(localStorage.getItem(LS_KEY)) || [];

export let totalPrice: number = 0;

export function cartReducer(state = initialState, action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const newState = [...state, action.payload];
      localStorage.setItem(LS_KEY, JSON.stringify(newState));
      return newState;

    case CartActionTypes.REMOVE_PRODUCT:
      const filteredState = state.filter((p) => p.id !== action.payload.id);
      localStorage.setItem(LS_KEY, JSON.stringify(filteredState));
      return filteredState;

    case CartActionTypes.CLEAR_CART:
      localStorage.removeItem(LS_KEY);
      return [];

    case CartActionTypes.TOTAL_PRICE:
      return state.reduce((sum, product) => sum + product.price, 0);

    default:
      return state;
  }
}
