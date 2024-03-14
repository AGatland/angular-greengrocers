import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css']
})
export class CartListItemComponent {
  @Input("item") item: Item | null = null;
  @Input("quantity") quantity: number | undefined = undefined;
  @Output("increaseQuantity") increaseQuantity = new EventEmitter<Item>();
  @Output("decreaseQuantity") decreaseQuantity = new EventEmitter<Item>();

  increaseQuantityHandler() {
    if (!this.item) {
      throw new Error('cannot increase quantity of null');
    }
    this.increaseQuantity.emit(this.item);
  }

  decreaseQuantityHandler() {
    if (!this.item) {
      throw new Error('cannot decrease quantity of null');
    }
    this.decreaseQuantity.emit(this.item);
  }
}
