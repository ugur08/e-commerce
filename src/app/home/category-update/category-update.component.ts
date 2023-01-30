import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from './../../../models/CategoryModel';
import { CategoryService } from 'src/services/category.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent implements OnInit {
  categoryForm: FormGroup;
  category: CategoryModel;
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCategories(params['id']);
    });
  }
  getCategories(id) {
    this.categoryService.getProductsCategoryByIde(id).subscribe((data) => {
      this.category = data;
      this.updateForm();
    });
  }
  updateForm() {
    this.categoryForm = this.formBuilder.group({
      name: [this.category.name, [Validators.required]],
    });
  }
  update() {
    this.categoryService
      .update(
        this.activatedRoute.snapshot.params['id'],
        this.categoryForm.value
      )
      .subscribe((response) => {
        this.toastrService.success('Başarılı Güncellenmiştir.');
        this.router.navigate(['/dash/categoryadd']);
      });
  }
}
