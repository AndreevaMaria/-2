import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'view/:id', component: ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
