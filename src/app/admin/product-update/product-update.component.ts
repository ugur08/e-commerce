import { CategoryModel } from '../../../models/CategoryModel';
import { BrandModel } from '../../../models/BrandsModel';
import { CategoryService } from 'src/services/category.service';
import { BrandService } from 'src/services/brand.service';
import { Product } from 'src/models/ProductModel';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  brands: BrandModel[] = [];
  category: CategoryModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private productsService: ProductsService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.getBrand();
    this.getCategory();
  }

  getProduct() {
    this.activatedRoute.params.subscribe((params) => {
      this.getProducts(params['id']);
    });
  }

  getProducts(id) {
    this.productsService.getProductsByIde(id).subscribe((data) => {
      this.product = data;
      this.updateForm();
    });
  }
  updateForm() {
    this.productForm = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      brand: [this.product.brand, Validators.required],
      price: [this.product.price, Validators.required],
      categoryId: [this.product.categoryId, Validators.required],
      rating: [this.product.rating, Validators.required],
      cargo: [this.product.cargo, Validators.required],
      description: [this.product.description, Validators.required],
      imgUrl: [this.product.imgUrl, Validators.required],
      stock: [this.product.stock, Validators.required],
      state: [this.product.state, Validators.required],
    });
  }

  update() {
    this.productsService
      .update(this.activatedRoute.snapshot.params['id'], this.productForm.value)
      .subscribe((response) => {
        this.toastrService.success('Başarılı Güncellenmiştir');
        this.router.navigate(['/dash/productadd']);
      });
  }

  getBrand() {
    this.brandService.getBrand().subscribe((data) => {
      this.brands = data;
    });
  }
  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    });
  }
}
