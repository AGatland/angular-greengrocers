import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './store-page/store-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

const routes: Routes = [
  {path: 'store', component: StorePageComponent},
  {path: 'checkout', component: CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }