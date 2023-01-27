import { BrandModel } from './../../../models/BrandsModel';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  constructor(private brandService: BrandService) {}
  brands: BrandModel[] = [];
  currentBrand: BrandModel;

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand() {
    this.brandService.getBrand().subscribe((data) => {
      this.brands = data;
    });
  }
  setCurrentBrand(brand: BrandModel) {
    this.currentBrand = brand;
  }

  //menülerin aktive clasını geçiş yaptığında değişmesi
  getCurrentBrandClass(brand: BrandModel) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
