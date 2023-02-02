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
  userName: string;
  role: string;
  lastName: string;
  imgUrl: string;
  email: string;
  categories: CategoryModel[] = [];
  filterText: string;
  currentCategory: CategoryModel;

  ngOnInit(): void {
    this.getCategory();
    this.userName = localStorage.getItem('name');
    this.role = localStorage.getItem('role');
    this.lastName = localStorage.getItem('lastName');
    this.imgUrl = localStorage.getItem('image');
    this.email = localStorage.getItem('email');
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

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('lastName');
    localStorage.removeItem('image');
    localStorage.removeItem('email');
    window.location.reload();
  }
}
