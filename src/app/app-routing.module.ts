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
  { path: 'dash', component: DashboardComponent },
  { path: 'dash/productadd', component: ProductaddComponent },
  { path: 'dash/productaddd', component: ProductaddformComponent },

  { path: 'dash/brand', component: DashbrandComponent },
  { path: 'dash/categoryadd', component: CategoryaddComponent },
  { path: 'dash/categoryaddd', component: CategoryaddFormComponent },
  {
    path: 'categoryupdate/:id',
    component: CategoryUpdateComponent,
  },
  { path: 'dash/brandaddd', component: BrandaddformComponent },
  {
    path: 'brandupdate/:id',
    component: BrandupdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
