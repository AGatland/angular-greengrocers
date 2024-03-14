import { Component, Input, inject } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-list-item',
  templateUrl: './store-list-item.component.html',
  styleUrls: ['./store-list-item.component.css']
})
export class StoreListItemComponent {
  @Input("item") item: Item | null = null;

  // Cart service injected here for using addToCart()
  cartService = inject(CartService)
}
