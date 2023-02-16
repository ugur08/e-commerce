import { RegisterComponent } from './home/register/register.component';
import { CartComponent } from './home/cart/cart.component';
import { ProductUpdateComponent } from '../app/admin/product-update/product-update.component';
import { ProductaddformComponent } from '../app/admin/productaddform/productaddform.component';
import { BrandupdateComponent } from '../app/admin/brandupdate/brandupdate.component';
import { BrandaddformComponent } from '../app/admin/brandaddform/brandaddform.component';
import { CategoryUpdateComponent } from '../app/admin/category-update/category-update.component';
import { CategoryaddFormComponent } from '../app/admin/categoryadd-form/categoryadd-form.component';
import { CategoryaddComponent } from '../app/admin/categoryadd/categoryadd.component';
import { DashbrandComponent } from '../app/admin/dashbrand/dashbrand.component';
import { ProductaddComponent } from '../app/admin/productadd/productadd.component';
import { DashboardComponent } from '../app/admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

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
  { path: 'dash', component: DashboardComponent, canActivate: [LoginGuard] },
  {
    path: 'dash/productadd',
    component: ProductaddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dash/productaddd',
    component: ProductaddformComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'dash/brand',
    component: DashbrandComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dash/categoryadd',
    component: CategoryaddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dash/categoryaddd',
    component: CategoryaddFormComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'categoryupdate/:id',
    component: CategoryUpdateComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dash/brandaddd',
    component: BrandaddformComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'brandupdate/:id',
    component: BrandupdateComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dash/productupdate/:id',
    component: ProductUpdateComponent,
    canActivate: [LoginGuard],
  },
  { path: 'pay', component: CartComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
