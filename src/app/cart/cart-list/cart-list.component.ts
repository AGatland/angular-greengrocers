import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartService = inject(CartService)
  // Change to an array format, since i was getting NG0100 error with the map
  cartItems: [Item, number][] = [];
  totalCost: number = 0;
  private subscription: Subscription;

  constructor() {
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit() {
    // Subscribe to cart$ in cartService, puts values in cartItems
    this.subscription = this.cartService.cart$.subscribe(cart => {
      this.cartItems = Array.from(cart.entries());
      this.calculateTotalCost();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  increaseQuantity(item: Item) {
    this.cartService.addToCart(item);
  }

  decreaseQuantity(item: Item) {
    this.cartService.removeFromCart(item);
  }

  calculateTotalCost() {
    this.totalCost = 0;
    for (const [item, quantity] of this.cartItems) {
      this.totalCost += item.price * quantity;
    }
    this.totalCost = Math.round(this.totalCost * 100)/100
  }
}