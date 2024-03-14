import { Component, inject } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  // Ripped off most of code from cart module
  cartService = inject(CartService)
  cartItems: [Item, number][] = [];
  totalCost: number = 0;
  private subscription: Subscription;

  constructor() {
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit() {
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

  calculateTotalCost() {
    this.totalCost = 0;
    for (const [item, quantity] of this.cartItems) {
      this.totalCost += item.price * quantity;
    }
    this.totalCost = Math.round(this.totalCost * 100)/100
  }
}
