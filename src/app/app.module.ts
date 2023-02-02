import { ProductaddComponent } from './home/productadd/productadd.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductsComponent } from './home/products/products.component';
import { BrandComponent } from './home/brand/brand.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { ProductdenemeComponent } from './home/productdeneme/productdeneme.component';
import { ProductPipe } from './pipes/product.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DnavbarComponent } from './home/dnavbar/dnavbar.component';
import { DashbrandComponent } from './home/dashbrand/dashbrand.component';
import { CategoryaddComponent } from './home/categoryadd/categoryadd.component';
import { CategoryaddFormComponent } from './home/categoryadd-form/categoryadd-form.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryUpdateComponent } from './home/category-update/category-update.component';
import { BrandaddformComponent } from './home/brandaddform/brandaddform.component';
import { BrandupdateComponent } from './home/brandupdate/brandupdate.component';
import { ProductaddformComponent } from './home/productaddform/productaddform.component';
import { LoginComponent } from './home/login/login.component';
import { FilterComponent } from './home/filter/filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    BrandComponent,
    ProductDetailComponent,
    ProductdenemeComponent,
    ProductPipe,
    DashbrandComponent,
    ProductaddComponent,
    DnavbarComponent,
    DashboardComponent,
    CategoryaddComponent,
    CategoryaddFormComponent,
    CategoryUpdateComponent,
    BrandaddformComponent,
    BrandupdateComponent,
    ProductaddformComponent,
    LoginComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
