import { ProductdenemeComponent } from './home/productdeneme/productdeneme.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'brand/:brand', component: HomeComponent },
  { path: 'category/:categoryId', component: HomeComponent },
  { path: 'filter/:brand/:categoryId', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
