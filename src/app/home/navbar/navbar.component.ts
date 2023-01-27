import { CategoryModel } from './../../../models/CategoryModel';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories: CategoryModel[] = [];
  filterText: string;
  currentCategory: CategoryModel;

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
  setCurrentCategory(category: CategoryModel) {
    this.currentCategory = category;
  }

  //menülerin aktive clasını geçiş yaptığında değişmesi
  getCurrentCategoryClass(category: CategoryModel) {
    if (category == this.currentCategory) {
      return 'nav-link active';
    } else {
      return 'nav-link';
    }
  }
}
