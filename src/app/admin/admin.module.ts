import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrandaddformComponent } from './brandaddform/brandaddform.component';
import { BrandupdateComponent } from './brandupdate/brandupdate.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryaddFormComponent } from './categoryadd-form/categoryadd-form.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashbrandComponent } from './dashbrand/dashbrand.component';
import { DnavbarComponent } from './dnavbar/dnavbar.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductaddformComponent } from './productaddform/productaddform.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProductUpdateComponent,
    ProductaddComponent,
    DashboardComponent,
    DnavbarComponent,
    DashbrandComponent,
    CategoryaddComponent,
    CategoryaddFormComponent,
    CategoryUpdateComponent,
    BrandaddformComponent,
    BrandupdateComponent,
    ProductaddformComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, AppRoutingModule, BrowserModule],
  exports: [
    ProductUpdateComponent,
    ProductaddComponent,
    DashboardComponent,
    DnavbarComponent,
    DashbrandComponent,
    CategoryaddComponent,
    CategoryaddFormComponent,
    CategoryUpdateComponent,
    BrandaddformComponent,
    BrandupdateComponent,
    ProductaddformComponent,
  ],
})
export class AdminModule {}
