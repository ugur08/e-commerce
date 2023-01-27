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
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
