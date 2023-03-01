import { Injectable } from '@angular/core';
import {ifood} from '../app/foods';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<ifood> =[];

  addToCart(obj: ifood) {
    this.cart.push(obj);
  }

  getCart() {
    return this.cart;
  }
}
