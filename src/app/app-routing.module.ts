import { ProductUpdateComponent } from './home/product-update/product-update.component';
import { ProductaddformComponent } from './home/productaddform/productaddform.component';
import { BrandupdateComponent } from './home/brandupdate/brandupdate.component';
import { BrandaddformComponent } from './home/brandaddform/brandaddform.component';
import { CategoryUpdateComponent } from './home/category-update/category-update.component';
import { CategoryaddFormComponent } from './home/categoryadd-form/categoryadd-form.component';
import { CategoryaddComponent } from './home/categoryadd/categoryadd.component';
import { DashbrandComponent } from './home/dashbrand/dashbrand.component';
import { ProductaddComponent } from './home/productadd/productadd.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ProductdenemeComponent } from './home/productdeneme/productdeneme.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
