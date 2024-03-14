import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Use BehaviorSubject for storing the state of the cart for a more reactive experience
  private cartSubject = new BehaviorSubject<Map<Item, number>>(new Map<Item, number>());
  cart$ = this.cartSubject.asObservable();

  // Add to cart or increment if already in there
  addToCart(item: Item) {
    const cartItems = this.cartSubject.getValue();
    if (cartItems.has(item)) {
      // @ts-ignore
      cartItems.set(item, cartItems.get(item) + 1);
    } else {
      cartItems.set(item, 1);
    }
    // Sends the value to all subscribers
    this.cartSubject.next(cartItems);
  }

  // Remove from cart or decrement if more than one in there
  removeFromCart(item: Item) {
    const cartItems = this.cartSubject.getValue();
      // @ts-ignore
    if (cartItems.get(item) > 1) {
      // @ts-ignore
      cartItems.set(item, cartItems.get(item) - 1);
    } else {
      cartItems.delete(item);
    }
    // Sends the value to all subscribers
    this.cartSubject.next(cartItems);
  }
}
