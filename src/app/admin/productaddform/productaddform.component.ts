import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from '../../../models/CategoryModel';
import { CategoryService } from 'src/services/category.service';
import { BrandModel } from '../../../models/BrandsModel';
import { BrandService } from 'src/services/brand.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productaddform',
  templateUrl: './productaddform.component.html',
  styleUrls: ['./productaddform.component.html'],
})
export class ProductaddformComponent implements OnInit {
  productAdd: FormGroup;
  brands: BrandModel[] = [];
  category: CategoryModel[] = [];
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private brandSerice: BrandService,
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBrand();
  }

  productAddForm() {
    this.productAdd = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      rating: ['', Validators.required],
      cargo: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required],
      stock: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  add() {
    this.productsService.add(this.productAdd.value).subscribe((data) => {
      this.toastrService.success('başarılı eklenmiştir');
      setTimeout(() => {
        this.router.navigate(['/dash/productadd']);
      }, 3000);
    });
  }

  getBrand() {
    this.brandSerice.getBrand().subscribe((data) => {
      this.brands = data;
      this.getCategory();
    });
  }
  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
      this.productAddForm();
    });
  }
}
