import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductPipe } from '../pipes/product.pipe';
import { BrandComponent } from './brand/brand.component';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    BrandComponent,
    ProductDetailComponent,
    LoginComponent,
    FilterComponent,
    CartComponent,
    RegisterComponent,
    FooterComponent,
    ProductPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    BrandComponent,
    ProductDetailComponent,
    LoginComponent,
    FilterComponent,
    CartComponent,
    RegisterComponent,
    FooterComponent,
  ],
})
export class HomeModule {}
