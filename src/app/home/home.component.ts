import { CategoryModel } from './../../models/CategoryModel';
import { BrandModel } from './../../models/BrandsModel';
import { CategoryService } from 'src/services/category.service';
import { BrandService } from 'src/services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  brands: BrandModel[] = [];
  category: CategoryModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
