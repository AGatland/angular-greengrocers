import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { CartModule } from './cart/cart.module';
import { StorePageComponent } from './store-page/store-page.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

@NgModule({
  declarations: [AppComponent, StorePageComponent, CheckoutPageComponent],
  imports: [BrowserModule, StoreModule, CartModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
