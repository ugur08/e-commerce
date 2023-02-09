import { CategoryModel } from './../../../models/CategoryModel';
import { BrandModel } from './../../../models/BrandsModel';
import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from './../../../services/brand.service';
import { Product } from './../../../models/ProductModel';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private product: ProductsService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService
  ) {}

  /* Tüm ürünlerin */ products: Product[] = [];
  /* Search yapmak için */ filterText: string;
  /* Brandlerin*/ asd: BrandModel[] = [];
  /* Categorilerin*/ category: CategoryModel[] = [];
  /*Filtre yaptığımızda */ brandFilter: number = 0;
  /*Filtre yaptığımızda */ categoryFilter: number = 0;
  producte: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // eğer app-routinden categoryid ve brand id gelirse
      //ikisinin listelendiği metod olan getByBrandAndCategory çalışacak
      if (params['categoryId'] && params['brand']) {
        this.getByBrandAndCategory(params['brand'], params['categoryId']);
      }
      // eğer sadece category id gelirse categoriye göre listelenenler gelecek
      else if (params['categoryId']) {
        this.getProductsCategoryId(params['categoryId']);
      }
      // sadece brand gelirse çalışacak metod
      else if (params['brand']) {
        this.getProductsBrandId(params['brand']);
      } // ve hiçbiri gelmezse sayfadaki bütün ürünlerin listelenmesi için metod çağrılıyor
      else {
        this.getProduct();
        this.getBrand();
        this.getCategory();
      }
    });
  }
  // filtreleme sonucu brand ve category seçtiğimizin listelenmesi aksi durumda alert ile uyarı verilmesi
  getByBrandAndCategory(brand: number, categoryId: number) {
    this.product.getByBrandAndCategory(brand, categoryId).subscribe((data) => {
      this.products = data;
      if (this.products.length == 0) {
        alert(' Aradığınız Kriterlerde Araç Mevcut Değildir');
      }
    });
  }
  //apideki ilk 10 ürünü yayınlanması için
  getProduct() {
    this.product.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  //category menüsünün çalışması için
  getProductsCategoryId(categoryId) {
    this.categoryService
      .getProductsCategoryById(categoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }
  //Products apisinden brandine göre listeleme yapılması için
  getProductsBrandId(brand) {
    this.brandService.getProductsBrandById(brand).subscribe((data) => {
      this.products = data;
    });
  }
  // category ve brandlerin select option içerisinde kullanabilmek için
  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    });
  }
  getBrand() {
    this.brandService.getBrand().subscribe((data) => {
      this.asd = data;
    });
  }
}
