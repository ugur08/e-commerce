import { Component, OnInit } from '@angular/core';
import { BrandModel } from 'src/models/BrandsModel';
import { CategoryModel } from 'src/models/CategoryModel';
import { BrandService } from 'src/services/brand.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  brands: BrandModel[] = [];
  category: CategoryModel[] = [];
  /*Filtre yaptığımızda */ brandFilter: number = 0;
  /*Filtre yaptığımızda */ categoryFilter: number = 0;
  brandLength: number;
  categoryLength: number;
  constructor(
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getBrand();
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
      this.categoryLength = this.category.length + 1;
    });
  }
  getBrand() {
    this.brandService.getBrand().subscribe((data) => {
      this.brands = data;
      this.brandLength = this.brands.length + 1;
    });
  }
}
