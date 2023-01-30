import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from './../../../models/CategoryModel';
import { CategoryService } from 'src/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css'],
})
export class CategoryaddComponent implements OnInit {
  categories: CategoryModel[] = [];
  constructor(
    private categoryService: CategoryService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
  delete(id: number) {
    this.categoryService.delete(id).subscribe(() => {
      this.toastrService.error('Başarılı Silindi');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
  }
}
