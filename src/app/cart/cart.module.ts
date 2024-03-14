import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListItemComponent } from './cart-list-item/cart-list-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartTotalComponent } from './cart-total/cart-total.component';



@NgModule({
  declarations: [
    CartListItemComponent,
    CartListComponent,
    CartTotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
