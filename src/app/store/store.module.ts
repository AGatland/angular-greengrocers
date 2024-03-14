import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreListItemComponent } from './store-list-item/store-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from '../cart/cart.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreListItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CartModule,
    FormsModule
  ],
  exports: [
    StoreListComponent
  ]
})
export class StoreModule { }
