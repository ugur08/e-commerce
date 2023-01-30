import { Product } from 'src/models/ProductModel';
import { ProductsService } from 'src/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css'],
})
export class ProductaddComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  delete(products: Product): void {
    if (confirm('Silmek istediğinize emin misiniz?')) {
      this.products = this.products.filter((b) => b !== products);
      this.productsService.delete(products).subscribe();
    }
  }
}
